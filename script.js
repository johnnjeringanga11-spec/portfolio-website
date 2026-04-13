
 
 
 document.getElementById("menu").addEventListener("click",()=>{
  const nav = document.getElementById("mobile-nav")
  nav.style.display = "flex";
 })
 document.getElementById("close-menu-btn").addEventListener("click",()=>{
  const nav = document.getElementById("mobile-nav")
  nav.style.display = "none";
 });


  document.getElementById("form").addEventListener("submit", async (e)=>{
    e.preventDefault();


    try {
      const name = document.getElementById("fullname").value;
     const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      if(!name || !email || !message){
        alert("All fields are required")
      }
      if(!/^[0-9a-zA-Z _.,]+$/.test(name)){
        alert("name is not good")
      }
     else if(!/^[0-9a-zA-Z @_.,]+$/.test(email)){
        alert("email is not good")
      }  
      else if(!/^[0-9a-zA-Z _.,]+$/.test(message)){
        alert("message is not good")
      }                      
      else{
       const parms = {name,email,message};
       const sent = emailjs.send("service_2wfv9zs","template_e5hd66q",parms);
       if(sent){
   document.getElementById("displayer").textContent = "Your message was sent successfully";
   } 
      }
    } catch (error) {
      alert(error)
    }

    
      
 });