//drag menu right to left

const menuUl = document.querySelector(".menu_ul");
if(menuUl)
{
    let isDragging = false;
    let startX, scrollLeft;
    
    menuUl.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - menuUl.offsetLeft;
        scrollLeft = menuUl.scrollLeft;
    });
    
    menuUl.addEventListener("mouseleave", () => {
        isDragging = false;
    });
    
    menuUl.addEventListener("mouseup", () => {
        isDragging = false;
    });
    
    menuUl.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - menuUl.offsetLeft;
        const move = (x - startX) * 2; // Adjust speed
        menuUl.scrollLeft = scrollLeft - move;
    });
    
    // Prevent link clicks while dragging
    menuUl.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (e) => {
            if (isDragging) e.preventDefault();
        });
    });
}


// small screen menu show/hide

let menu_btn = document.querySelector(".menu_btn");
let menu_era = document.querySelector(".menu_era");
let menu_cls_btn = document.querySelector(".menu_cls_btn");


menu_btn.addEventListener("click", function()
{
    menu_era.classList.add("active");
})

menu_cls_btn.addEventListener("click", function()
{
    menu_era.classList.remove("active");
})

