chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	    if (message.type == "color-red"){
		//alert("red?");
		document.body.style.background = "red";
	    }
	}
    );