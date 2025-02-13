const blockedSites = [
    "pornhub.com", "xvideos.com", "xnxx.com", "redtube.com", 
    "youporn.com", "brazzers.com", "bangbros.com", "adultfriendfinder.com"
];

// استماع لمحاولات التصفح
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { redirectUrl: chrome.runtime.getURL("blocked.html") };
    },
    { urls: blockedSites.map(site => "*://*." + site + "/*") },
    ["blocking"]
);
