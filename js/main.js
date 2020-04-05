
function handleMessage(message) {
  if (message.done) {
    document.getElementById("obs-magic").innerHTML = "Added to OBS";
  }
}
browser.runtime.onMessage.addListener(handleMessage);
var e = document.createElement("button");
e.innerHTML = "Add to OBS";
e.id = "obs-magic";
e.onclick = function() {
  var cardImgDiv = document.getElementsByClassName("card-image")[0];
  var cardImg = cardImgDiv.getElementsByTagName("img")[0];
  var cardImgUrl = cardImg.getAttribute("src");
  browser.runtime.sendMessage({"url": cardImgUrl});
}
var cardTextTitle = document.getElementsByClassName("card-text-title")[0];
cardTextTitle.appendChild(e);
