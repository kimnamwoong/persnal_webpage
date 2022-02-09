const content = "Hi I'm Nam Yung Kim,  \n I'm a developer";
const text = document.querySelector("span");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}

setInterval(typing, 200);