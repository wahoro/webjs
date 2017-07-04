function popUp(url) {
  window.open(url, 'popup', 'width=320, height=480');
}

function prepareLinks() {
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('class') == "popup") {
      links[i].onclick = function() {
        popUp(this.href);
        return false;
      }
    }
  }
}

window.onload = prepareLinks;
