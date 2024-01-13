

// Context menu

chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
        id: "selection",
        title: "Menu title",
        contexts: ['selection', 'page']
    });
})



