
 function sendmail() {
   let user_name = document.getElementById("name").value;
   let user_email = document.getElementById("email").value;
   let message= document.getElementById("message").value;

   var contactParams = {
         from_name : user_name,
         to_name : user_email,
         message : message

   };
 emailjs.send('service_5rrdp9c', 'template_5usg3fk', contactParams)
     .then(function(response) {
        alert('SEND SUCCESS!', response.status, response.text);
     }, function(error) {
        alert('SENDING FAILED...', error);
     });

  }
