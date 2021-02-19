var EVENT_DOM_CONTENT_LOADED = 'DOMContentLoaded';

function getGreetingId() {
  return 'greeting';
}

function getGreeting() {
  return 'Hello, World!';
}

function getGreetingElement() {
  return document.getElementById(getGreetingId());
}

function onSendHeaders(details){
		//logger.log('onSendHeaders',details);
		//this isn't an ordinary tab, probably it's ourselves (-1) and so we don't want to pollute the lists.
		if(details.tabId <= 0){
			return;
		}
		const entry = this.entries.get(details.requestId);
		//might be that user did 'clear' while this request was still going on.
		if(!entry){
			logger.log('no entry for ' + details.requestId + ':',details);
			return;
		}		
		entry['request']['headers'] = details.requestHeaders;
		//this.onWebRequest('onSendHeaders',details);
		this.onWebRequest('onSendHeaders',entry);
}
function renderGreeting() {
  getGreetingElement().textContent = getGreeting();
}

function fireWhenDOMContentIsLoaded() {
  renderGreeting();
}

document.addEventListener(EVENT_DOM_CONTENT_LOADED, fireWhenDOMContentIsLoaded);