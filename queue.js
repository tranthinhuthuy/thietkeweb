body{
    margin:0;
    font-family:Arial;
    background:#f5f5f5;
}

header{
    background:white;
    color:white;
}

.logo-area{
    text-align:center;
    padding:20px;
}

.logo{
    width:90px;
}

nav{
    background:#8b0000;
    padding:15px;
    text-align:center;
}

nav a{
    color:white;
    text-decoration:none;
    margin:0 15px;
    font-weight:bold;
}

.hero{
    padding:50px;
    text-align:center;
    background:white;
}

.services{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;
    padding:40px;
}

.card{
    background:white;
    padding:20px;
    width:250px;
    border-radius:8px;
    box-shadow:0 0 5px #ccc;
}
.container{

    width:90%;
    max-width:1200px;
    margin:auto;
    padding:20px;
}

input,
select,
textarea{
    width:100%;
    padding:12px;
    margin-top:5px;
    border:1px solid #ccc;
    border-radius:5px;
}

button{
    padding:12px 20px;
    background:#b30000;
    color:white;
    border:none;
    cursor:pointer;
    border-radius:5px;
}

button:hover{
    background:#8b0000;
}

h1,
h2{

    color:#b30000;
}
/* Banner */

.top-banner{
    background:#f7f7f7;
    min-height:220px;
    background-image:
    radial-gradient(circle at top right,
    rgba(200,0,0,.08),
    transparent 40%);

}

.banner-container{
    background:white;
    width:100%;
    padding:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:30px;
    margin:0 auto;
}

.banner-logo img{
    width:170px;
       height:auto;
}

.banner-text{
    text-align:center;
}

.banner-text h1{
    margin:0;
    color:#c62828;
    font-size:48px;
    font-weight:700;
}

.banner-text h2{
    margin-top:10px;
    color:#c62828;
    font-size:40px;
}

.banner-text p{
    font-size:28px;
    color:#666;
    font-weight:bold;
}

/* Menu */

.navbar{
    flex:1;
    display:flex;
    justify-content:center; 
    align-items:center;
    gap:25px;
}

.navbar a{
    color:white;
    text-decoration:none;
    padding:18px 22px;
    font-weight:bold;
}

.navbar a:hover{
    background:#a81d1d;
}

/* Thanh thông báo */

.marquee-bar{
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:#fff;
    padding:10px 20px;
    border-bottom:1px solid #ddd;

}

.date{
    width:250px;
    color:#333;

}

.search-box{
    display:flex;
}

.search-box input{
    width:250px;
    padding:10px;
    border:1px solid #ccc;
}

.search-box button{
    background:#c62828;
    color:white;
    border:none;
    width:50px;
    cursor:pointer;

}
.search-panel{
    background:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 3px 12px rgba(0,0,0,.08);
    margin-bottom:30px;
}

.search-panel h2{
    text-align:center;
    color:#c62828;
    margin-bottom:20px;
}
.marquee-bar{
    display:flex;
    align-items:center;
    background:white;
    padding:10px;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
}

.date-time{
    width:300px;
    font-weight:bold;
    color:#0d47a1;
}

.running-text{
    flex:1;
    color:#c62828;
    font-weight:bold;
    font-size:18px;
}
/* Footer */

.footer{
    background:#c62828;
    color:white;
    text-align:center;
    padding:35px 20px;
    margin-top:50px;
    line-height:1.8;
    border-top:4px solid #a71d2a;
}

.footer h3{
    color:white;
    margin-bottom:15px;
    font-size:22px;
    font-weight:bold;
    text-transform:uppercase;
}

.footer p{
    color:white;
    margin:6px 0;
    font-size:16px;
}
/* Tiêu đề các khối */

.quick-services h2,
.popular-section h2,
.news-section h2,
.links-section h2{
    text-align:center;
    color:#c62828;
    margin-bottom:25px;
}

/* Dịch vụ công */

.quick-services{
    width:90%;
    margin:40px auto;
}

.service-grid{
    display:grid;
    grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.service-box{
    background:white;
    padding:25px;
    border-radius:10px;
    text-align:center;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
    transition:.3s;
}

.service-box:hover{
    transform:translateY(-5px);
}

/* Thủ tục phổ biến */

.popular-section{
    width:90%;
    margin:40px auto;
}

.popular-grid{
    display:grid;
    grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));

    gap:20px;
}

/* Tin tức */

.news-section{
    width:90%;
    margin:40px auto;
}

.news-box{
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
}

.news-box li{
    margin:12px 0;
}

/* Liên kết nhanh */

.links-section{
    width:90%;
    margin:40px auto;
}
.menu-toggle{
    display:none;
    background:#c62828;
    color:white;
    font-size:28px;
    padding:10px 20px;
    cursor:pointer;
    text-align:right;
}


@media(max-width:768px){
    .menu-toggle{
        display:block;
    }

    .navbar{
        display:none;
        flex-direction:column;
        width:100%;
    }

    .navbar.active{
        display:flex;
    }

    .navbar a{
        text-align:center;
    }
}
.search-box{
    display:flex;
    align-items:center;
    position:relative;
}

.search-box input{
    width:280px;
    height:44px;
    padding-left:15px;
    padding-right:45px;
    border:1px solid #ccc;
    border-radius:12px 0 0 12px;
    outline:none;
    font-size:15px;
}

.mic-icon{
    cursor:pointer;
    font-size:24px;
    color:#999;
    padding:0 12px;
    display:flex;
    align-items:center;
    justify-content:center;
}

.mic-icon:hover{
    color:#0b4f8a;
}

.search-btn{
    width:50px;
    height:46px;
    border:none;
    background:#003f7f;
    color:white;
    font-size:18px;
    border-radius:0 12px 12px 0;
    cursor:pointer;
}

.search-btn:hover{

    background:#002b5e;
}
#voice-status{
    display:none;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    background:#c62828;
    color:white;
    padding:15px 25px;
    border-radius:10px;
    font-size:18px;
    font-weight:bold;
    z-index:9999;
    box-shadow:0 4px 15px rgba(0,0,0,0.3);
}
/* =========================
   PROCEDURES PAGE
========================= */

.procedure-section{
    width:90%;
    max-width:1200px;
    margin:30px auto;
}

.procedure-title{
    text-align:center;
    color:#c62828;
    margin-bottom:25px;
}

.procedure-filter{
    display:flex;
    gap:15px;
    margin-bottom:25px;
    flex-wrap:wrap;
}

.procedure-filter input{
    flex:1;
    min-width:250px;
}

.procedure-filter select{
    width:250px;
}

.procedure-grid{
    display:grid;
    grid-template-columns:
    repeat(auto-fit,minmax(320px,1fr));
    gap:20px;
}

.procedure-card{
    background:white;
    border-radius:10px;
    padding:20px;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
    transition:.3s;
}

.procedure-card:hover{
    transform:translateY(-5px);
}

.procedure-card h3{
    color:#0d47a1;
    margin-top:0;
}

.procedure-info{
    margin:10px 0;
}

.procedure-info p{
    margin:8px 0;
}

.procedure-info strong{
    color:#c62828;
}

.procedure-btn{
    margin-top:15px;
}

/* Modal chi tiết thủ tục */

.modal{
    display:none;
    position:fixed;
    z-index:9999;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
}

.modal-content{
    background:white;
    width:90%;
    max-width:700px;
    margin:5% auto;
    padding:25px;
    border-radius:10px;
    position:relative;
}

.close{
    position:absolute;
    top:10px;
    right:15px;
    font-size:28px;
    cursor:pointer;
    color:#c62828;
}

.close:hover{
    color:#8b0000;
}

.procedure-detail h2{
    color:#c62828;
}

.procedure-detail ul{
    padding-left:20px;
}

.procedure-detail li{
    margin-bottom:8px;
}

/* Responsive */

@media(max-width:768px){

    .procedure-filter{
        flex-direction:column;
    }

    .procedure-filter select{
        width:100%;
    }

    .procedure-grid{
        grid-template-columns:1fr;
    }
    .procedure-search{
    flex-direction:column;
}

.procedure-search input,
.procedure-search select,
.search-procedure-btn{
    width:100%;
    max-width:100%;
}

}
.procedure-header{
    text-align:center;
    padding:40px 20px;
    background:white;
    border-radius:15px;
    margin-bottom:30px;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
}

.procedure-header h1{
    color:#c62828;
    margin-bottom:10px;
    font-size:32px;
    font-weight:700;
}

.procedure-header p{
    color:#666;
    font-size:18px;
}
.procedure-search{
    display:flex;
    gap:15px;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    margin-bottom:35px;
}

.procedure-search input{
    flex:1;
    min-width:280px;
    max-width:550px;
    height:50px;
    border:2px solid #ddd;
    border-radius:12px;
    padding:0 15px;
    font-size:16px;
    transition:.3s;
}

.procedure-search input:focus{
    border-color:#c62828;
    box-shadow:0 0 10px rgba(198,40,40,.2);
}

.procedure-search select{
    width:220px;
    height:54px;
    border:2px solid #ddd;
    border-radius:12px;
    font-size:16px;
    cursor:pointer;
}

.procedure-search select:focus{
    border-color:#c62828;
}
.search-desc{
    text-align:center;
    color:#666;
    margin-bottom:25px;
    font-size:16px;
    line-height:1.6;
}

.search-procedure-btn{
    height:54px;
    min-width:140px;
    background:#c62828;
    color:white;
    border:none;
    border-radius:12px;
    cursor:pointer;
    font-size:16px;
    font-weight:bold;
    transition:.3s;
}

.search-procedure-btn:hover{
    background:#a81d1d;
    transform:translateY(-2px);
}

.no-result{
    background:white;
    padding:30px;
    border-radius:12px;
    text-align:center;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
}

.no-result h3{
    color:#c62828;
    margin-bottom:10px;
}

.no-result p{
    color:#666;
}

.procedure-detail p{
    margin:10px 0;
    line-height:1.7;
}

.procedure-detail h3{
    color:#0d47a1;
    margin-top:20px;
    margin-bottom:10px;
}

.procedure-detail button{
    margin-top:20px;
}

.modal-content{
    animation:fadeIn .3s ease;
}

@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(-20px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }
}
/* ==========================
   TÀI KHOẢN
========================== */

.account-menu{
    position:absolute;
    right:20px;
    display:flex;
    align-items:center;
    gap:10px;
}

#accountIcon{
    font-size:30px;
    color:white;
    cursor:pointer;
}

#accountIcon:hover{
    color:#ffe082;
}
.account-menu i{
    font-size:28px;
    cursor:pointer;
    transition:.3s;
}

.account-menu i:hover{
    color:#ffe082;
}

#userName{
    font-weight:bold;
    color:white;
}

#logoutBtn{
    display:none;
    padding:8px 14px;
    height:38px;
    background:white;
    color:#c62828;
    border:none;
    border-radius:6px;
    cursor:pointer;
    font-weight:bold;
}

#logoutBtn:hover{
    background:#f5f5f5;
}

/* ==========================
   MODAL ĐĂNG NHẬP
========================== */

.login-modal{
    display:none;
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
    justify-content:center;
    align-items:center;
    z-index:9999;
}

.login-box{
    background:white;
    width:420px;
    max-width:90%;
    padding:35px;
    border-radius:15px;
    position:relative;
    box-shadow:0 5px 20px rgba(0,0,0,.2);
}

.login-box h2{
    text-align:center;
    margin-bottom:25px;
    color:#c62828;
}

.login-box input{
    width:100%;
    padding:12px;
    margin-bottom:15px;
    border:1px solid #ccc;
    border-radius:8px;
    box-sizing:border-box;
}

.login-box button{
    width:100%;
    padding:12px;
    background:#c62828;
    color:white;
    border:none;
    border-radius:8px;
    font-size:16px;
    font-weight:bold;
}

.login-box button:hover{
    background:#a81d1d;
}

.login-box p{
    text-align:center;
    margin-top:15px;
}

.login-box a{
    color:#c62828;
    font-weight:bold;
    text-decoration:none;
}

.close-login{
    position:absolute;
    right:15px;
    top:10px;
    font-size:30px;
    cursor:pointer;
    color:#c62828;
}

.close-login:hover{
    color:#8b0000;
}
.nav-wrapper{
    background:#c62828;
    display:flex;
    width:100%;
}
@media(max-width:768px){

    .nav-wrapper{
        flex-direction:column;
    }

    .account-menu{
        margin:10px 0;
        justify-content:center;
    }

}
/* =========================
   FEEDBACK PAGE
========================= */

.feedback-section{
    width:90%;
    max-width:1000px;
    margin:40px auto;
}

.feedback-header{
    background:white;
    padding:35px;
    border-radius:15px;
    text-align:center;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
    margin-bottom:30px;
}

.feedback-header h1{
    color:#c62828;
    margin-bottom:10px;
}

.feedback-header p{
    color:#666;
    font-size:16px;
    line-height:1.6;
}

.feedback-form{
    background:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
}

.feedback-form .form-group{
    margin-bottom:20px;
}

.feedback-form label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
    color:#333;
}

.feedback-form input,
.feedback-form select,
.feedback-form textarea{
    width:100%;
    box-sizing:border-box;
}

.feedback-form textarea{
    resize:vertical;
    min-height:150px;
}

.feedback-btn{
    width:100%;
    height:50px;
    background:#c62828;
    color:white;
    border:none;
    border-radius:10px;
    font-size:16px;
    font-weight:bold;
    cursor:pointer;
    transition:.3s;
}

.feedback-btn:hover{
    background:#a81d1d;
}

.feedback-note{
    margin-top:25px;
    padding:15px;
    background:#fff8e1;
    border-left:5px solid #ffb300;
    border-radius:8px;
}

.feedback-note h3{
    margin-top:0;
    color:#c62828;
}

.feedback-note ul{
    margin:10px 0 0;
    padding-left:20px;
}

.feedback-note li{
    margin-bottom:8px;
}

.feedback-contact{
    margin-top:30px;
    background:white;
    padding:25px;
    border-radius:15px;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
}

.feedback-contact h3{
    color:#c62828;
    margin-bottom:15px;
}

.feedback-contact p{
    margin:8px 0;
    color:#444;
}

/* Responsive */

@media(max-width:768px){

    .feedback-header,
    .feedback-form,
    .feedback-contact{
        padding:20px;
    }

    .feedback-header h1{
        font-size:26px;
    }

}
.feedback-title{
    text-align:center;
    margin-bottom:30px;
    padding:25px;
    background:#fff5f5;
    border-radius:12px;
    border:1px solid #ffd6d6;
}
.feedback-title h1{
    color:#c62828;
    margin-bottom:10px;
    font-size:32px;
}

.feedback-title p{
    max-width:700px;
    margin:0 auto;
    color:#666;
    line-height:1.8;
    font-size:16px;
}
.feedback-section{
    width:100%;
    padding:50px 20px;
}

.feedback-form{
    max-width:800px;
    margin:0 auto;
    background:white;
    padding:40px;
    border-radius:15px;
    box-shadow:0 2px 12px rgba(0,0,0,.1);
}

.feedback-form h2{
    text-align:center;
    color:#c62828;
    margin-bottom:15px;
}

.feedback-desc{
    text-align:center;
    color:#666;
    margin-bottom:30px;
    line-height:1.6;
}

.feedback-form label{
    display:block;
    margin-bottom:8px;
    margin-top:15px;
    font-weight:bold;
    color:#333;
}

.feedback-form textarea{
    min-height:180px;
    resize:vertical;
}

.feedback-form button{
    width:100%;
    margin-top:25px;
    height:50px;
    font-size:16px;
    font-weight:bold;
}
.required{
    color:red;
    font-weight:bold;
}

.feedback-form input[type="file"]{
    background:#fff;
    padding:10px;
    border:1px dashed #ccc;
    border-radius:8px;
}

.feedback-form input[type="file"]:hover{
    border-color:#c62828;
}
/* ==========================
   RATING PAGE
========================== */

.rating-section{
    width:100%;
    padding:50px 20px;
}

.rating-form{
    max-width:850px;
    margin:auto;
    background:white;
    padding:40px;
    border-radius:15px;
    box-shadow:0 2px 12px rgba(0,0,0,.1);
}

.rating-form h2{
    text-align:center;
    color:#c62828;
}

.rating-desc{
    text-align:center;
    color:#666;
    margin-bottom:30px;
}

.rating-form label{
    display:block;
    margin-top:15px;
    margin-bottom:8px;
    font-weight:bold;
}

.star-rating{
    background:#fafafa;
    padding:15px;
    border-radius:10px;
    border:1px solid #ddd;
}

.required{
    color:red;
}

.rating-form textarea{
    min-height:150px;
}

.rating-form button{
    width:100%;
    margin-top:25px;
    height:50px;
    font-size:16px;
    font-weight:bold;
}
/* ==========================
   ĐÁNH GIÁ HÀI LÒNG
========================== */

.rating-section{
    background:white;
    max-width:900px;
    margin:40px auto;
    padding:35px;
    border-radius:15px;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
}

.rating-section h1{
    text-align:center;
    color:#c62828;
}

.rating-desc{
    text-align:center;
    color:#666;
    margin-bottom:30px;
}

.form-group{
    margin-bottom:20px;
}

.form-group label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
}

.required{
    color:red;
}

.rating-stars{
    display:flex;
    gap:20px;
    flex-wrap:wrap;
    font-size:22px;
}

.rating-stars label{
    cursor:pointer;
}

#evaluationForm{
    margin-top:30px;
    padding-top:20px;
}

#evaluationForm h2{
    text-align:center;
    color:#0d47a1;
    margin-bottom:25px;
}

.submit-btn{
    width:100%;
    margin-top:20px;
}
/* ===================================
   CHATBOT NỔI GÓC PHẢI
=================================== */

/* Icon robot */

#chat-icon{
    position:fixed;
    right:20px;
    bottom:20px;
    width:90px;
    height:90px;
    cursor:pointer;
    z-index:10000;
    transition:0.3s;
}

#chat-icon img{
    width:100%;
    height:100%;
    object-fit:contain;
}

#chat-icon:hover{
    transform:scale(1.08);
}

/* Bong bóng gợi ý */

.chat-tooltip{
    position:fixed;
    right:25px;
    bottom:120px;
    background:#c62828;
    color:white;
    padding:8px 14px;
    border-radius:20px;
    font-size:14px;
    font-weight:bold;
    cursor:pointer;
    z-index:10000;
    box-shadow:0 2px 10px rgba(0,0,0,.2);
    transition:.3s;
}

.chat-tooltip:hover{
    transform:scale(1.05);
}

@keyframes floatChat{
    0%{
        transform:translateY(0);
    }
    50%{
        transform:translateY(-5px);
    }
    100%{
        transform:translateY(0);
    }
}

/* Hộp chat */

#chat-box{
    position:fixed;
    right:20px;
    bottom:120px;
    width:380px;
    height:550px;
    background:white;
    border-radius:15px;
    overflow:hidden;
    display:none;
    z-index:10000;
    box-shadow:0 5px 25px rgba(0,0,0,.25);
}

/* Header */

.chat-header{
    background:#c62828;
    color:white;
    padding:15px;
    font-weight:bold;
    font-size:16px;
}

/* Nội dung chat */

#chat-messages{
    height:290px;
    overflow-y:auto;
    padding:15px;
    background:#f8f8f8;
}

/* Tin nhắn bot */

.bot-message{
    background:#e3f2fd;
    color:#333;
    padding:10px 12px;
    border-radius:10px;
    margin-bottom:10px;
    max-width:85%;
}

/* Tin nhắn người dùng */

.user-message{
    background:#c62828;
    color:white;
    padding:10px 12px;
    border-radius:10px;
    margin-bottom:10px;
    margin-left:auto;
    max-width:85%;
    text-align:right;
}

/* Câu hỏi nhanh */

.quick-question{
    padding:10px;
    background:#fff;
    border-top:1px solid #eee;
    display:flex;
    flex-wrap:wrap;
    gap:8px;
}

.quick-question button{
    width:auto;
    padding:8px 12px;
    border:none;
    border-radius:20px;
    background:#e3f2fd;
    color:#333;
    cursor:pointer;
    font-size:13px;
}

.quick-question button:hover{
    background:#bbdefb;
}

/* Khu nhập liệu */

.chat-input-area{
    display:flex;
    align-items:center;
    border-top:1px solid #ddd;
    background:white;
    padding:10px;
}
.chat-input-area input{
    flex:1;
    border:1px solid #ddd;
    border-radius:20px;
    padding:10px 15px;
    outline:none;
}
/* Ô nhập */

#chat-input{
    flex:1;
    border:1px solid #ddd;
    border-radius:25px;
    padding:10px 15px;
    outline:none;
    font-size:14px;
}

/* Mic */

.chat-input-area .mic-icon{
    font-size:22px;
    color:#666;
    cursor:pointer;
    padding:0 12px;
}

.chat-input-area .mic-icon:hover{
    color:#c62828;
}

/* Gửi */

.chat-send{
    margin-left:8px;
    border:none;
    background:#c62828;
    color:white;
    padding:10px 15px;
    border-radius:20px;
    cursor:pointer;
}

.chat-send:hover{
    background:#a71d2a;
}

/* Scroll đẹp */

#chat-messages::-webkit-scrollbar{
    width:6px;
}

#chat-messages::-webkit-scrollbar-thumb{
    background:#ccc;
    border-radius:10px;
}

/* Mobile */

@media(max-width:768px){

    #chat-box{
        width:95%;
        right:2.5%;
        height:520px;
    }

    #chat-icon{
        width:75px;
        height:75px;
    }

    .chat-tooltip{
        display:none;
    }
}

/* =========================
   FORMS PAGE
========================= */

.forms-section{
    width:100%;
    padding:50px 20px;
    animation:fadeIn .4s ease;
}

/* Khung chính */

.forms-box{
    max-width:900px;
    margin:auto;
    background:white;
    padding:40px;
    border-radius:15px;
    box-shadow:0 2px 12px rgba(0,0,0,.08);
}

/* Tiêu đề */

.forms-header{
    text-align:center;
    margin-bottom:30px;
}

.forms-header h1{
    color:#c62828;
    margin-bottom:12px;
    font-size:32px;
    font-weight:700;
    text-transform:uppercase;
}

.forms-header p{
    color:#666;
    font-size:16px;
    line-height:1.8;
    max-width:700px;
    margin:auto;
}

/* Search */

.forms-search{
    position:relative;
    margin-bottom:30px;
}

.forms-search input{
    width:100%;
    height:55px;
    border:2px solid #ddd;
    border-radius:12px;
    padding:0 18px;
    font-size:16px;
    transition:.3s;
    box-sizing:border-box;
}

.forms-search input:focus{
    border-color:#c62828;
    box-shadow:0 0 10px rgba(198,40,40,.15);
    outline:none;
}

/* Suggestions */

.suggestions{
    position:absolute;
    top:58px;
    left:0;
    width:100%;
    background:white;
    border:1px solid #ddd;
    border-top:none;
    border-radius:0 0 12px 12px;
    display:none;
    max-height:250px;
    overflow-y:auto;
    z-index:999;
    box-shadow:0 4px 12px rgba(0,0,0,.08);
}

.suggestions::-webkit-scrollbar{
    width:6px;
}

.suggestions::-webkit-scrollbar-thumb{
    background:#ccc;
    border-radius:10px;
}

.suggestion-item{
    padding:12px 15px;
    cursor:pointer;
    transition:.3s;
    border-bottom:1px solid #eee;
}

.suggestion-item:last-child{
    border-bottom:none;
}

.suggestion-item:hover{
    background:#f8f8f8;
    color:#c62828;
}

/* Danh sách biểu mẫu */

.form-list{
    margin-top:10px;
}

.form-item{
    padding:18px 15px;
    border-bottom:1px solid #eee;
    transition:.3s;
    border-radius:8px;
}

.form-item:last-child{
    border-bottom:none;
}

.form-item:hover{
    background:#fafafa;
    transform:translateX(5px);
}

.form-item a{
    text-decoration:none;
    color:#2c3e50;
    font-size:19px;
    font-weight:600;
    transition:.3s;
}

.form-item a:hover{
    color:#c62828;
}

.form-category{
    color:#777;
    font-size:14px;
    margin-top:6px;
    margin-left:28px;
}

.form-download{
    color:#0d47a1;
    font-size:14px;
    margin-left:28px;
    margin-top:4px;
}

/* Không tìm thấy */

.no-form{
    text-align:center;
    color:#999;
    padding:25px;
    font-style:italic;
    background:#fafafa;
    border-radius:10px;
}

/* Hiệu ứng */

@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(15px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }
}

/* Responsive */

@media(max-width:768px){

    .forms-section{
        padding:30px 15px;
    }

    .forms-box{
        padding:20px;
    }

    .forms-header h1{
        font-size:26px;
    }

    .forms-header p{
        font-size:15px;
    }

    .form-item{
        padding:15px 10px;
    }

    .form-item a{
        font-size:17px;
    }

    .forms-search input{
        height:50px;
        font-size:15px;
    }

    .form-category,
    .form-download{
        margin-left:15px;
    }
}