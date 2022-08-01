chrome.action.onClicked.addListener( (tab) => {
    chrome.action.setTitle({tabId: tab.id, title: `You are on tab: ${tab.id}`})
    console.log("BG", tab)
    text.innerText = tab
})
