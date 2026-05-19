// ================= KIỂM TRA LOGIN =================

function isLoggedIn() {

    let currentUser =
        localStorage.getItem("currentUser");

    return currentUser !== null;

}


// ================= LẤY CURRENT USER =================

function getCurrentUser() {

    if (!isLoggedIn()) return null;
    
    return JSON.parse(localStorage.getItem("currentUser"));

}


// ================= YÊU CẦU LOGIN =================

function requireLogin(page) {

    if (!isLoggedIn()) {

        sessionStorage.setItem(
            "redirectAfterLogin",
            page
        );

        alert("Vui lòng đăng nhập trước!");

        window.location.href = "login.html";

    }

}


// ================= LOGIN =================

function login(email) {

    let accounts =
        JSON.parse(
            localStorage.getItem("accounts")
        ) || [];

    let found =
        accounts.find(acc =>
            acc.email === email
        );

    if(found){

        localStorage.setItem(
            "currentUser",
            JSON.stringify(found)
        );

    }

    localStorage.setItem(
        "isLogin",
        "true"
    );

    sessionStorage.setItem(
        "isLogin",
        "true"
    );

    sessionStorage.setItem(
        "username",
        email
    );

    // ===== KIỂM TRA VÀ CHUYỂN HƯỚNG SAU LOGIN =====
    let redirectPath =
        sessionStorage.getItem("redirectAfterLogin");

    if (redirectPath) {

        sessionStorage.removeItem("redirectAfterLogin");

        window.location.href = redirectPath;

    }

}


// ================= LOGOUT =================

function logout() {

    localStorage.removeItem("isLogin");

    sessionStorage.removeItem("isLogin");

    sessionStorage.removeItem("username");

    localStorage.removeItem("currentUser");

    sessionStorage.removeItem(
        "redirectAfterLogin"
    );

    alert("Đã đăng xuất!");

    window.location.href =
        "../ungvien/index.html";

}


// ================= CẬP NHẬT MENU =================

function updateMenu() {

    let loginMenu =
        document.getElementById("loginMenu");

    let logoutBtn =
        document.getElementById("logoutBtn");

    let userNameDisplay =
        document.getElementById("userNameDisplay");

    let currentUser =
        JSON.parse(
            localStorage.getItem("currentUser")
        );

    // ===== CHƯA LOGIN =====

    if (!currentUser) {

        if (loginMenu)
            loginMenu.style.display =
                "inline-block";

        if (logoutBtn)
            logoutBtn.style.display =
                "none";

        if (userNameDisplay) {
            userNameDisplay.style.display =
                "none";
            userNameDisplay.innerText = "";
        }

        return;

    }

    // ===== ĐÃ LOGIN =====

    if (loginMenu)
        loginMenu.style.display =
            "none";

    if (logoutBtn)
        logoutBtn.style.display =
            "inline-block";

    if (userNameDisplay) {

        userNameDisplay.style.display =
            "inline-block";

        // Hiển thị tên theo role
        if (currentUser.role === 'candidate') {
            userNameDisplay.innerText =
                "Xin chào, " +
                (currentUser.name || currentUser.email);
        } else if (currentUser.role === 'cooperative') {
            userNameDisplay.innerText =
                "HTX: " +
                (currentUser.name || currentUser.email);
        } else {
            userNameDisplay.innerText =
                "Xin chào, " +
                currentUser.email;
        }

    }

}


// ================= KIỂM TRA TRANG LOGIN =================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        updateMenu();

        // ===== NẾU ĐÃ LOGIN THÌ TỰ CHUYỂN =====

        let currentUser =
            JSON.parse(
                localStorage.getItem("currentUser")
            );

        if(currentUser){

            let path =
                window.location.pathname;

            // ===== LOGIN ỨNG VIÊN =====

            if(path.includes("/ungvien/login.html")){

                // ===== KIỂM TRA XEM CÓ REDIRECT SAU LOGIN KHÔNG =====
                let redirectPath =
                    sessionStorage.getItem("redirectAfterLogin");

                if (redirectPath &&
                    (redirectPath.includes("/apply.html") ||
                     redirectPath.includes("/ungvien/apply.html"))) {

                    sessionStorage.removeItem("redirectAfterLogin");
                    window.location.href = redirectPath;

                } else {

                    window.location.href =
                        "../ungvien/index.html";

                }

            }

            // ===== LOGIN HTX =====

            if(path.includes("/htx/login.html")){

                window.location.href =
                    "../htx/dashboard.html";

            }

        }

    }
);