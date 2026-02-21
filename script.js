const userContainer = document.getElementById("users");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    userContainer.innerHTML = users.map(user => `
      <div class="card">
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
      </div>
    `).join("");

  } catch (error) {
    userContainer.innerHTML = "<p style='color:white;'>Failed to load users.</p>";
  }
}

fetchUsers();