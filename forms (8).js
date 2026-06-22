document.addEventListener("DOMContentLoaded", () => {

loadFeedbacks();

document
    .getElementById("searchInput")
    .addEventListener("keyup", filterFeedback);

document
    .getElementById("statusFilter")
    .addEventListener("change", filterFeedback);

});

/* ==========================
TẢI DANH SÁCH PHẢN ÁNH
========================== */

function loadFeedbacks() {

const feedbacks =
    JSON.parse(
        localStorage.getItem("feedbacks")
    ) || [];

renderTable(feedbacks);

updateStatistics(feedbacks);

}

/* ==========================
THỐNG KÊ
========================== */

function updateStatistics(feedbacks) {

let pending = 0;
let processing = 0;
let done = 0;

feedbacks.forEach(item => {

    if (item.status === "pending") {

        pending++;

    }

    else if (item.status === "processing") {

        processing++;

    }

    else if (item.status === "done") {

        done++;

    }

});

document.getElementById(
    "totalFeedback"
).textContent = feedbacks.length;

document.getElementById(
    "pendingFeedback"
).textContent = pending;

document.getElementById(
    "processingFeedback"
).textContent = processing;

document.getElementById(
    "doneFeedback"
).textContent = done;

}

/* ==========================
HIỂN THỊ BẢNG
========================== */

function renderTable(data) {

const table =
    document.getElementById(
        "feedbackTable"
    );

table.innerHTML = "";

if (data.length === 0) {

    table.innerHTML = `
    <tr>
        <td colspan="9">
            Chưa có phản ánh nào
        </td>
    </tr>
    `;

    return;

}

data.forEach((item, index) => {

    let statusText = "";
    let statusClass = "";

    switch(item.status) {

        case "processing":

            statusText = "Đang xử lý";
            statusClass = "status-processing";
            break;

        case "done":

            statusText = "Đã xử lý";
            statusClass = "status-done";
            break;

        default:

            statusText = "Chưa xử lý";
            statusClass = "status-pending";

    }

    table.innerHTML += `

    <tr>

        <td>${index + 1}</td>

        <td>${item.fullName || ""}</td>

        <td>${item.phone || ""}</td>

        <td>${item.email || ""}</td>

        <td>${item.type || ""}</td>

        <td>
            ${(item.content || "").substring(0,50)}...
        </td>

        <td>${item.date || ""}</td>

        <td>

            <span class="${statusClass}">
                ${statusText}
            </span>

        </td>

        <td>

            <button
                class="detail-btn"
                onclick="changeStatus(${index})">

                <i class="fa-solid fa-pen"></i>

            </button>

            <button
                class="delete-btn"
                onclick="deleteFeedback(${index})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </td>

    </tr>

    `;

});

}

/* ==========================
ĐỔI TRẠNG THÁI
========================== */

function changeStatus(index) {

const feedbacks =
    JSON.parse(
        localStorage.getItem("feedbacks")
    ) || [];

const current =
    feedbacks[index].status;

if (current === "pending") {

    feedbacks[index].status =
        "processing";

}

else if (current === "processing") {

    feedbacks[index].status =
        "done";

}

else {

    feedbacks[index].status =
        "pending";

}

localStorage.setItem(
    "feedbacks",
    JSON.stringify(feedbacks)
);

loadFeedbacks();

}

/* ==========================
XÓA PHẢN ÁNH
========================== */

function deleteFeedback(index) {

if (
    !confirm(
        "Bạn có chắc muốn xóa phản ánh này?"
    )
) {
    return;
}

const feedbacks =
    JSON.parse(
        localStorage.getItem("feedbacks")
    ) || [];

feedbacks.splice(index, 1);

localStorage.setItem(
    "feedbacks",
    JSON.stringify(feedbacks)
);

loadFeedbacks();

}

/* ==========================
TÌM KIẾM + LỌC
========================== */

function filterFeedback() {

const keyword =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();

const status =
    document
    .getElementById("statusFilter")
    .value;

const feedbacks =
    JSON.parse(
        localStorage.getItem("feedbacks")
    ) || [];

const filtered =
    feedbacks.filter(item => {

        const matchKeyword =

            (item.fullName || "")
            .toLowerCase()
            .includes(keyword)

            ||

            (item.phone || "")
            .toLowerCase()
            .includes(keyword)

            ||

            (item.content || "")
            .toLowerCase()
            .includes(keyword);

        const matchStatus =

            status === ""

            ||

            item.status === status;

        return (
            matchKeyword &&
            matchStatus
        );

    });

renderTable(filtered);

}

/* ==========================
TỰ ĐỘNG CẬP NHẬT
========================== */

setInterval(() => {

loadFeedbacks();


}, 5000);
