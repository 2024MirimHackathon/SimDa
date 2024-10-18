document.addEventListener("DOMContentLoaded", function () {
    // 이름 입력 폼
    document.getElementById("name").addEventListener("submit", function (event) {
        var name = document.getElementById("name").value;
        var nameError = document.getElementById("name-error");
        nameError.textContent = ""; // 오류 메시지 초기화

        if (name === "") {
            nameError.textContent = "이름을 입력해주세요.";
            event.preventDefault(); // 폼 제출 방지
        } else {
            window.localStorage.setItem("name", name); // localStorage에 이름 저장
        }
    });
});
