class Links{

    constructor(){

        /* Instantiate the elements of your NAV links */
        this.aboutLink = document.getElementById('about');
        this.expertLink = document.getElementById('expert');
        this.contactLink = document.getElementById('contact');  

        this.contactLink.addEventListener("click", this.clickContactHandler.bind(this));
        this.aboutLink.addEventListener("click", this.clickAboutHandler.bind(this));
        this.expertLink.addEventListener("click", this.clickExpertiseHandler.bind(this));
        
    }

    /* Simple Method to FETCH content for the ABOUT section of the page. */
    clickAboutHandler(){

        let xhr = new XMLHttpRequest();

        xhr.open('GET', './assets/regions/content/about.html', true);

        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
            
                document.getElementById("content").innerHTML = this.responseText;
              
            }
        }

        xhr.onerror = function(){
            console.log("Data request error...");
        }
 
        xhr.send();
        document.getElementById('about').style = "color: #fff; background-color: #ff9300;";
        document.getElementById('contact').style = "color: #777; background-color: #fff;";
        document.getElementById('expert').style = "color: #777; background-color: #fff;";
        document.getElementById('content').style = "border-top: 20px solid #ff9300;";



       // console.clear();

    }

    /* Simple Method to FETCH content for the Contact section of the page. */
    clickContactHandler(){
        
        let xhr = new XMLHttpRequest();

        xhr.open('GET', './assets/regions/content/contact.html', true);

        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("content").innerHTML = this.responseText;
                       new Form();  
                    //  Form.loadForm(); 
            }
        }

        xhr.onerror = function(){
            console.log("Data request error...");
        }
 
        xhr.send();
        document.getElementById('about').style = "color: #777; background-color: #fff;";
        document.getElementById('contact').style = "color: #fff; background-color: #d40e3f;";
        document.getElementById('expert').style = "color: #777; background-color: #fff;";
        document.getElementById('content').style = "border-top: 20px solid #d40e3f;";
    }

    clickExpertiseHandler(){
        
        let xhr = new XMLHttpRequest();

        xhr.open('GET', './assets/regions/content/expertise.html', true);

        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
              
                document.getElementById("content").innerHTML = this.responseText;
             
            }
        }

        xhr.onerror = function(){
            console.log("Data request error...");
        }
 
        xhr.send();
        document.getElementById('about').style = "color: #777; background-color: #fff;";
        document.getElementById('contact').style = "color: #777; background-color: #fff;";
        document.getElementById('expert').style = "color: #fff; background-color: #1F85DE;";
        document.getElementById('content').style = "border-top: 20px solid #1F85DE;";
    }

}


class Form{

    constructor(){
       this.button = document.getElementById('btnSubmit');
       this.email = document.getElementById('emailInput');
       this.feedback = document.getElementById('feedbackMsg');

    //    this.button.addEventListener('click', () => {
    //         alert("Running via constructor");
    //    });
       this.button.addEventListener('click', Form.loadForm);
       this.email.addEventListener('blur', this.emailValidation);
       this.feedback.addEventListener('blur', this.feedbackValidaion);
    }

    loadMsg(){
       // alert("Running via method!!!");
    }

    emailValidation(){
        alert('Email accepted!');
    }

    feedbackValidaion(){
        alert('Feedback accepted!');
    }

    warningMsg(){
        alert("Running!!!");
    }

   static loadForm(){
    alert("Static Running!!!");
   }


}


new Links();

 /* Unique approach to inserting content within the site dynamically. */ 
    fetch("./assets/regions/nav.html").then(function(response){
                return response.text(); 
                }).then(function(string){
                  //  Load navigation region.
                  document.querySelector("header").innerHTML = string;
                }).catch(function(err){
                    console.log('Fetch error occurred', err);
                });         

 /* Unique approach to inserting content within the site dynamically.    */ 
    fetch("./assets/regions/footer.html").then(function(response){
            return response.text();
        }).then(function(string){
            // Load footer region.
            document.querySelector("footer").innerHTML = string;
        }).catch(function(err){
            console.log('Fetch error occurred', err);
        });
