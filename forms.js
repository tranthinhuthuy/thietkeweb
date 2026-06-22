<!DOCTYPE html>
<html lang="vi">
<head>

<meta charset="UTF-8">

<title>Bốc số trực tuyến</title>

<link rel="stylesheet" href="../css/style.css">

</head>
<body>

<h2>Bốc số trực tuyến</h2>

<input
id="fullname"
placeholder="Họ tên"
>

<br><br>

<input
id="phone"
placeholder="Số điện thoại"
>

<br><br>

<select id="service">

<option value="Hộ tịch">
Hộ tịch
</option>

<option value="Chứng thực">
Chứng thực
</option>

<option value="Đất đai">
Đất đai
</option>

<option value="Chính sách xã hội">
Chính sách xã hội
</option>

</select>

<br><br>

<button onclick="registerQueue()">
Đăng ký
</button>

<hr>

<div id="queue-result"></div>

<script src="../js/queue.js"></script>

</body>
</html>