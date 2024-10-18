function dicBtnClick() {
    // 첫 번째 이미지 요소 생성
    var newImg = document.createElement("img");
    var newImg2 = document.createElement("img");
    
    // 첫 번째 이미지 속성 설정
    newImg.src = "../public/images/send_apple.png"; // 이미지 경로
    newImg.alt = "Send Apple Image";
    newImg.classList.add("new-image");
    newImg.style.position = "absolute";
    newImg.style.top = "200px"; 
    newImg.style.left = "0px"; 

    // 두 번째 이미지 속성 설정
    newImg2.src = "../public/images/xicon.png"; // 이미지 경로
    newImg2.alt = "X Icon Image";
    newImg2.classList.add("new-image");
    newImg2.style.position = "absolute";
    newImg2.style.top = "210px"; 
    newImg2.style.right = "70px"; 

    // 두 번째 이미지 클릭 이벤트 추가 (모든 이미지 제거)
    newImg2.addEventListener('click', function() {
        // 모든 '.new-image' 클래스를 가진 요소 제거
        var images = document.querySelectorAll('.new-image');
        images.forEach(function(image) {
            image.remove(); // 이미지 요소 제거
        });
    });

    // 이미지를 삽입할 위치 선택
    var section = document.getElementById("signup-section");
    
    // 이미지 요소를 섹션 안에 추가
    section.appendChild(newImg);
    section.appendChild(newImg2);
}

function BackBtnClick(event) {
    event.preventDefault(); // 기본 폼 제출 동작 막기
    location.href = 'home.html';
}