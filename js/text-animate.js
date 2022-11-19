function effect(cnt) {
    
    let mainText = document.getElementsByClassName("main-text");

    for(let i = 0; i < mainText.length; i++) {
        let text = mainText[i].innerHTML;
        let textLenth = text.length;
        console.log(textLenth);

        mainText[i].innerHTML = '';
        
        for(let j = 0; j < textLenth; j++) {
            setTimeout(function() {
                mainText[i].innerHTML += text[j];
            }, (j+1)*100);
        }
    }
}

effect(30);

document.querySelectorAll(".main-text").forEach((text) => {
    console.log(text);
    text.addEventListener("mouseover", () => {
        
        text.classList.add("active");
    });
});