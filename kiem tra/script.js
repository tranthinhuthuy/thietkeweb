let recipes = [];  // Start with an empty array

// Fetch recipes data from the API
fetch("https://dummyjson.com/recipes")
  .then(response => response.json())
  .then(data => {
    recipes = data.recipes;  
    displayRecipes(recipes);  
  })
  .catch(error => console.error("Error fetching recipes:", error));

let currentEditId = null;

function displayRecipes(data) {
  const container = document.getElementById("user-list");
  container.innerHTML = "";
  data.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="Hình món ăn">
      <div>
        <h2>${recipe.name}</h2>
        <p><strong>Ẩm thực:</strong> ${recipe.cuisine}</p>
        <p><strong>Chuẩn bị:</strong> ${recipe.prepTimeMinutes} phút</p>
        <p><strong>Nấu:</strong> ${recipe.cookTimeMinutes} phút</p>
        <p><strong>Khẩu phần:</strong> ${recipe.servings}</p>
        <div class="actions">
          <button class="btn-edit" onclick="openEditModal(${recipe.id})">Sửa</button>
          <button class="btn-delete" onclick="deleteRecipe(${recipe.id})">Xoá</button>
        </div>
      </div>`;
    container.appendChild(card);
  });
}

function openEditModal(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;
  currentEditId = id;
  document.getElementById("edit-name").value = r.name;
  document.getElementById("edit-email").value = r.cuisine;
  document.getElementById("edit-phone").value = r.prepTimeMinutes;
  document.getElementById("edit-address").value = r.cookTimeMinutes;
  document.getElementById("edit-servings").value = r.servings;
  document.getElementById("edit-modal").classList.remove("hidden");
}

document.getElementById("cancel-edit").onclick = () => {
  document.getElementById("edit-modal").classList.add("hidden");
};

document.getElementById("edit-form").onsubmit = (e) => {
  e.preventDefault();
  const updated = {
    name: document.getElementById("edit-name").value,
    cuisine: document.getElementById("edit-email").value,
    prepTimeMinutes: +document.getElementById("edit-phone").value,
    cookTimeMinutes: +document.getElementById("edit-address").value,
    servings: +document.getElementById("edit-servings").value
  };
  recipes = recipes.map(r => r.id === currentEditId ? { ...r, ...updated } : r);
  displayRecipes(recipes);
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
  const newRecipe = {
    id: Date.now(),
    name: document.getElementById("add-name").value,
    cuisine: document.getElementById("add-email").value,
    prepTimeMinutes: +document.getElementById("add-phone").value,
    cookTimeMinutes: +document.getElementById("add-address").value,
    servings: 1,
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
  };
  recipes.push(newRecipe);
  displayRecipes(recipes);
  document.getElementById("add-modal").classList.add("hidden");
};

function deleteRecipe(id) {
  if (!confirm("Bạn có chắc muốn xoá công thức này?")) return;
  recipes = recipes.filter(r => r.id !== id);
  displayRecipes(recipes);
}

// Gọi ban đầu
displayRecipes(recipes);