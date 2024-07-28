const inputBtn= document.querySelector("#age");
const calculateButton = document.querySelector(".age-cal-btn");
const display = document.querySelector(".cal-result");

console.log(inputBtn)
console.log(calculateButton)
console.log(display)

calculateButton.addEventListener("click",()=>{
    if(inputBtn.value ==""){
        alert("Please enter your birthday");
    }else{
        // console.log(inputBtn.value);
        const dob= new Date(inputBtn.value);
        const dob_year = dob.getFullYear();
        const curr_year =new Date();
        const age = curr_year.getFullYear() - dob_year;
        console.log(age);
        display.innerHTML=`Your age is ${age} years old`;
    }
})
