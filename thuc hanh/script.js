let users = [];
let currentEditId = null;

async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await res.json();
    displayUsers(users);
  } catch (err) {
    document.getElementById("user-list").innerHTML = "<p>Lỗi tải dữ liệu</p>";
  }
}

function displayUsers(data) {
  const container = document.getElementById("user-list");
  container.innerHTML = "";
  data.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <img src="https://randomuser.me/api/portraits/men/${user.id}.jpg" alt="avatar">
      <div>
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        <div class="actions">
          <button class="btn-edit" onclick="openEditModal(${user.id})">Edit</button>
          <button class="btn-delete" onclick="deleteUser(${user.id})">Delete</button>
        </div>
      </div>`;
    container.appendChild(card);
  });
}

function openEditModal(id) {
  const u = users.find(x => x.id === id);
  if (!u) return;
  currentEditId = id;
  document.getElementById("edit-name").value = u.name;
  document.getElementById("edit-email").value = u.email;
  document.getElementById("edit-phone").value = u.phone;
  document.getElementById("edit-address").value = `${u.address.street}, ${u.address.city}`;
  document.getElementById("edit-modal").classList.remove("hidden");
}

document.getElementById("cancel-edit").onclick = () => {
  document.getElementById("edit-modal").classList.add("hidden");
};

document.getElementById("edit-form").onsubmit = (e) => {
  e.preventDefault();
  const updated = {
    name: document.getElementById("edit-name").value,
    email: document.getElementById("edit-email").value,
    phone: document.getElementById("edit-phone").value,
    address: {
      street: document.getElementById("edit-address").value.split(",")[0].trim(),
      city: document.getElementById("edit-address").value.split(",")[1]?.trim() || "Unknown"
    }
  };

  users = users.map(u => u.id === currentEditId ? { ...u, ...updated } : u);
  displayUsers(users);
  document.getElementById("edit-modal").classList.add("hidden");
};

document.getElementById("add-user-btn").onclick = () => {
  document.getElementById("add-form").reset();
  document.getElementById("add-modal").classList.remove("hidden");
};

document.getElementById("cancel-add").onclick = () => {
  document.getElementById("add-modal").classList.add("hidden");
};

document.getElementById("add-form").onsubmit = (e) => {
  e.preventDefault();
  const newUser = {
    id: Date.now(),
    name: document.getElementById("add-name").value,
    email: document.getElementById("add-email").value,
    phone: document.getElementById("add-phone").value,
    address: {
      street: document.getElementById("add-address").value.split(",")[0].trim(),
      city: document.getElementById("add-address").value.split(",")[1]?.trim() || "Unknown"
    }
  };
  users.push(newUser);
  displayUsers(users);
  document.getElementById("add-modal").classList.add("hidden");
};

function deleteUser(id) {
  if (!confirm("Bạn có chắc muốn xoá người dùng này?")) return;
  users = users.filter(u => u.id !== id);
  displayUsers(users);
}

fetchUsers();