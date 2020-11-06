
class Nav{

 constructor(){
        
           this.xhr = new XMLHttpRequest();
        
            this.aboutLink = document.getElementById("about");
            this.expertLink = document.getElementById("expert");
            this.certLink = document.getElementById("certs");
            this.contactLink = document.getElementById("contact");
            this.content = document.getElementById("screen-msg");
      
            this.aboutLink.addEventListener("click", this.clickAboutHandler);
            this.expertLink.addEventListener("click", this.clickExpertHandler);
            this.certLink.addEventListener("click", this.clickCertHandler);
            this.contactLink.addEventListener("click", this.clickContactHandler);
            
               // Unique approach to inserting content within the site dynamically.
                fetch("./assets/regions/nav.html").then(function(response){
                return response.text(); 
                }).then(function(string){
                //  Load navigation region.
                document.querySelector("header").innerHTML = string;
                }).catch(function(err){
                    console.log('Fetch error occurred', err);
                });         


                // Unique approach to inserting content within the site dynamically.   
                fetch("./assets/regions/footer.html").then(function(response){
                return response.text();
                }).then(function(string){
                // Load footer region.
                document.querySelector("footer").innerHTML = string;
                // Load current YEAR for copyright section of the site.
                document.getElementById("year").appendChild(document.createTextNode(new Date().getFullYear()));
                }).catch(function(err){
                console.log('Fetch error occurred', err);
                });


    }      
     

   clickAboutHandler(){ 

        console.log(`The ABOUT link was clicked!!!`);  
       
       let xhr = new XMLHttpRequest();
     
       xhr.open('GET', './assets/regions/content/about.html', true);
    
       xhr.onreadystatechange = function(){

           if(this.readyState == 4 && this.status == 200){
            document.getElementById("screen-msg").innerHTML = this.responseText;
   
          }
       }
   
       xhr.onerror = function(){
           console.log("Data request error...");
       }
   
       xhr.send(); 
    
    }


    clickExpertHandler(){  
        console.log("The EXPERT link was clicked!");  
        
            let xhr = new XMLHttpRequest();
     
           xhr.open('GET', './assets/regions/content/expertise.html', true);
        
           xhr.onreadystatechange = function(){
               if(this.readyState == 4 && this.status == 200){
                document.getElementById("screen-msg").innerHTML = this.responseText;
       
               }
           }
       
           xhr.onerror = function(){
               console.log("Data request error...");
           }
       
           xhr.send(); 
       
    }
    
    clickCertHandler(){ 
         console.log("The CERT link was clicked!");  
           // window.location.href = "./about.html";
     
           let xhr = new XMLHttpRequest();
     
           xhr.open('GET', './assets/regions/content/certs.html', true);
        
           xhr.onreadystatechange = function(){
               if(this.readyState == 4 && this.status == 200){
                document.getElementById("screen-msg").innerHTML = this.responseText;
                 }
           }
       
           xhr.onerror = function(){
               console.log("Data request error...");
           }
       
           xhr.send(); 
       
    }
    
 
    clickContactHandler(){  
        console.log("The CONTACT link was clicked!");  
      
            let xhr = new XMLHttpRequest();
     
            xhr.open('GET', './assets/regions/content/contact.html', true);
         
            xhr.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                 document.getElementById("screen-msg").innerHTML = this.responseText;
        
                new Form();

                }
            }
        
            xhr.onerror = function(){
                console.log("Data request error...");
            }
        
            xhr.send(); 
        
    }
  
    fetchCerts(){

    }

}

/* Designation of the CLASS used to validate our user input. */
class Validator {

    static REQUIRED = "REQUIRED";
    static MIN_LENGTH = "MIN_LENGTH";
    static NUMBER = "NUMBER";
    static MAX_LENGTH = "MAX_LENGTH";
    static DROP_BOX = "DROP_BOX";

static validate(value, flag, validatorValue){
    if(flag === this.REQUIRED){
        return value.trim().length > 0;
    }
    if(flag === this.MIN_LENGTH){
        return value.trim().length > validatorValue;
    }
    if(flag === this.MAX_LENGTH){
        return value.length < validatorValue;
    }
    if(flag === this.NUMBER){
        return isNaN(value) ;
    }if(flag === this.DROP_BOX){
        return value > 0;
    }
}


}

class Form{

    constructor(){
    
        /* Design a function which will handle the processing of data submitted by the user. */
           /* this.emailInput <=> let emailInput */
           let emailInput = document.getElementById("emailInput");
           let emailErrorMsg = document.getElementById("emailErrorMsg");
           let msgTopic = document.getElementById("msgTopic");
           let topicErrorMsg = document.getElementById("topicErrorMsg");
           let usrMsg = document.getElementById("feedbackMsg");
           let feedbackErrorMsg = document.getElementById("feedbackErrorMsg");
           
           let btnSubmit = document.getElementById("btnSubmit");


msgTopic.addEventListener("blur", () => {

    /* TOPIC SELECTION Check */
if(!Validator.validate(msgTopic.value, Validator.DROP_BOX)){
    topicErrorMsg.innerText = "Please select a feedback topic!";
    msgTopic.style = "border-color: #ff0000;";
    topicErrorMsg.style = "color: #ff0000;";

    return;
    
} else if (Validator.validate(msgTopic.value, Validator.DROP_BOX)){

    topicErrorMsg.innerText = "";
    msgTopic.style = "border-color: #2ecc71;";
    topicErrorMsg.style = "display: none";

}
 
});

usrMsg.addEventListener("blur", () => {
    
 /* MESSAGE Check */
 if(!Validator.validate(usrMsg.value, Validator.REQUIRED)){
    feedbackErrorMsg.innerText = "Blank feedback NOT allowed!!!";
    usrMsg.style = "border-color: #ff0000;";
    feedbackErrorMsg.style = "color: #ff0000;";

    return;
    
} else if(!Validator.validate(usrMsg.value, Validator.MAX_LENGTH, 10)){
    feedbackErrorMsg.innerText = "Feedback exceeds limit!";
    usrMsg.style = "border-color: #ff0000;";
    feedbackErrorMsg.style = "color: #ff0000;";

    return;

}else if(Validator.validate(usrMsg.value, Validator.REQUIRED)){

    feedbackErrorMsg.innerText = "";
    usrMsg.style = "border-color: #2ecc71;";
    feedbackErrorMsg.style = "display: none";

}
 

});

emailInput.addEventListener("blur", () => {
 /* EMAIL Check */
 if(!Validator.validate(emailInput.value, Validator.REQUIRED)){
    emailErrorMsg.innerText = "Missing Email Info!";
    emailInput.style = "border-color: #ff0000;";
    emailErrorMsg.style = "color: #ff0000;";

    return;

} else if(!Validator.validate(emailInput.value, Validator.NUMBER)){
    emailErrorMsg.innerText = "Emails don't have in numbers!";
    emailInput.style = "border-color: #ff0000;";
    emailErrorMsg.style = "color: #ff0000;";

    return;

} else if(Validator.validate(emailInput.value, Validator.NUMBER)) {

    emailErrorMsg.innerText = "";
    emailInput.style = "border-color: #2ecc71;";
    emailErrorMsg.style = "display: none";

}

});          

btnSubmit.addEventListener("click", () => {
    
    /* Must validate the user input before processing. */
    
    let requestData = `email=${emailInput.value}`;
    requestData += `msgTopic=${msgTopic.value}`;
    requestData += `usrMsg=${usrMsg.value}`;
        
        console.log('Contact Form Submitted!');
        console.log(requestData);

    });



}


    static processFormData(){
    
       
    }

}


new Nav();

