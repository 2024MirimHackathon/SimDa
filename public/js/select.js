let selectedFruit = "";

// 과일 선택 함수
function selectFruitClick(fruit, element, event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    selectedFruit = fruit;
    console.log("selectedFruit: " + selectedFruit);

    // 선택 시 경고 메시지를 비움
    document.getElementById('warningMessage').textContent = "";

    document.querySelectorAll('.select_div2 button').forEach(button => {
        button.classList.remove('selected');
    });

    element.classList.add('selected');
}

// 다음 버튼 함수
function nextBtnClick(event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    if (selectedFruit === "") {
        document.getElementById('warningMessage').textContent = "과일을 선택해 주세요";
        return; // 선택되지 않았을 때 함수 종료
    }
    location.href = 'next.html';
}
