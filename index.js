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
const contact = new Contact(contactForm);
contact.send();
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

class Contact {
    constructor(form){
        this.fullName = form.elements["fullName"].value;
        this.emailAddress = form.elements["email"].value;
        this.subject = form.elements["subject"].value;
        this.body = form.elements["msg"].value;
        
    }
fullName = "";
emailAddress= "";
subject= "";
body= ""
send(){
    console.info(this.formatMessage());
showMessage("We are not sending emails yet..."+ this.fullName);
}

formatMessage(){
    return `To: ${this.fullName}
            Email: ${this.emailAddress}
            Subject: ${this.subject}
            Body: ${this.body}`
}
}

