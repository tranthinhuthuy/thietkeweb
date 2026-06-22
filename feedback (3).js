<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tra cứu thủ tục hành chính</title>

<!DOCTYPE html>

<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tra cứu thủ tục hành chính</title>

<link rel="stylesheet" href="../css/style.css">

</head>

<body>
<!-- Tiêu đề -->

<section class="procedure-header">

    <h1>TRUNG TÂM PHỤC VỤ HÀNH CHÍNH CÔNG XÃ ĐĂK HÀ</h1>

    <p>
        Tra cứu thủ tục hành chính nhanh chóng, chính xác và thuận tiện
    </p>

</section>

<!-- Khu vực tra cứu -->

<section class="procedure-section">

    <div class="container">

        <div class="search-panel">

            <h2>TRA CỨU THỦ TỤC HÀNH CHÍNH</h2>

            <p class="search-desc">
                Nhập tên thủ tục hoặc chọn lĩnh vực để tìm kiếm thông tin.
            </p>

            <div class="procedure-search">

                <input
                    type="text"
                    id="searchInput"
                    placeholder="🔍 Nhập tên thủ tục cần tra cứu..."
                >

                <select id="fieldFilter">

                    <option value="">
                        📂 Tất cả lĩnh vực
                    </option>
                    <option value="Hộ tịch">
                        Hộ tịch
                    </option>
                    <option value="Chứng thực">
                        Chứng thực
                    </option>
                    <option value="Đất đai">
                        Đất đai
                    </option>

                </select>
                <button
                    id="searchBtn"
                    class="search-procedure-btn">

                    🔎 Tìm kiếm

                </button>
            </div>

        </div>

        <!-- Danh sách thủ tục -->

        <div
            id="procedureList"
            class="procedure-grid">

        </div>

    </div>

</section>

<!-- Modal chi tiết -->

<div
    id="procedureModal"
    class="modal">

    <div class="modal-content">

        <span class="close"
              onclick="closeModal()">

            &times;

        </span>
        <div id="modalBody">
        </div>
    </div>

</div>

<!-- Footer -->

<footer class="footer">

    <h3>
        Trung tâm Phục vụ Hành chính công xã Đăk Hà
    </h3>

    <p>
        Điện thoại: 02553856504
    </p>

    <p>
        Email: vhxh-dakha@quangngai.gov.vn
    </p>

    <p>
        Địa chỉ: Xã Đăk Hà, tỉnh Quảng Ngãi
    </p>

</footer>

<!-- Javascript -->

<script src="../js/procedures.js"></script>

</body>

</html>


    <script>

        const modal =
            document.getElementById("procedureModal");

        const closeBtn =
            document.querySelector(".close");

        closeBtn.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {

            if (event.target == modal) {

                modal.style.display = "none";

            }

        }

    </script>

</body>

</html>