/**
 * Google Drive API Service for client-side integration
 */

export interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  createdTime?: string;
  webViewLink?: string;
}

export const SCOPES = ["https://www.googleapis.com/auth/drive"];

// In-memory token cache
let cachedToken: string | null = null;
let tokenExpiryTime: number | null = null;

/**
 * Save user credentials in localStorage for easy developer configuration of independent client IDs
 */
export const getStoredCredentials = () => {
  return {
    clientId: localStorage.getItem("pd_google_client_id") || (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID || "",
    apiKey: localStorage.getItem("pd_google_api_key") || (import.meta as any).env?.VITE_GOOGLE_API_KEY || "",
  };
};

export const setStoredCredentials = (clientId: string, apiKey: string) => {
  localStorage.setItem("pd_google_client_id", clientId);
  localStorage.setItem("pd_google_api_key", apiKey);
};

export const removeStoredCredentials = () => {
  localStorage.removeItem("pd_google_client_id");
  localStorage.removeItem("pd_google_api_key");
};

/**
 * Setup and obtain the Access Token
 */
export const setCachedToken = (token: string, expiresInSeconds: number) => {
  cachedToken = token;
  tokenExpiryTime = Date.now() + expiresInSeconds * 1000;
};

export const getCachedToken = (): string | null => {
  if (cachedToken && tokenExpiryTime && Date.now() < tokenExpiryTime) {
    return cachedToken;
  }
  // Token expired
  cachedToken = null;
  tokenExpiryTime = null;
  return null;
};

export const clearCachedToken = () => {
  cachedToken = null;
  tokenExpiryTime = null;
};

/**
 * Build authorize URL for implicit grant flow
 */
export const buildAuthUrl = (clientId: string, redirectUri: string, state: string = "drive_setup") => {
  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.searchParams.append("client_id", clientId);
  url.searchParams.append("redirect_uri", redirectUri);
  url.searchParams.append("response_type", "token");
  url.searchParams.append("scope", SCOPES.join(" "));
  url.searchParams.append("state", state);
  return url.toString();
};

/**
 * List files and folders in Google Drive
 */
export const listDriveFiles = async (
  token: string,
  searchQuery?: string,
  folderId?: string
): Promise<GoogleDriveFile[]> => {
  let query = "trashed = false";

  if (folderId) {
    query += ` and '${folderId}' in parents`;
  }
  
  if (searchQuery) {
    // Sanitizing search query
    const escapedQuery = searchQuery.replace(/'/g, "\\'");
    query += ` and (name contains '${escapedQuery}' or mimeType contains '${escapedQuery}')`;
  }

  const url = new URL("https://www.googleapis.com/drive/v3/files");
  url.searchParams.append("q", query);
  url.searchParams.append("pageSize", "40");
  url.searchParams.append("fields", "files(id, name, mimeType, size, createdTime, webViewLink)");
  url.searchParams.append("orderBy", "folder,name");

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || "Failed to fetch files from Google Drive.");
  }

  const data = await response.json();
  return data.files || [];
};

/**
 * Create a folder in Google Drive
 */
export const createDriveFolder = async (token: string, folderName: string, parentId?: string): Promise<GoogleDriveFile> => {
  const metadata: any = {
    name: folderName,
    mimeType: "application/vnd.google-apps.folder",
  };

  if (parentId) {
    metadata.parents = [parentId];
  }

  const response = await fetch("https://www.googleapis.com/drive/v3/files", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(metadata),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || "Failed to create folder in Google Drive.");
  }

  return response.json();
};

/**
 * Upload a standard file using Google Drive multipart upload
 */
export const uploadFileToDrive = async (
  token: string,
  file: File,
  parentId?: string
): Promise<GoogleDriveFile> => {
  const metadata: any = {
    name: file.name,
    mimeType: file.type || "application/octet-stream",
  };

  if (parentId) {
    metadata.parents = [parentId];
  }

  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  form.append("file", file);

  const response = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: form,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || "Failed to upload file to Google Drive.");
  }

  return response.json();
};

/**
 * Create/Export a project proposal document as a clean file in Google Drive
 */
export const createProposalFile = async (
  token: string,
  proposalName: string,
  content: string,
  parentId?: string
): Promise<GoogleDriveFile> => {
  const metadata: any = {
    name: `${proposalName}.txt`,
    mimeType: "text/plain",
  };

  if (parentId) {
    metadata.parents = [parentId];
  }

  const fileBlob = new Blob([content], { type: "text/plain;charset=utf-8" });
  
  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  form.append("file", fileBlob);

  const response = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: form,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || "Failed to save proposal to Google Drive.");
  }

  return response.json();
};

/**
 * Delete a file or folder from Google Drive
 * STRICT REQUIREMENT: Ensure user confirmation in client-side UI before calling this.
 */
export const deleteDriveFile = async (token: string, fileId: string): Promise<void> => {
  const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || "Failed to delete file from Google Drive.");
  }
};
