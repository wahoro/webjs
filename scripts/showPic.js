function showPic(pic) {
  var source = pic.getAttribute('href');
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src', source);
  var text = pic.getAttribute('title');
  var dec = document.getElementById('dec');
  dec.firstChild.nodeValue = text;
  return true;
}

function prepareGallery() {
  if (!document.getElementsByTagName) {
    return false;
  }
  if (!document.getElementById) {
     return false;
  }
  var gallery = document.getElementById('imagegallery');
  if (!gallery) {
    return false;
  }

  var links = gallery.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic(this) ? false : true;
    }
  }
}

function addLoadEvent(func) {
  var oldload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

window.onload = prepareGallery;
// function countBodyChildren() {
//   var body_element =  document.getElementsByTagName('body')[0];
//   alert(body_element.childNodes.length);
// }
//
// window.onload = countBodyChildren;
