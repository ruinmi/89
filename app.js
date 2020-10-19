const img_box = document.getElementsByClassName("img-box")[0];
const images = document.getElementsByTagName("img");
let i = 0;

img_box.addEventListener("click", (e) => {
    const one = 0, two = img_box.offsetWidth / 2, three = 2 * two;
    if(e.offsetX > one && e.offsetX < two) {
        if(i != 0) {
            i -= 1;
            // if()
            images[i+1].style.zIndex = 1;
            images[i+1].classList.remove("click");
            for(item of images) {
                if(item !== images[i+1]) {
                    item.style.zIndex = 0;
                }
            }
            images[i].style.zIndex = 2;
            images[i].classList.add("click");
            img_box.style.setProperty("--posX", e.offsetX+"px");
            img_box.style.setProperty("--posY", e.offsetY+"px");
        }
    } else {
        if(i != 3) { 
            i += 1;

            images[i-1].style.zIndex = 1;
            images[i-1].classList.remove("click");
            for(item of images) {
                if(item !== images[i-1]) {
                    item.style.zIndex = 0;
                }
            }
            images[i].style.zIndex = 2;
            img_box.style.setProperty("--posX", e.offsetX+"px");
            img_box.style.setProperty("--posY", e.offsetY+"px");
            images[i].classList.add("click");
        }
    }
});