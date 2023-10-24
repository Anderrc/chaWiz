
chrome.contextMenus.onClicked.addListener(getWord);

function getWord(info, tab) {
  console.log("Word " + info.selectionText + " was clicked.");

  chrome.extension.getViews({ type: "popup" }, function (views) {
    if (views.length > 0) {
      // There is at least one popup open
      // You can now interact with the popup's DOM or call functions defined in it
      var popup = views[0];
      popup.myFunction(); // Call a function defined in the popup
    } else {
      // No popups are open, so you can choose to do something else
    }
  });

}
let parent = chrome.contextMenus.create({
  title: "Search: %s",
  id: "contextMenuId2",
  contexts: ["selection"]
});

