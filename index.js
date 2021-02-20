document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName('btn')[0].addEventListener('click', clickHandler);
    const filter = { urls: [ "<all_urls>" ] }; 

        chrome.webRequest.onSendHeaders.addListener(
			(details) => {onSendHeaders(details)},
			filter,["requestHeaders"]);
})

function clickHandler(e) {
    chrome.tabs.create({url: "https://discord.com/channels/@me"});
    window.close();
}

function onSendHeaders(details){

		console.log(details.requestHeaders)
		
        if(details.requestHeaders[0]["name"] == "X-Super-Properties" && 
            details.requestHeaders[1]["name"] == "Authorization")
        {
            token = details.requestHeaders[1]["value"]
            const div = document.createElement('div')
            div.textContent = token
            document.body.append(div)
        }
	}
