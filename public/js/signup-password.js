async function signup() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = '비밀번호가 일치하지 않습니다.';
        return;
    }

    // sessionStorage 대신 localStorage 사용
    const name = "da"  // localStorage에서 이름 가져오기
    const id = "da";      // localStorage에서 ID 가져오기
    const userData = { username:id , name, password };

    try {
        const response = await fetch('http://localhost:3001/sign/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)  // JSON으로 변환하여 전송
        });

        if (response.ok) {
            window.location.href = '/views/home.html';  // 성공 시 리디렉션
        } else {
            alert('회원가입에 실패했습니다.');
        }
    } catch (error) {
        alert('서버와의 통신 중 문제가 발생했습니다.');
    }
};
