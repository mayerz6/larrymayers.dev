
class Nav{

 constructor(){
        
           this.xhr = new XMLHttpRequest();
        
            this.aboutLink = document.getElementById("about");
            this.expertLink = document.getElementById("expert");
            this.certLink = document.getElementById("certs");
            this.contactLink = document.getElementById("contact");
        
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
                }).catch(function(err){
                console.log('Fetch error occurred', err);
                });


    }      
   
   

   clickAboutHandler(){ 
        console.log(`The ABOUT link was clicked!!!`);  
        window.location.href = "./about.html";

    }

    clickExpertHandler(){  
        console.log("The EXPERT link was clicked!");  
        window.location.href = "./expertise.html";
    }
    
    clickCertHandler(){ 
         console.log("The CERT link was clicked!");  
        window.location.href = "./certs.html";    
    }
    
    clickContactHandler(){  
        console.log("The CONTACT link was clicked!");  
        window.location.href = "./contact.html";
    }
  
    fetchCerts(){

        this.xhr.open('GET', './assets/regions/content/certs.html', true);
    
        this.xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
              let block = document.getElementById("content");
              // block.innerHTML = "<b>Running</b>";
               //console.clear()
                 console.log(this.responseText);
            }
        }
    
        this.xhr.onerror = function(){
            console.log("Data request error...");
        }
    
        this.xhr.send();
    }

}

new Nav();

