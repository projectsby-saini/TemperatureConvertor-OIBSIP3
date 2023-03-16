//Logic for show digital watch
function currentTime() {
    let p1=document.getElementById("p1")
    let date = new Date()
    let hr =date.getHours();
    let mn =date.getMinutes();
    let ss =date.getSeconds()
    let current_time =hr +" : "+ mn+" : "+ss;
    p1.innerHTML =current_time;
    let t =setTimeout(function() {currentTime()},1000);
}
currentTime();


//Logic for temperature convertor
function temperature() {
    let inputValue = document.querySelector("#inputValue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#result");
    if(inputValue == "") {
        alert("Please enter any number")
        location.reload();
    }
    else if (type1.value=="celcius" && type2.value =="celcius") {
        let Celcius =Number.parseInt(inputValue) * 1
        result.innerHTML = Celcius.toFixed(3) + '&deg;C'  
    }
    else if (type1.value=="celcius" && type2.value =="farhenheit") {
        let Farhenheit =Number.parseInt(inputValue) * (9/5) + 32
        result.innerHTML = Farhenheit.toFixed(3) + "F"  
    }
    else if (type1.value=="celcius" && type2.value =="kelvin") {
        let Kelvin =Number.parseInt(inputValue) * 273.15
        result.innerHTML = Kelvin.toFixed(3) + '&deg;C'  
    }
    else if (type1.value=="farhenheit" && type2.value =="celcius") {
        let Celcius =Number.parseInt(inputValue) - 32 * (5/9)
        result.innerHTML = Celcius.toFixed(3) + '&deg;C'  
    }
    else if (type1.value=="farhenheit" && type2.value =="farhenheit") {
        let Farhenheit =Number.parseInt(inputValue) * 1
        result.innerHTML = Farhenheit.toFixed(3) + "F"  
    }
    else if (type1.value=="farhenheit" && type2.value =="kelvin") {
        let Kelvin =Number.parseInt(inputValue) - 32 * (5/9) +273.15
        result.innerHTML = Kelvin.toFixed(3) + "K"  
    }
    else if (type1.value=="kelvin" && type2.value =="celcius") {
        let Celcius =Number.parseInt(inputValue) - 273.15
        result.innerHTML = Celcius.toFixed(3) + '&deg;C'  
    }
    else if (type1.value=="kelvin" && type2.value =="farhenheit") {
        let Farhenheit =Number.parseInt(inputValue) - 273.15 * (9/5) + 32
        result.innerHTML = Farhenheit.toFixed(3) + "F"  
    }
    else if (type1.value=="kelvin" && type2.value =="kelvin") {
        let Kelvin =Number.parseInt(inputValue) * 1
        result.innerHTML = Kelvin.toFixed(3) + "K"  
    }

}