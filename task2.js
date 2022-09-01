var arr = ["The System shall provide a login/Signup interface to allow users to have their own id in order to use the application." ,
"The system shall store the signup details in a secure data base.",
"The system must allow users to log in with their Google accounts.",
"The system must allow users to reset their password by clicking on I forgot my password and receiving a link to their verified email address.",
"Every time the user tries to log in the system shall authenticate the credentials to grant access.", 
"In case of wrong ID or password system shall notify the user with a message. ",
"The system shall store passwords in form of hashes to ensure better security ",
"The system shall provide an interface to ask the related queries from the user. ",
"The system shall ensure complete privacy by applying end-to-end encryption over the entered queries. ",
"The system shall embed state of the art algorithm in the app for providing answers to the user queries. ",
"The system shall display the time required by the system to process the query and generate result on screen.",
"The system shall update the training dataset on regular intervals for making improved Ai model.",
"The system shall maintain a dashboard for each user containing history of all the queries asked and their respective responses.", 
"The system shall provide a delete history button and provide the authority to delete previous queries to the user.",
"The system must allow the user to submit feedback through a contact form in the app. ",
"The system shall update the stored panel code and constitution as per the amendments.",
"The system shall provide a print button to allow user to download the response provided by Ai in pdf format.",
"The system shall provide a share button to allow users to share results via msg using a link.",
"The system shall provide a multi-threaded approach to handle multiple active users in parallel.",
"The system shall log out automatically if left unused for 30mins",
"The system shall provide Secure access to consumers confidential data.",
"The system shall provide 24X7 availability.",
"The system shall provide better component design",
"The system shall provide better performance at peak time.",
"The system shall ensure flexible service-based architecture will be highly desirable for future extensions.",
"Clicking any link on the navigation bar should take less than 1 second",
"Updating and saving any personal information should take less than 1 second",
"The users login information should be secure ",
"When the user types his or her password to log in, it should be hidden.",
"The system should be secure enough so that the users personal information will not be disclosed to unauthorized users.",
"The system should be secure enough to prevent the corruption of data from unauthorized users",
"Only the system data administrator can assign roles and change access permissions to the system.",
"The website must be resilient to any kind of attacks, including DDoS and XSS attacks.",
"The system shall provide easy to understand interface.",
"Instructs in app shall be provided in simple language.",
"Maximum clicks to complete a task shall be 3.",
"App should open immediately without a delay.",
"In case of maintenance users shall be informed earlier.",
"The App should be executable at all popular OS.",
"The system shall be modular and open to addition of new features."


];
    var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]


    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      
   

    function displayList(){
        var cont = document.getElementById('root');

        // create ul element and set the attributes.
        var ul = document.createElement('ul');
        ul.setAttribute('style', 'padding: 0; margin: 0;');
        ul.setAttribute('id', 'theList');   
        shuffle(a); 
        for (i = 0; i <= arr.length - 1; i++) {
            var li = document.createElement('li');     // create li element.
            li.innerHTML = arr[a[i]];      // assigning text to li using array value.
            li.setAttribute('style', 'display: block;');    // remove the bullets.

            if (a[i]<=20){
                li.setAttribute("style","color:red;")    
            }
            else{
                li.setAttribute("style","color:blue;") 
            }
        ul.appendChild(li); 
    }

    cont.appendChild(ul);  


     }

     function reshuffle(){
        var container = document.getElementById("root");
        container.textContent = "";
        displayList();
       
     }
     
     function hideShow(){
            var x = document.getElementById("root");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
        }
        


        function sortList() {
          var list, i, switching, b, shouldSwitch;
          list = document.getElementById("theList");
          switching = true;
          /* Make a loop that will continue until
          no switching has been done: */
          while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            b = list.getElementsByTagName("LI");
            // Loop through all list items:
            for (i = 0; i < (b.length - 1); i++) {
              // Start by saying there should be no switching:
              shouldSwitch = false;
              /* Check if the next item should
              switch place with the current item: */
              if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /* If next item is alphabetically lower than current item,
                mark as a switch and break the loop: */
                shouldSwitch = true;
                break;
              }
            }
            if (shouldSwitch) {
              /* If a switch has been marked, make the switch
              and mark the switch as done: */
              b[i].parentNode.insertBefore(b[i + 1], b[i]);
              switching = true;
            }
          }
        }

   


     
     displayList()

 