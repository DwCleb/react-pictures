const DeviceKey = {
  AUTHENTICATED: '@APP:isAuthenticated',
  ACCESS_TOKEN: '@APP:accessToken',
};

/** -------- SETTERS ------- */
export const setIsAuthenticated = (authentication: string): string | null =>
  sessionStorage.SetItem(DeviceKey.AUTHENTICATED, authentication) || null;

export const setToken = (accessToken: string): void =>
  sessionStorage.setItem(DeviceKey.ACCESS_TOKEN, accessToken);

/** -------- GETTERS ------- */
export const getIsAuthenticated = (): string | null =>
  sessionStorage.getItem(DeviceKey.AUTHENTICATED) || null;

export const getToken = (): string | null =>
  sessionStorage.getItem(DeviceKey.ACCESS_TOKEN) || null;

/** -------- CLEAR ------- */
export const clearStorage = sessionStorage.clear();
