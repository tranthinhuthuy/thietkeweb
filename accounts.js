<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Phản ánh - Kiến nghị</title>

    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/feedback.css">

    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>

<section class="feedback-section">

    <div class="feedback-form">

        <h2>
            PHẢN ÁNH - KIẾN NGHỊ
        </h2>

        <p class="feedback-desc">
            Gửi phản ánh, kiến nghị, góp ý về thủ tục hành chính,
            thái độ phục vụ, chuyển đổi số và các vấn đề liên quan.
        </p>

        <form>

           <label>
    Họ và tên
    <span class="required">*</span>
</label>
<input
    type="text"
    id="fullName"
    required>

<label>
    Số điện thoại
    <span class="required">*</span>
</label>
<input
    type="text"
    id="phone"
    required>

<label>
    Email
    <span class="required">*</span>
</label>
<input
    type="email"
    id="email"
    required>

<label>
    Loại phản ánh
    <span class="required">*</span>
</label>

<select id="feedbackType" required>
    <option value="">
        -- Chọn loại phản ánh --
    </option>

    <option>
        Thủ tục hành chính
    </option>

    <option>
        Thái độ phục vụ
    </option>

    <option>
        Chuyển đổi số
    </option>

    <option>
        Góp ý khác
    </option>
</select>

<label>
    Nội dung phản ánh
    <span class="required">*</span>
</label>

<textarea
    id="content"
    rows="6"
    required>
</textarea>

<label>
    Hình ảnh/Tài liệu minh chứng
</label>

<input
    type="file"
    id="attachment"
    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx">

<button
    type="button"
    onclick="submitFeedback()">

    Gửi phản ánh

</button>
        </form>

    </div>

</section>

<script src="../js/feedback.js"></script>
<script>

<script>

function submitFeedback()
{
    const fullName =
    document
    .getElementById("fullName")
    .value
    .trim();

    const phone =
    document
    .getElementById("phone")
    .value
    .trim();

    const email =
    document
    .getElementById("email")
    .value
    .trim();

    const feedbackType =
    document
    .getElementById("feedbackType")
    .value;

    const content =
    document
    .getElementById("content")
    .value
    .trim();

    if(
        fullName === "" ||
        phone === "" ||
        email === "" ||
        feedbackType === "" ||
        content === ""
    )
    {
        alert(
            "Vui lòng điền đầy đủ các thông tin bắt buộc (*)"
        );
        return;
    }

    // Tạo dữ liệu phản ánh

    const feedback = {

        fullName: fullName,
        phone: phone,
        email: email,
        feedbackType: feedbackType,
        content: content,

        createdAt:
        new Date()
        .toLocaleString("vi-VN")

    };

    // Lấy dữ liệu cũ

    let feedbackList =
    JSON.parse(
        localStorage.getItem("feedbacks")
    ) || [];

    // Thêm dữ liệu mới

    feedbackList.push(
        feedback
    );

    // Lưu lại

    localStorage.setItem(
        "feedbacks",
        JSON.stringify(feedbackList)
    );

    alert(
        "Gửi phản ánh thành công!"
    );

    document
    .querySelector("form")
    .reset();
}

</script>
</body>
</html>