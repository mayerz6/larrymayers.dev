if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    /* Execute function ONLY if the site's content has been loaded completely  */
    if(window.onload) {
        ready()
    }
}


function ready() {  /* Functionality to work initial on site page load. */

     //   const aboutLink = document.getElementById('about');
        const expertLink = document.getElementById('expert');
        const contactLink = document.getElementById('contact');
  
    contactLink.addEventListener('click', function(){
    //    console.log("Contact Page Rendered!!!");
        let xhr = new XMLHttpRequest();

        xhr.open('GET', './assets/regions/content/contact.html', true);

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
        console.clear()
 
    });  


    expertLink.addEventListener('click', function(){
     //  console.log("Expertise Page Rendered!!!");
      
        let xhr = new XMLHttpRequest();

        xhr.open('GET', './assets/regions/content/expertise.html', true);

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
       console.clear()
    });

    aboutLink.addEventListener('click', function(){
       // console.log("About Page Rendered!!!");
        
       // Creation of the new XHR Object
       let xhr = new XMLHttpRequest();

       xhr.open('GET', './assets/regions/content/about.html', true);

       xhr.onreadystatechange = function(){
           if(this.readyState == 4 && this.status == 200){
          //   console.log(this.responseText);
           let block = document.getElementById("content");
                 block.innerHTML = this.responseText;
                 console.clear()
           }
       }

       xhr.onerror = function(){
           console.log("Data request error...");
       }

       xhr.send();
       console.clear()

    });

}

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
