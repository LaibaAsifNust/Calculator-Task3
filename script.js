let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ""
let array = Array.from(buttons);
array.forEach(button =>{
    button.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = String(eval(string))
            input.value = string;
        }
        else if (b.target.innerText == 'AC'){
            string = ""
            input.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            input.value = string;
        }
        else{
            string += b.target.innerText;
            input.value = string;
        }
    })
})