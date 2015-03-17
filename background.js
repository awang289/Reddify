chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.type =="red") {
	    chrome.tabs.getSelected(null, function(tab){
		    chrome.tabs.sendMessage(tab.id, {type: "color-red"});

		    chrome.browserAction.setBadgeText({text: "red!"});
		});
	}
	return true;
});