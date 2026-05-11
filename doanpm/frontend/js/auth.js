// ================= KIỂM TRA LOGIN =================
function isLoggedIn() {
    return sessionStorage.getItem("isLogin") === "true";
}

// ================= YÊU CẦU LOGIN =================
function requireLogin(page) {
    if (!isLoggedIn()) {
        sessionStorage.setItem("redirectAfterLogin", page);
        alert("Vui lòng đăng nhập trước!");
        window.location.href = "login.html";
    }
}

// ================= LOGIN =================
function login(email) {

    sessionStorage.setItem("isLogin", "true");
    sessionStorage.setItem("username", email);

    let redirect = sessionStorage.getItem("redirectAfterLogin");

    if (redirect) {
        sessionStorage.removeItem("redirectAfterLogin");
        window.location.href = redirect;
    } else {
        window.location.href = "index.html";
    }
}

// ================= LOGOUT =================
function logout() {
    sessionStorage.clear();
    alert("Đã đăng xuất!");
    window.location.href = "index.html";
}

// ================= CẬP NHẬT MENU =================
function updateMenu() {

    let loginMenu = document.getElementById("loginMenu");
    let logoutBtn = document.getElementById("logoutBtn");
    let userNameDisplay = document.getElementById("userNameDisplay");

    if (isLoggedIn()) {

        let username = sessionStorage.getItem("username");

        if (loginMenu) loginMenu.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "inline-block";

        if (userNameDisplay) {
            userNameDisplay.style.display = "inline-block";
            userNameDisplay.innerText = "Xin chào, " + username;
        }

    } else {

        if (loginMenu) loginMenu.style.display = "inline-block";
        if (logoutBtn) logoutBtn.style.display = "none";
        if (userNameDisplay) userNameDisplay.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", updateMenu);