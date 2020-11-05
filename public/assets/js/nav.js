
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
        
                 /* Design a function which will handle the processing of data submitted by the user. */
                    /* this.emailInput <=> let emailInput */
                    let emailInput = document.getElementById("emailInput");
                    let msgTopic = document.getElementById("msgTopic");
                    let usrMsg = document.getElementById("feedbackMsg");

                    let btnSubmit = document.getElementById("btnSubmit");
                    
                    
                    btnSubmit.addEventListener("click", () => {
                        
                        let requestData = `email=${emailInput.value}`;
                        requestData += `msgTopic=${msgTopic.value}`;
                        requestData += `usrMsg=${usrMsg.value}`;
                            
                            console.log('Contact Form Submitted!');
                            console.log(requestData);

                        });
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

function processFormData(){

   
}

new Nav();

