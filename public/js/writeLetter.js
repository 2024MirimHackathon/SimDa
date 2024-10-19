function handleAppleClick() {
    const placeholder = document.getElementById('letter-placeholder');
    const letterField = document.getElementById('letter-field');

    placeholder.style.display = 'none'; // 텍스트 숨기기
    letterField.style.display = 'block'; // 편지 작성 필드 표시
    letterField.focus(); // 편지 필드에 포커스 주기

    // 모든 텍스트 선택
    const range = document.createRange();
    range.selectNodeContents(letterField);
    const selection = window.getSelection();
    selection.removeAllRanges(); // 이전 선택 영역 제거
    selection.addRange(range); // 새로운 선택 영역 추가
}

function clearPlaceholder() {
    const placeholder = document.getElementById('letter-placeholder');
    if (placeholder.style.display === 'none') {
        return; // 텍스트가 숨겨져 있으면 아무것도 하지 않음
    }
    placeholder.style.display = 'none'; // 텍스트 숨기기
    const letterField = document.getElementById('letter-field');
    letterField.focus(); // 편지 필드에 포커스 주기

    // 모든 텍스트 선택
    const range = document.createRange();
    range.selectNodeContents(letterField);
    const selection = window.getSelection();
    selection.removeAllRanges(); // 이전 선택 영역 제거
    selection.addRange(range); // 새로운 선택 영역 추가
}

document.addEventListener("DOMContentLoaded", function () {
    const cursor2 = document.getElementById('cursor2');
    const saveButton = document.getElementById('save-button');

    // cursor2 클릭 시 버튼 활성화
    cursor2.addEventListener('click', function () {
        // 버튼 활성화
        saveButton.disabled = false; // 버튼을 활성화
        saveButton.style.backgroundColor = '#56AC38'; // 버튼 색상 변경
        console.log("버튼이 활성화되었습니다."); // 콘솔 메시지
    });
});
document.getElementById("save-button").addEventListener("click", function () {
    const element = document.getElementById("capture");

    // html2canvas를 사용하여 캡처
    html2canvas(element).then(canvas => {
        // 캔버스를 이미지로 변환
        const dataURL = canvas.toDataURL("image/png");

        // 이미지 다운로드를 위한 링크 생성
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'capture.png'; // 저장할 이미지 파일 이름
        link.click(); // 링크 클릭하여 다운로드 실행
    }).catch(err => {
        console.error("이미지 캡처 중 오류 발생:", err);
    });
});

// 이미지 저장 후 모달 창 띄우기
document.getElementById("save-button").addEventListener("click", function () {
    const element = document.getElementById("capture");

    // html2canvas를 사용하여 캡처
    html2canvas(element).then(canvas => {
        // 캔버스를 이미지로 변환
        const dataURL = canvas.toDataURL("image/png");

        // 이미지 다운로드를 위한 링크 생성
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'capture.png'; // 저장할 이미지 파일 이름
        link.click(); // 링크 클릭하여 다운로드 실행

        // 저장 완료 후 모달 창 표시
        showSaveModal();
    }).catch(err => {
        console.error("이미지 캡처 중 오류 발생:", err);
    });
});

// 모달 창 표시 함수
function showSaveModal() {
    const modal = document.getElementById("saveModal");
    modal.style.display = "block"; // 모달 창 보이기
}

// 모달 창 닫기 이벤트 (확인 버튼 클릭 시)
document.getElementById("closeModalBtn").addEventListener("click", function () {
    const modal = document.getElementById("saveModal");
    modal.style.display = "none"; // 모달 창 숨기기
    location.href = 'home.html';
});



