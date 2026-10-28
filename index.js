let btns = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
let isCalculated = false;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.innerText);

        if(btn.innerText === "AC"){
            display.value = "";
        }else if(btn.innerText === "C"){
            display.value = display.value.slice(0, -1);
        }else if(btn.innerText === "="){
            if(display.value === ""){
                return;
            }else{
                try{
                    display.value = eval(display.value);
                    isCalculated = true;
                }catch(error){
                    display.value = "Invalid";
                }
            }
        }else {
            
            if (isCalculated) {
                if ("+-*/%".includes(btn.innerText)) {
                    display.value += btn.innerText;
                } else {
                    display.value = btn.innerText;
                }

                isCalculated = false;
            } else {
                display.value += btn.innerText;
            }

        }
    })
})

console.log(btns);