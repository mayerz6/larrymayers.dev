
class Nav{
    constructor(){
        
           this.aboutLink = document.getElementById("about");
            this.expertLink = document.getElementById("expert");
            this.certLink = document.getElementById("certs");
            this.contactLink = document.getElementById("contact");
            
    
        this.aboutLink.addEventListener("click", ()=>{console.log("About link clicked!")});
        this.expertLink.addEventListener("click", this.clickExpertHandler);
        this.certLink.addEventListener("click", this.clickCertHandler);
        this.contactLink.addEventListener("click", this.clickContactHandler);
    }

    clickAboutHandler(){ 
        
        let xhr = new XMLHttpRequest();

        xhr.open('GET', './assets/regions/content/certs.html', true);

        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
              let block = document.getElementById("content");
               block.innerHTML = this.responseText;
               console.clear()
              //   console.log(this.responseText);
            }
        }

        xhr.onerror = function(){
            console.log("Data request error...");
        }
 
        xhr.send();
      
      }
    clickExpertHandler(){  console.log("The EXPERT link was clicked!");  }
    clickCertHandler(){  console.log("The CERT link was clicked!");  }
    clickContactHandler(){  console.log("The CONTACT link was clicked!");  }
    
}

new Nav();

