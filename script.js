
let main = document.getElementById("main");

function menuopen() {
     main.style.right = "00";
}
 function menuclose() {
     main.style.right = "-460px";
}


// ==== mail function ===
let gmail = document.getElementById("gmail")

function sendEmail() {
	Email.send({
    SecureToken : "20ceb23f-bb69-40fc-80a0-f55273914e29 ",
    To : 'legcy143@gmail.com',
    From : "gamil.value",
    Subject : "Doctur hub consultation",
    // Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert("message not send don't try again")
    );
}
    // token   :     20ceb23f-bb69-40fc-80a0-f55273914e29 