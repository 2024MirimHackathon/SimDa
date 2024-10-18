let selectedFruit = "";

const images = {
    "사과": {
        selected: "../public/images/select_apple.png",
        unselected: "../public/images/unselected_app.png"
    },
    "감": {
        selected: "../public/images/select_gam.png",
        unselected: "../public/images/unselected_gam.png"
    },
    "용과": {
        selected: "../public/images/select_dragon.png",
        unselected: "../public/images/unselected_dra.png"
    }
};

function selectFruitClick(fruit, element) {
    selectedFruit = fruit

    // 모든 선택 div의 이미지를 비활성화 이미지로 변경
    document.querySelectorAll('.select_div2 div').forEach(div => {
        const fruitType = div.id.split('_')[1]; // 'select_' 이후의 부분을 가져옴
        const fullFruitName = fruitType === 'gam' ? '감' : fruitType === 'apple' ? '사과' : fruitType === 'dragon' ? '용과' : '';

        // 이미지가 images 객체에 있는지 확인
        if (images[fullFruitName]) {
            // 이미지 원래대로 되돌리기
            div.style.backgroundImage = `url(${images[fullFruitName].unselected})`;
            div.classList.remove('selected'); // 선택된 클래스 제거
        } else {
            console.error(`No images found for fruit type: ${fullFruitName}`);
        }
    });

    // 선택한 div의 이미지를 활성화 이미지로 변경
    element.style.backgroundImage = `url(${images[fruit].selected})`;
    element.classList.add('selected'); // 선택된 클래스 추가

    // 버튼 색상 활성화
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.style.backgroundColor = '#56AC38'; // 원하는 색상으로 변경
    nextBtn.disabled = false; // 버튼 활성화
}

function nextBtnClick(event) {
    // 선택한 과일이 있을 때 페이지 이동
    event.preventDefault(); // 기본 폼 제출 동작 막기
    location.href = 'cardToImage.html';
}
