let h1 = document.querySelector("h1");
let input = document.querySelector("input")
let reset = document.querySelector("button");


// let counter = 0;
// h1.textContent = `Character Counter: ${counter}`;
// input.addEventListener("keydown", ()=>{

input.addEventListener("input", ()=>{


    // console.log(dets)
    // if(true){

    //     counter++;
    //     if(counter>=0){
            
    //         h1.textContent = `Character Counter: ${counter}`;
    //     }
        
    //     if(dets.key === "Backspace"){
        //         counter--;
        //         h1.textContent = `Character Counter: ${counter}`;
        //     }
        // }







    //     if(dets.key !== "AltGraph" && dets.key !== "Shift" && dets.key !== "Enter" && dets.key !== "Tab" && dets.key !== "Alt" && dets.key !== "CapsLock" && dets.key !== "ArrowLeft" && dets.key !== "ArrowRight" && dets.key !== "ArrowUp" && dets.key !== "ArrowDown"){

    //         if(dets.key === "Backspace"){
    //             counter--;
    //         }
    //         else{
    //             counter++;
    //         }
    //         if(counter<0){
    //             counter = 0;
    //         }
    //         if(dets.key === "Control" && dets.key === "Backspace"){
    //             counter = 0;
    //         }
    //         h1.textContent = `Character Counter: ${counter}`;
    //     }
        
    //     h1.textContent = `Character Counter: ${counter}`;
        
        
    // })
    
    // reset.addEventListener("click", ()=>{
    //     counter = 0;
    //     h1.textContent = `Character Counter: ${counter}`;
    //     input.value = "";
    // })





    h1.textContent = `Character Counter: ${input.value.length}`


})


reset.addEventListener("click", ()=>{
    input.value = "";
    h1.textContent = `Character Counter: ${input.value.length}`;
})
  






// count = 0;
// window.addEventListener("keyup", (dets)=>{
//     // console.log(dets);
//         {
//         count++;
//         h1.textContent = `Character Counter: ${count}`;
//     }
//     if(dets.key === "Backspace"){
//         count--;
//         if(count < 0){
//             count = 0;
//         }
//         h1.textContent = `Character Counter: ${count}`;
//     }
// })








// messy code i know but we'll optimize it later, and dont ask me to add some cool css im bored of that shit...

// maybe i can add a little reset button under it or next to it...
// but first let me push it to github...

