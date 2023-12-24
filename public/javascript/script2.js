const sendButton = document.querySelector("#submitFormBtn")

sendButton.addEventListener("click",function (){
    var message = document.getElementById("subject").value;
    alert(message)
})