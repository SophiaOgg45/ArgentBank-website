export async function logUser(email, password) {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
  });
  return response.json();
}

export async function getUserProfile(token) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
          "Authorization": `Bearer ${token}`,
      },
  });
  return response.json();
}

  // Requête pour la modification du Username
  export async function changeUsername(newUserName, token) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: newUserName }),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    return response.json();
  }
  