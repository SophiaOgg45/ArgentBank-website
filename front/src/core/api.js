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



 // Requette pour la modification du Username

// ../core/api.js

export async function changeUsername(newUsername, token) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUsername }),
    });

    if (!response.ok) {
      throw new Error('Failed to update username');
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error updating username: ${error.message}`);
  }
}


