document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        // 비밀번호 필드 값 가져오기
        var id = document.getElementById("id").value;
        var password = document.getElementById("password").value; // 수정된 부분
        var confirmPassword = document.getElementById("confirm-password").value;

        var idError = document.getElementById("id-error");
        var passwordError = document.getElementById("password-error");
        var confirmPasswordError = document.getElementById("confirm-password-error");

        // 오류 메시지 초기화
        idError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        var hasError = false; // 초기화

        // 3개가 모두 입력되지 않았을 때
        if (id === "" && password === "" && confirmPassword === "") {
            alert("아이디와 비밀번호가 입력되지 않았습니다.");
            hasError = true;
        }

        // ID가 비어 있는지 확인
        if (id === "") {
            idError.textContent = "ID가 입력되지 않았습니다.";
            hasError = true;
        }

        // password가 비어있는지 확인
        if (password === "") {
            passwordError.textContent = "Password가 입력되지 않았습니다.";
            hasError = true;
        }

        // 비밀번호 확인 필드가 비어 있는지 확인
        if (confirmPassword === "") {
            confirmPasswordError.textContent = "비밀번호 확인을 해주세요.";
            hasError = true;
        }

        // 비밀번호와 확인 비밀번호가 일치하지 않으면
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다.";
            hasError = true;
        }

        // 오류가 있으면 폼 제출 방지
        if (hasError) {
            event.preventDefault();
        }
    });

    // 비밀번호 입력 필드를 감시하고 비밀번호 확인란 활성화/비활성화
    document.getElementById("password").addEventListener("input", function () {
        var passwordValue = document.getElementById("password").value;
        var confirmPasswordField = document.getElementById("confirm-password");

        if (passwordValue === "") {
            // 비밀번호가 비어 있으면 비밀번호 확인란을 비활성화
            confirmPasswordField.disabled = true;
            confirmPasswordField.value = ""; // 비활성화할 때 입력 내용도 초기화
        } else {
            // 비밀번호가 입력되면 비밀번호 확인란을 활성화
            confirmPasswordField.disabled = false;
        }
    });
});
