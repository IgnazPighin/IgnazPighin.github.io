function enviarMail(){
    Email.send({
        SecureToken : "7bec1590-30b2-4df2-9935-fc34b4707323",
        To : 'benaxa4854@ezgiant.com',
        From : document.getElementById("email").value,
        Subject : "Alguien se quiere contactar contigo",
        Body : "Nombre" + document.getElementById("name").value + 
        " Email: " + document.getElementById("email").value +
        "<br> Telefono: " + document.getElementById("telefono").value+
        "<br> Mensaje: " + document.getElementById("mensaje").value,
    }).then(
      message => alert("Mensaje Enviado")
    );
}

const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => { 
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('JIP-show');
      }
      else {
        entry.target.classList.remove('JIP-show');
      }
    });
});
const hiddenElements = document.querySelectorAll('.JIP-hidden');
hiddenElements.forEach((el) => observer.observe(el));