function copyAndPopup(textGettingCopied) {
    // Copy the text inside the onclick function parameters
    navigator.clipboard.writeText(textGettingCopied);
    
    // Makes and removes the popup
    function temporaryAlert(msg,duration)
    {
     var thePopup = document.createElement("div");
     thePopup.style.position = "fixed";
     thePopup.style.top = "20%";
     thePopup.style.left = "20%";
     thePopup.style.color = "lightgrey";
     thePopup.innerHTML = msg;
     setTimeout(function(){
      thePopup.parentNode.removeChild(thePopup);
     },duration);
     document.body.appendChild(thePopup);
    }
    temporaryAlert("copied",2000);
  }