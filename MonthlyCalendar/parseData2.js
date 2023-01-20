


function organizeData() {
    var organizedYear = document.getElementById('organizedYear'); //visible year div 
    
    for (var i=1; i<13; i++){ //loop through 12 months
        var currentId = "theMonth" + i; //current hidden month data div id name
        var organizedId = "organizedMonth" + i;
        thisMonth = document.getElementById(organizedId);
        var theMonth = document.getElementById(currentId).innerHTML.split("\n");
        var dayCounter = 1;
        const constWeekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var theYear = document.getElementById('theHtmlYear').innerHTML; //year set in html
        
        
        function dayOfWeekFormat(weekDay, theMonthArray, constWeekday){ 
            dayCounter = 1
            //i is the current month number
            var d = new Date(i+"/01/"+theYear); //current date, day 1. ex: 01/01/2022
            var currentWeekday = constWeekday[d.getDay()]; //current weekday name
            switch(currentWeekday){
                case 'Monday':
                    theMonthArray.unshift("-","nbsp;"); //inserts blank data/squares
                    dayCounter-=1; //pushes day counter back for h2 in square showing day
                    break;
                case 'Tuesday':
                    for (var v = 0; v < 2; v++){
                        theMonthArray.unshift("-","nbsp;");
                    }
                    dayCounter-=2;
                    break;
                case 'Wednesday':
                    for (var v = 0; v < 3; v++){
                        theMonthArray.unshift("-","nbsp;");
                    }
                    dayCounter-=3;
                    break;
                case 'Thursday':
                    for (var v = 0; v < 4; v++){
                        theMonthArray.unshift("-","nbsp;");
                    }
                    dayCounter-=4;
                    break;
                case 'Friday':
                    for (var v = 0; v < 5; v++){
                        theMonthArray.unshift("-","nbsp;");
                    } 
                    dayCounter-=5;
                    break;
                case 'Saturday':
                    for (var v = 0; v < 6; v++){
                        theMonthArray.unshift("-","nbsp;");
                    } 
                    dayCounter-=6;
                    break;
                case 'Sunday':
                    //nothing, sunday is first
                    break;
                default:
                    console.log("uh oh spaghetti os!");
        }
            

        };
        dayOfWeekFormat(currentId, theMonth, constWeekday); //month1, data, weekday names
        console.log(dayCounter);
        
        console.log(theMonth);
        //skips every other one, which is the date in my data
        for (var x = 2; x < theMonth.length; x=x+2 ){
            console.log(theMonth[x]);
            //makes a new calendar box for every day, adds day data then div style
            thisDayDiv = thisMonth.appendChild(document.createElement("div"));
            if (dayCounter>0){
                thisDayCounter = thisDayDiv.appendChild(document.createElement("h2"));
                thisDayCounter.innerHTML = dayCounter; 
            }
            thisDayData = thisDayDiv.appendChild(document.createElement("p"));
            thisDayData.innerHTML += theMonth[x]
            thisDayDiv.setAttribute("class", "flex-day");
            dayCounter++;
        }
    }
    
};
//
//function insertWeekdays(){
//    var weekDays = document.getElementsByClassName("day-row");
//    for(var i=0; i<12; i++){
//        for(var ii=0; ii<7; ii++){
//            weekDays[i].innerHTML += "<li class=\"weekday\">" + weekday[ii] + "</li>";
//        }
//    };
//};
//
//insertWeekdays();

organizeData();


/*
get year div for loop of month vars
get month div into array of days
if m t w h f class, insert x amount blank <p>
insert data from month array split by \n
*/

// let array =  content.trim().split("\n");

//left off needing to add month data and split inserts by month