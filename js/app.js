const upload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");

upload.addEventListener("change", () => {
    const file = upload.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        preview.src = reader.result;
        preview.style.display = "block";
    };
    reader.readAsDataURL(file);
});
