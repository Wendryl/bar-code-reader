function onUpdateReadOption(e) {
  const inputContainer = document.querySelector("#file-input-container");
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


function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
}
var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess)
