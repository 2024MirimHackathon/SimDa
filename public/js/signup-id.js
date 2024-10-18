document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("id").addEventListener("submit", function (event) {
        var id = document.getElementById("id").value;
        var idError = document.getElementById("id-error");
        idError.textContent = ""; // 오류 메시지 초기화

        if (id === "") {
            idError.textContent = "아이디를 입력해주세요.";
            event.preventDefault(); // 폼 제출 방지
        } else {
            window.localStorage.setItem("id", id); // localStorage에 아이디 저장
        }
    });
});
