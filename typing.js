let timer = document.getElementById("stopwatch")

let data = document.getElementById("quoteDisplay")

let user_input = document.getElementById("quoteInput")

let result = document.getElementById("result")

let sub_btn = document.getElementById("submitBtn")

let reset_btn = document.getElementById("resetBtn")

let total = document.getElementById("speedTypingTest")

let spinner = document.getElementById("spinner")

// let out_id;
// let count = 0
// let isFocused = true;
// if(isFocused === true) {
//     isFocused = false
//     user_input.addEventListener("focus",time) 
let count=0 
let out_id;
function time() {
    let id = setInterval(function(event) {
        count = count + 1
        timer.textContent = count    
    },1000)
    out_id = id
}
time()

sub_btn.onclick = function(event) {
    if (data.textContent == user_input.value) {
        clearInterval(out_id)        
        result.textContent = "You typed in " + count + " seconds"
    } else {
        result.textContent = "You typed incorrect sentence"
    }
}

reset_btn.onclick = function(event) {    
    result.textContent=""
    timer.textContent=0
    total.classList.add("d-none")
    spinner.classList.remove("d-none")
    user_input.value = ""
    count=0 
      
    let type = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", type)
        .then(function(response) {
            total.classList.remove("d-none")
            spinner.classList.add("d-none")
            return response.json()
        })
        .then(function(jsonData) {
            data.textContent = jsonData.content
        })
    time()  
}

