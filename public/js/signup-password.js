<<<<<<< HEAD
async function signup() {
=======
<<<<<<< HEAD
async function ggg() {

    console.log("l");
=======
// signup-password.js

document.getElementById("signup-form").addEventListener("submit", async function (event) {
    event.preventDefault();
>>>>>>> 0652f91ac7e166b758ec511349d5f982070fdae6

>>>>>>> f072682e0df6438cd60f6f417e7aecddb4c99338
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // 비밀번호 일치 여부 확인
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = '비밀번호가 일치하지 않습니다.';
        return;
    }

<<<<<<< HEAD
    // sessionStorage 대신 localStorage 사용
<<<<<<< HEAD
    const name = "da"  // localStorage에서 이름 가져오기
    const id = "da";      // localStorage에서 ID 가져오기
    const userData = { username:id , name, password };

    try {
        const response = await fetch('http://localhost:3001/sign/signup', {
=======
    const name = window.localStorage.getItem('name');  // localStorage에서 이름 가져오기
    const id = window.localStorage.getItem('id');      // localStorage에서 ID 가져오기
    const userData = { name, username: id, password };
=======
    // localStorage에서 이름과 ID 가져오기
    const name = localStorage.getItem('name');  
    const id = localStorage.getItem('id');      
    const userData = { name, id, password }; // 사용자 데이터 객체 생성
>>>>>>> 0652f91ac7e166b758ec511349d5f982070fdae6

    try {
        const response = await fetch('http://172.16.20.119:3001/sign/signup', {
>>>>>>> f072682e0df6438cd60f6f417e7aecddb4c99338
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)  // JSON으로 변환하여 전송
        });

        if (response.ok) {
<<<<<<< HEAD
            window.location.href = '/views/home.html';  // 성공 시 리디렉션
=======
<<<<<<< HEAD
            window.location.href = '/home';  // 성공 시 리디렉션
=======
            window.location.href = '/index.js';  // 성공 시 리디렉션
>>>>>>> 0652f91ac7e166b758ec511349d5f982070fdae6
>>>>>>> f072682e0df6438cd60f6f417e7aecddb4c99338
        } else {
            alert('회원가입에 실패했습니다.'); // 오류 처리
        }
    } catch (error) {
        alert('서버와의 통신 중 문제가 발생했습니다.'); // 네트워크 오류 처리
    }
};
