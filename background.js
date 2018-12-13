chrome.contextMenus.create({
  title: "Convert to",
  id: "mm-text-converter",
  contexts:["selection", "editable"]
});


chrome.contextMenus.create({
    "title" : "Unicode",
    parentId: "mm-text-converter",
    "contexts": ["selection", "editable"],
    "onclick" : function(e, tab) {

        chrome.tabs.sendMessage(tab.id, {text: e.selectionText, convertTo: 'unicode'});

    }
});


chrome.contextMenus.create({
    "title" : "Zawgyi",
    parentId: "mm-text-converter",
    "contexts": ["selection", "editable"],
    "onclick" : function(e, tab) {

        chrome.tabs.sendMessage(tab.id, {text: e.selectionText, convertTo: 'zawgyi'});

    }
});