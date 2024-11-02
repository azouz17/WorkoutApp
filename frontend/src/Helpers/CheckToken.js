function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return true;
    }
    return null;
  }
  
  async function checkOrRefreshAccessToken() {
    // Check if the access token exists as a cookie
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      return true; // Access token exists
    }
  
    try {
      // Attempt to refresh the access token using the refresh token
      const response = await fetch("http://localhost:5178/refresh", {
        method: "POST",
        credentials: "include", // This ensures cookies are sent with the request
      });
  
      if (response.ok) {
        const data = await response.json();
        
        // Set the new access token as a cookie
        document.cookie = `accessToken=${encodeURIComponent(data.accessToken)}; path=/; expires=${new Date(Date.now() + data.expiresIn * 1000).toUTCString()}`;
        
        return true; // Successfully refreshed the access token
      } else {
        // Refresh token might be expired or invalid
        return false;
      }
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      return false;
    }
  }