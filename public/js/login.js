document.getElementById("login-form").addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;

    // 오류 메시지 요소 가져오기
    var nameError = document.getElementById("name-error");
    var idError = document.getElementById("id-error");
    var passwordError = document.getElementById("password-error");

    // 오류 메시지 초기화
    nameError.textContent = "";
    idError.textContent = "";
    passwordError.textContent = "";

    var hasError = false; // 오류 발생 여부 초기화

    if (name === "") {
        nameError.textContent = "이름을 입력하세요.";
        hasError = true;
    }
    if (id === "") {
        idError.textContent = "ID를 입력하세요.";
        hasError = true;
    }

    if (password === "") {
        passwordError.textContent = "비밀번호를 입력하세요.";
        hasError = true;
    }

    // 오류가 있으면 폼 제출 방지
    if (hasError) {
        event.preventDefault();
    }
});