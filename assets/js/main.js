window.onload = function() {

        var aboutLink = document.getElementById('about');
        var expertiseLink = document.getElementById('expertise');
  /* 
    servicesLink.addEventListener('click', function(){

    });
*/
    aboutLink.addEventListener('click', function(){
       // console.log("About Page Rendered!!!");
        
       // Creation of the new XHR Object
       var xhr = new XMLHttpRequest();

       xhr.open('GET', 'assets/regions/content/about.html', true);

       xhr.onreadystatechange = function(){
           if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
           var block = document.getElementById("content");
       
          block.innerHTML = this.responseText;
        
           }
       }

       xhr.onerror = function(){
           console.log("Data request error...");
       }

       xhr.send();


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
