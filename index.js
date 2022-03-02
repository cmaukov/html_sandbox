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

function clearMessage(){
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit",function(event){
event.preventDefault();
showMessage("Sending your message...");
});

const experiences = document.getElementsByClassName("experience");


for (const item of experiences){
    item.addEventListener("mouseenter",function(event){
        event.target.style = "background-color: #999999"
    });
    item.addEventListener("mouseleave",function(event){
        event.target.style = ""
    });
}