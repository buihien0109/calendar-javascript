let monthEle = document.querySelector('.month');
let yearEle = document.querySelector('.year');
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');
let dateEle = document.querySelector('.date-container');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function displayInfo() {
    // Hiển thị tên tháng
    let currentMonthName = new Date(
        currentYear,
        currentMonth
    ).toLocaleString('en-us', { month: 'long' });

    monthEle.innerText = currentMonthName;

    // Hiển thị năm
    yearEle.innerText = currentYear;
    
    // Hiển thị ngày trong tháng
    renderDate();
}

// Lấy số ngày của 1 tháng
function getDaysInMonth() {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
}

// Lấy ngày bắt đầu của tháng
function getStartDayInMonth() {
    return new Date(currentYear, currentMonth, 1).getDay();
}

// Active current day
function activeCurrentDay(day) {
    let day1 = new Date().toDateString();
    let day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? 'active' : '';
}

// Hiển thị ngày trong tháng lên trên giao diện
function renderDate() {
    let daysInMonth = getDaysInMonth();
    let startDay = getStartDayInMonth();

    dateEle.innerHTML = '';

    for (let i = 0; i < startDay; i++) {
        dateEle.innerHTML += `
            <div class="day"></div>
        `;
    }

    for (let i = 0; i < daysInMonth; i++) {
        dateEle.innerHTML += `
            <div class="day ${activeCurrentDay(i + 1)}">${i + 1}</div>
        `;
    }
}

// Xử lý khi ấn vào nút next month
btnNext.addEventListener('click', function () {
    if (currentMonth == 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    displayInfo();
});

// Xử lý khi ấn vào nút previous month
btnPrev.addEventListener('click', function () {
    if (currentMonth == 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    displayInfo();
});

window.onload = displayInfo;
