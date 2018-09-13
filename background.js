chrome.contentSettings.plugins.set({
    'primaryPattern': '*://www.sunnieday.nl/*',
    'setting': 'allow',
    'scope': 'regular'
});

chrome.contentSettings.plugins.set({
    'primaryPattern': '*://*.sunnieday.nl/*',
    'setting': 'allow',
    'scope': 'regular'
});

chrome.contextMenus.create({
    id: "sunnie-home",
    title: "Sunnieday Homepagina",
    contexts: ["page_action"]
});

chrome.contextMenus.create({
    id: "sunnie-hotel",
    title: "Sunnieday Hotel",
    contexts: ["page_action"]
});

chrome.contextMenus.create({
    id: "sunnie-app",
    title: "Windows 10 Store App downloaden",
    contexts: ["page_action"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "sunnie-app") {
        let app = "https://www.sunnieday.nl/windows-desktop";
        chrome.tabs.create({url: app});
    }
    else if (info.menuItemId === "sunnie-home") {
        let home = "https://www.sunnieday.nl/";
        chrome.tabs.create({url: home});
    }
    else if (info.menuItemId === "sunnie-hotel") {
        let hotel = "https://www.sunnieday.nl/hotel";
        chrome.tabs.create({url: hotel});
    }
});