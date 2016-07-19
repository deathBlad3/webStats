document.addEventListener('DOMContentLoaded',function(){
    var cb = document.getElementById('clickbtn');
    cb.addEventListener('click',function(){
	chrome.storage.local.get('url',function(result){
	    alert(result.url);
	});
    });
});
			  

/*
chrome.storage.local.get('url',function(result){
    alert(result.url);
});
*/
