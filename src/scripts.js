import { showToast, showElement, hideElement } from './util.js';

const inputContainer = document.querySelector("#file-input-container");
const readerResult = document.querySelector("#reader-result");
const html5QrCode = new Html5Qrcode(/* element id */ "reader");
const fileinput = document.getElementById("file-input");

window.onUpdateReadOption = function(e) {
  const readOption = e.target.value;

  if (readOption == "file") {
    inputContainer.classList.add("d-block");
    inputContainer.classList.remove("d-none");
  }

  if (readOption == "camera") {
    inputContainer.classList.remove("d-block");
    inputContainer.classList.add("d-none");
  }
}

window.clearReader = function() {
  html5QrCode.clear();
  hideElement(readerResult.parentNode);
}

window.copyToClipboard = function(e) {
  e.preventDefault();
  readerResult.select();
  readerResult.setSelectionRange(0, Infinity);
  navigator.clipboard.writeText(readerResult.value);
  showToast('Copied to clipboard!', 'dark');
}

// File based scanning
fileinput.addEventListener("change", (e) => {
  if (e.target.files.length == 0) {
    // No file selected, ignore
    return;
  }

  const imageFile = e.target.files[0];
  // Scan QR Code
  html5QrCode
    .scanFile(imageFile, true)
    .then((decodedText) => {
      // success, use decodedText
      readerResult.value = decodedText;
      showElement(readerResult.parentNode);
    })
    .catch((err) => {
      showToast('There\'s no bar code on the selected picture.', 'warning');
    });
});
