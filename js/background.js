browser.runtime.onMessage.addListener(downloadImage);
browser.downloads.onChanged.addListener(downloadChanged);
function downloadImage(message) {
  console.log(message.url);
  browser.downloads.download({
    filename: "current_card.jpg",
    saveAs: false,
    url: message.url,
    conflictAction: "overwrite"
  });
}; 

function downloadChanged(downloadDelta) {
  if (downloadDelta.state.current === "complete") {
      console.log("Download Finished");
      browser.runtime.sendMessage({"done": true});
  }
}