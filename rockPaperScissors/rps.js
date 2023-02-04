function rps(userChoice){
        //determines the computer choice
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        } 
        
        //prompt for choices
        function choices(){
            return ( "Computer chose " + computerChoice + ".");
        }
    
        //the result boxes behind the tags
        var resultScissors = document.getElementById("resultScissors");
        var resultRock = document.getElementById("resultRock");
        var resultPaper = document.getElementById("resultPaper");   
    
        //makes result boxes tuck back behind tag
        function reseting(resultRock, resultPaper, resultScissors){
            if (resultRock.style.transform === "translate(20px, 0px)"){
                resultRock.style.transform = "translate(0px, 0px)";
            }
            else if (resultPaper.style.transform === "translate(20px, 0px)"){
                resultPaper.style.transform = "translate(0px, 0px)";
            }
            else{
                resultScissors.style.transform = "translate(0px, 0px)";
            }
        }
        reseting(resultRock, resultPaper, resultScissors);
        
        //determines who wins
        function compare(choice1, choice2)
        {
            
         if (choice1 === choice2)
         {
             if (choice2 === "rock")
           {
               resultRock.style.fill = "#8c8c8c"; //result tag color
               resultRock.style.transform = "translate(20px, 0px)"; //result tag slides to the right
               return ( "It's a tie!"); //result prompt
           }
             else if (choice2 === "paper")
           {
               resultPaper.style.fill = "#8c8c8c";
               resultPaper.style.transform = "translate(20px, 0px)";
               return ( "It's a tie!");
           }
             else 
           {
               resultScissors.style.fill = "#8c8c8c";
               resultScissors.style.transform = "translate(20px, 0px)";
               return ( "It's a tie!");
           }
         }
        
         else if ( choice1 === "rock")
         {
           if (choice2 === "scissors")
           {
               resultRock.style.fill = "#248e4f";
               resultRock.style.transform = "translate(20px, 0px)";
               return ( "You won.");
           }
           else
           {
               resultRock.style.fill = "#912323";
               resultRock.style.transform = "translate(20px, 0px)";
               return ( "You lost.")
           }
         }

          else if ( choice1 === "paper")
         {
           if (choice2 === "scissors")
           {
               resultPaper.style.fill = "#912323";
               resultPaper.style.transform = "translate(20px, 0px)";
               return ( "You lost.");
           }
           else
           {
               resultPaper.style.fill = "#248e4f";
               resultPaper.style.transform = "translate(20px, 0px)";
               return ( "You won.")
           }
         }

          else
         {
           if (choice2 === "rock")
           {
               resultScissors.style.fill = "#912323";
               resultScissors.style.transform = "translate(20px, 0px)";
               return ( "You lost.");
           }
           else
           {
               resultScissors.style.fill = "#248e4f";
               resultScissors.style.transform = "translate(20px, 0px)";
               return ( "You won.")
           }
         } 
        }
    
        document.getElementById('result').innerHTML = compare(userChoice, computerChoice);
    
        document.getElementById('choices').innerHTML = choices();
    }

//hover over tags
function chbg(color, theicon) {
    if (color === "darker"){
        color = "#d6d6d6";
    }
    else {
        color = "#EAEAEA";
    }
    document.getElementById(theicon).style.fill = color;
}   

