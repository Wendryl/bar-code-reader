
export function showToast(message, type) {
  const toastElement = document.querySelector("#toast");
  const toast = new bootstrap.Toast(toastElement);
  toastElement.classList.add(`text-bg-${type}`);
  const toastContent = document.querySelector(`.toast-body`);
  toastContent.innerText = message;
  toast.show();
}

export function hideElement(htmlElement) {
  htmlElement.classList.remove("d-block");
  htmlElement.classList.add("d-none");
}

export function showElement(htmlElement) {
  htmlElement.classList.remove("d-none");
  htmlElement.classList.add("d-block");
}
