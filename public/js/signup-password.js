async function ggg() {

    console.log("l");

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = '비밀번호가 일치하지 않습니다.';
        return;
    }

    // sessionStorage 대신 localStorage 사용
    const name = window.localStorage.getItem('name');  // localStorage에서 이름 가져오기
    const id = window.localStorage.getItem('id');      // localStorage에서 ID 가져오기
    const userData = { name, username: id, password };

    try {
        const response = await fetch('http://172.16.20.119:3001/sign/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)  // JSON으로 변환하여 전송
        });

        if (response.ok) {
            window.location.href = '/home';  // 성공 시 리디렉션
        } else {
            alert('회원가입에 실패했습니다.');
        }
    } catch (error) {
        alert('서버와의 통신 중 문제가 발생했습니다.');
    }
};
