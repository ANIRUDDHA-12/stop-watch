let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

let count = 0;
let count1 = 0;
let count2 = 0;

function handleReset(){
    hour.innerText = "00"
    min.innerText = "00"
    sec.innerText = "00"
}

function handleStart(){
    setInterval(()=>{
        count++;
        sec.innerText=count;
        if(count==60){
            count = 0;
            count1 += 1;
            min.innerText=count1;

            if(count1==60){
                count1 = 0;
                count2 += 1;
                hour.innerText=count2;
            }
        }
    },1000)
}
