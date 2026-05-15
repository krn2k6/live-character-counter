let h1 = document.querySelector("h1");

count = 0;
window.addEventListener("keyup", (dets)=>{
    // console.log(dets);
    if(dets.key !== "AltGraph" && dets.key !== "Control" && dets.key !== "Shift" && dets.key !== "Enter" && dets.key !== "Tab" && dets.key !== "Backspace" && dets.key !== "Alt" && dets.key !== "CapsLock" && dets.key !== "ArrowLeft" && dets.key !== "ArrowRight" && dets.key !== "ArrowUp" && dets.key !== "ArrowDown")
        {
        count++;
        h1.textContent = `Character Counter: ${count}`;
    }
})

// messy code i know but we'll optimize it later, and dont ask me to add some cool css im bored of that shit...

// maybe i can add a little reset button under it or next to it...
// but first let me push it to github...

