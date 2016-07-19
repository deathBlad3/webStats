chrome.tabs.onActivated.addListener(function(info){
    chrome.tabs.query({'active':true,'lastFocusedWindow':true}, function(tabs){
	var url = tabs[0].url;
	alert(url);
	chrome.storage.local.set({'url':url});
    });
});
