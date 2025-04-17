// Dữ liệu người dùng được chèn trực tiếp
const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "address": { "street": "Kulas Light", "city": "Gwenborough" },
      "phone": "1-770-736-8031 x56442",
      "company": { "name": "Romaguera-Crona" }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "address": { "street": "Victor Plains", "city": "Wisokyburgh" },
      "phone": "010-692-6593 x09125",
      "company": { "name": "Deckow-Crist" }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "Nathan@yesenia.net",
      "address": { "street": "Douglas Extension", "city": "McKenziehaven" },
      "phone": "1-463-123-4447",
      "company": { "name": "Romaguera-Jacobson" }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "Julianne.OConner@kory.org",
      "address": { "street": "Hoeger Mall", "city": "South Elvis" },
      "phone": "493-170-9623 x156",
      "company": { "name": "Robel-Corkery" }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "Lucio_Hettinger@annie.ca",
      "address": { "street": "Skiles Walks", "city": "Roscoeview" },
      "phone": "(254)954-1289",
      "company": { "name": "Keebler LLC" }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "email": "Karley_Dach@jasper.info",
      "address": { "street": "Norberto Crossing", "city": "South Christy" },
      "phone": "1-477-935-8478 x6430",
      "company": { "name": "Considine-Lockman" }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "email": "Telly.Hoeger@billy.biz",
      "address": { "street": "Rex Trail", "city": "Howemouth" },
      "phone": "210.067.6132",
      "company": { "name": "Johns Group" }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "email": "Sherwood@rosamond.me",
      "address": { "street": "Ellsworth Summit", "city": "Aliyaview" },
      "phone": "586.493.6943 x140",
      "company": { "name": "Abernathy Group" }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "email": "Chaim_McDermott@dana.io",
      "address": { "street": "Dayna Park", "city": "Bartholomebury" },
      "phone": "(775)976-6794 x41206",
      "company": { "name": "Yost and Sons" }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "email": "Rey.Padberg@karina.biz",
      "address": { "street": "Kattie Turnpike", "city": "Lebsackbury" },
      "phone": "024-648-3804",
      "company": { "name": "Hoeger LLC" }
    }
  ];
  
  // Hàm hiển thị danh sách người dùng
  function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
  
    users.forEach((user, index) => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const avatarUrl = `https://randomuser.me/api/portraits/men/${(index % 10) + 1}.jpg`;
  
      card.innerHTML = `
        <img src="${avatarUrl}" alt="Avatar">
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
      `;
      userList.appendChild(card);
    });
  }
  
  // Khi tài liệu được load xong, hiển thị user
  document.addEventListener('DOMContentLoaded', () => {
    displayUsers(users);
  });