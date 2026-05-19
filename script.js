const form = document.getElementById("contactForm");
const displayer = document.getElementById("displayer");
  form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    try {
     const name = document.getElementById("nameInput").value;
     const email = document.getElementById("emailInput").value;
     const service = document.getElementById("serviceInput").value;
     const description = document.getElementById("descriptionInput").value;
      if(!name || !email || !service || !description){
        displayer.textContent="All fields are required";
      }
      if(!/^[0-9a-zA-Z _.,]+$/.test(name)){
        displayer.textContent="Name contains unwanted symbols";
      }
     else if(!/^[0-9a-zA-Z @_.,]+$/.test(email)){
        displayer.textContent="Email contains unwanted symbols";
      }  
      else if(!/^[0-9a-zA-Z _.,]+$/.test(service)){
        displayer.textContent="Service contains unwanted symbols";
      }
      else if(!/^[0-9a-zA-Z _.,]+$/.test(description)){
        displayer.textContent="Description contains unwanted symbols";
      }                           
      else{
        const message = `Service ${service}
        Description ${description}`

       const parms = {name,email,message};
       const sent = emailjs.send("service_2wfv9zs","template_e5hd66q",parms);
       if(sent){
   displayer.textContent = "Your message was sent successfully";
   } 
      }
    } catch (error) {
      displayer.textContent = error
    }
     });
