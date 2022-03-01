let hasJob =  true;
const formInfo = document.getElementById("formInfo");

if(hasJob){
showMessage("Thank you for visiting, I am currently employed ");
}else{
    showMessage("Thank you for visiting, please look around ");

}
let today = new Date();
let dayOfWeek = today.getDay();

if(dayOfWeek===0 || dayOfWeek===6){
    showMessage("It is the weekend - please be paitient ");

}

function showMessage(message){
    formInfo.innerHTML = "<p>"+ message+"</p>";

}