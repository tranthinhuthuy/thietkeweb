<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Đánh giá mức độ hài lòng</title>

    <link rel="stylesheet" href="../css/style.css">
</head>

<body>

<header>

    <div class="top-banner">

        <div class="banner-container">

            <div class="banner-logo">
                <img src="../images/quoc huy.jpg" alt="Quốc huy">
            </div>

            <div class="banner-text">

                <h1>
                    TRUNG TÂM PHỤC VỤ HÀNH CHÍNH CÔNG
                </h1>

                <h2>
                    XÃ ĐĂK HÀ
                </h2>

                <p>
                    Hành chính phục vụ - Chuyển đổi số vì người dân
                </p>

            </div>

        </div>

    </div>

</header>

<main class="container">

    <div class="rating-section">

        <h1>
            ĐÁNH GIÁ MỨC ĐỘ HÀI LÒNG
        </h1>

        <p class="rating-desc">
            Người dân vui lòng đánh giá chất lượng phục vụ của
            Trung tâm Phục vụ Hành chính công xã Đăk Hà.
        </p>

        <form id="ratingForm">

    <div class="form-group">

        <label>
            Họ và tên
            <span class="required">*</span>
        </label>

        <input
            type="text"
            id="fullName"
            placeholder="Nhập họ và tên">

    </div>

    <div class="form-group">

        <label>
            Số điện thoại
            <span class="required">*</span>
        </label>

        <input
            type="text"
            id="phone"
            placeholder="Nhập số điện thoại">

    </div>
    <div class="form-group">

    <label>
        Email
    </label>

    <input
        type="email"
        id="email"
        placeholder="Nhập email (nếu có)">

</div>

    <div class="form-group">

        <label>
            Dịch vụ đã sử dụng
            <span class="required">*</span>
        </label>

        <select
            id="service"
            onchange="showEvaluationForm()">

            <option value="">
                -- Chọn dịch vụ --
            </option>

            <optgroup label="Hộ tịch">
                <option>Đăng ký khai sinh</option>
                <option>Đăng ký kết hôn</option>
                <option>Đăng ký khai tử</option>
                <option>Xác nhận tình trạng hôn nhân</option>
            </optgroup>

            <optgroup label="Chứng thực">
                <option>Chứng thực bản sao</option>
                <option>Chứng thực chữ ký</option>
            </optgroup>

            <optgroup label="Cư trú">
                <option>Đăng ký thường trú</option>
                <option>Đăng ký tạm trú</option>
                <option>Xác nhận thông tin cư trú</option>
            </optgroup>

            <optgroup label="Đất đai">
                <option>Đăng ký đất đai</option>
                <option>Cấp Giấy chứng nhận quyền sử dụng đất</option>
                <option>Chuyển nhượng quyền sử dụng đất</option>
            </optgroup>

            <optgroup label="Lao động - Xã hội">
                <option>Xác nhận hộ nghèo, cận nghèo</option>
                <option>Trợ cấp xã hội</option>
                <option>Chính sách người có công</option>
                <option>Bảo trợ xã hội</option>
            </optgroup>

        </select>

    </div>

    <!-- FORM ĐÁNH GIÁ -->

    <div
        id="evaluationForm"
        style="display:none;">

        <h2>
            PHIẾU ĐÁNH GIÁ CHẤT LƯỢNG PHỤC VỤ
        </h2>

        <div class="form-group">

            <label>
                Mức độ hài lòng chung
                <span class="required">*</span>
            </label>

            <div class="rating-stars">

                <label>
                    <input type="radio" name="rating" value="1">
                    ⭐
                </label>

                <label>
                    <input type="radio" name="rating" value="2">
                    ⭐⭐
                </label>

                <label>
                    <input type="radio" name="rating" value="3">
                    ⭐⭐⭐
                </label>

                <label>
                    <input type="radio" name="rating" value="4">
                    ⭐⭐⭐⭐
                </label>

                <label>
                    <input type="radio" name="rating" value="5">
                    ⭐⭐⭐⭐⭐
                </label>

            </div>

        </div>

        <div class="form-group">

            <label>
                Thái độ phục vụ
                <span class="required">*</span>
            </label>

            <select id="attitude">

                <option value="">
                    -- Chọn --
                </option>

                <option>
                    Rất hài lòng
                </option>

                <option>
                    Hài lòng
                </option>

                <option>
                    Bình thường
                </option>

                <option>
                    Chưa hài lòng
                </option>

            </select>

        </div>

        <div class="form-group">

            <label>
                Thời gian giải quyết hồ sơ
                <span class="required">*</span>
            </label>

            <select id="timeProcess">

                <option value="">
                    -- Chọn --
                </option>

                <option>
                    Rất nhanh
                </option>
                <option>
                    Nhanh
                </option>

                <option>
                    Đúng hạn
                </option>

                <option>
                    Chậm
                </option>

            </select>

        </div>

        
         <div class="form-group">
            <label>
        Cán bộ hướng dẫn thủ tục rõ ràng
    <span class="required">*</span>
</label>

    <select id="guidance">
        <option value="">-- Chọn --</option>
        <option>Rất rõ ràng</option>
        <option>Rõ ràng</option>
        <option>Bình thường</option>
        <option>Chưa rõ ràng</option>
        </select>

         </div>
        
         <div class="form-group">
            <label>
    Mức độ thuận tiện khi thực hiện thủ tục
</label>

<select id="convenience">
    <option value="">-- Chọn --</option>
    <option>Rất thuận tiện</option>
    <option>Thuận tiện</option>
    <option>Bình thường</option>
    <option>Chưa thuận tiện</option>
</select>
         </div>
        <div class="form-group">

            <label>
                Mức độ sử dụng dịch vụ công trực tuyến
            </label>

            <select id="onlineService">

                <option value="">
                    -- Chọn --
                </option>

                <option>
                    Rất dễ sử dụng
                </option>

                <option>
                    Dễ sử dụng
                </option>

                <option>
                    Bình thường
                </option>

                <option>
                    Khó sử dụng
                </option>
                <option>
                    Không sử dụng
                </option>

            </select>

        </div>
                                     
        <!-- CÂU HỎI THEO NHÓM DỊCH VỤ -->

<div
    id="specialQuestion"
    class="form-group"
    style="display:none;">

    <label id="specialLabel">
    </label>

    <select id="specialAnswer">

        <option value="">
            -- Chọn --
        </option>

        <option>
            Rất hài lòng
        </option>

        <option>
            Hài lòng
        </option>

        <option>
            Bình thường
        </option>

        <option>
            Chưa hài lòng
        </option>

    </select>

</div>
        <div class="form-group">

            <label>
                Ý kiến góp ý, đề xuất cải thiện chất lượng phục vụ
            </label>

            <textarea
                id="comment"
                rows="5"
                placeholder="Nhập ý kiến góp ý nếu có">
            </textarea>

        </div>

        <button
            type="button"
            class="submit-btn"
            onclick="submitRating()">

            Gửi đánh giá

        </button>

    </div>

</form>

</main>

<footer class="footer">

    <h3>
        TRANG THÔNG TIN ĐIỆN TỬ TRUNG TÂM HÀNH CHÍNH CÔNG
        XÃ ĐĂK HÀ
    </h3>

    <p>
        Chịu trách nhiệm: UBND Xã Đăk Hà
    </p>

</footer>
<script src="../js/rating.js"></script>

</body>
</html>