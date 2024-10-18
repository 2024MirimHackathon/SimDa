// signup-password.js

document.getElementById("signup-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // 비밀번호 일치 여부 확인
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = '비밀번호가 일치하지 않습니다.';
        return;
    }

    // localStorage에서 이름과 ID 가져오기
    const name = localStorage.getItem('name');  
    const id = localStorage.getItem('id');      
    const userData = { name, id, password }; // 사용자 데이터 객체 생성

    try {
        const response = await fetch('/sign-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)  // JSON으로 변환하여 전송
        });

        if (response.ok) {
            window.location.href = '/index.js';  // 성공 시 리디렉션
        } else {
            alert('회원가입에 실패했습니다.'); // 오류 처리
        }
    } catch (error) {
        alert('서버와의 통신 중 문제가 발생했습니다.'); // 네트워크 오류 처리
    }
});
