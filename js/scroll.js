const aboutBtn = document.querySelector(".about-button");

function btnClick(){
    // about btn 클릭시 div middle container로 이동 
    document.querySelector(".middle-container").scrollIntoView(true);

}
aboutBtn.addEventListener("click",btnClick);