const preview = document.getElementById("imgid");
const fileInput = document.querySelector("input[type=file]");

fileInput.addEventListener("change", previewFile);

function previewFile() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
      document.getElementById("output").value = reader.result
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

