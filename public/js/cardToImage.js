async function captureCard() {
    const card = document.getElementById('card');

    // html2canvas를 사용하여 카드 캡쳐
    html2canvas(card).then(async (canvas) => {
        // 캔버스를 이미지 데이터 URL로 변환
        const dataURL = canvas.toDataURL('image/png');

        // 사용자 ID를 가져옵니다. (예시로 getUserId() 함수 사용)
        const userId = await getUserId(); // 사용자 ID 요청

        try {
            // 서버에 이미지 데이터 전송
            const response = await fetch(`/image_paths/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ imageUrl: dataURL })
            });

            const result = await response.text();
            console.log("결과:", result);
        } catch (error) {
            console.error('Error:', error);
        }
    });
}
