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


export async function changeUsername(newUsername, token) {
  try {
    console.log('Starting username update process');
    console.log('Attempting to change username to:', newUsername);

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUsername }),
    });

    if (!response.ok) {
      let errorMessage = `Failed to update username. Status: ${response.status}`;
      if (response.status === 401) {
        errorMessage = 'Unauthorized: Please check your credentials.';
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log('Username updated successfully:', data);

    
    return data.body; 

  } catch (error) {
    console.error('Failed to update username', error);
    throw new Error(`Error updating username: ${error.message}`);
  }
}
