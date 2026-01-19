 document.getElementById("form").addEventListener("submit", async (e)=>{
    e.preventDefault();

    const name = document.getElementById("fullname").value;
     const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
    const parms = {name,email,message};

   const sent = emailjs.send("service_2wfv9zs","template_e5hd66q",parms);
   if(sent){
   document.getElementById("displayer").textContent = "Your message was sent successfully";
   }
 });