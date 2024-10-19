function makeBtnClick(event) {
    event.preventDefault(); // 기본 폼 제출 동작 막기
    location.href = 'select.html';
}

function basketBtn(event) {
    event.preventDefault(); // 기본 폼 제출 동작 막기
    location.href = 'dictionary.html';
}

// 사과, 용과, 감에 해당하는 이미지 경로
const images = {
    "사과": '../public/images/drop_apple.png', // 사과 이미지 경로
    "용과": '../public/images/drop_dragon.png', // 용과 이미지 경로
    "감": '../public/images/drop_gam.png' // 감 이미지 경로
};

// 생성할 과일 배열
const fruits = ["사과", "용과", "사과", "감", "감"];

// 배열의 길이만큼 랜덤 div 생성
fruits.forEach((fruit, index) => {
    // 각 div가 떨어지는 시간을 주기 위해 setTimeout 사용
    setTimeout(() => {
        createFruitDiv(fruit);
    }, index * 1000);
});

// 과일 div 생성 함수
function createFruitDiv(fruit) {
    const container = document.querySelector('.container');

    // 새로운 div 생성
    const fruitDiv = document.createElement('div');
    fruitDiv.classList.add('random-div');

    // 랜덤 위치 계산 (left 속성)
    const randomLeft = Math.floor(Math.random() * (container.clientWidth - 50)); // 50은 div의 너비
    fruitDiv.style.left = randomLeft + 'px';

    // 배경 이미지 설정
    fruitDiv.style.backgroundImage = `url(${images[fruit]})`;

    // 랜덤한 기울기 설정
    const randomRotation = Math.floor(Math.random() * 60) - 30; // -30도에서 +30도 사이의 기울기
    fruitDiv.style.transform = `rotate(${randomRotation}deg)`;

    // 랜덤 div를 container에 추가
    container.appendChild(fruitDiv);

    // 애니메이션 클래스 추가
    fruitDiv.style.animation = 'fall 3s forwards'; // 떨어지는 애니메이션
}

// 로그인한 사용자의 id를 설정합니다. (예를 들어, 로그인 후 저장된 사용자 id를 사용)
var userName = '';


// 서버에서 해당 userId의 name을 가져오는 함수
async function fetchUserame(id, password) {
    try {
        const response = await fetch(`/sign/${id}`);
        if (response.ok) {
            const data = await response.json();
            userName = data.name;
            // 가져온 사용자 이름으로 환영 메시지를 설정
            document.getElementById('greeting').innerText = `${userName}님! 안녕하세요!`;
        } else {
            document.getElementById('greeting').innerText = '사용자를 찾을 수 없습니다.';
        }
    } catch (error) {
        console.error('Error fetching user name:', error);
        document.getElementById('greeting').innerText = '오류가 발생했습니다.';
    }
}

// func2() {
//     print(userName);
// }

// 페이지가 로드되면 fetchUserName 함수 실행
window.onload = fetchUserName;
