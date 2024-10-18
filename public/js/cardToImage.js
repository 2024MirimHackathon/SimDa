async function captureCard() {
    const card = document.getElementById('card');

    // html2canvas를 사용하여 카드 캡쳐
    html2canvas(card).then(canvas => {
        // 캔버스를 이미지 데이터 URL로 변환
        const dataURL = canvas.toDataURL('image/png');

        // 다운로드 링크 생성
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'captured_card.png'; // 다운로드할 파일 이름

        // 링크 클릭으로 다운로드
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // 링크 요소 제거
    });
}