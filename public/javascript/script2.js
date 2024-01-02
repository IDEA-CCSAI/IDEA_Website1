const form = document.querySelector("form");
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")
const emailId = document.getElementById("email")
const messageContent = document.getElementById("message")
const subjectTitle = document.getElementById("subject")

function sendEmail(){
    const bodyMessage = `Full Name: ${firstName.value} ${lastName.value}<br> Email: ${emailId.value} <br>Message: ${messageContent.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "idea.ccsai@gmail.com",
        Password : "15691995DC46C56FDCF1826719C70F0817DC",
        To : "idea.ccsai@gmail.com",
        From : "idea.ccsai@gmail.com",
        Subject : subjectTitle.value,
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent success",
                    icon: "success"
                  }); 
            }
            else{
                Swal.fire({
                    title: "No success!",
                    text: "Message not sent success",
                    icon: "error"
                  }); 
            }
        }
    );
}

function checkInput(){
    const items = document.querySelectorAll('.item')
    let itemEmpty = true;

    for(const item of items){
        if(item.value == ""){
            itemEmpty = false;
            break;
        }   
    }

    if(itemEmpty==false){
        alert("Fill empyt boxes")
    }
    else{
        alert("All done")
    }

}
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInput()
    //sendEmail();
})




