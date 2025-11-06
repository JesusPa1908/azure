const endpoint = "Tu endpoint aqui"; 
const key = "Tu clave aqui";

document.getElementById("imageInput").addEventListener("change", function () {
  const file = this.files[0];
  const preview = document.getElementById("preview");
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
});

document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const file = document.getElementById("imageInput").files[0];
  const resultDiv = document.getElementById("result");

  if (!file) return alert("Sube una imagen primero.");

  resultDiv.innerHTML = "Analizando imagen";

  const url = `${endpoint}vision/v3.2/analyze?visualFeatures=Tags,Description`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": file.type
      },
      body: file
    });

    const data = await response.json();
    console.log(data);

    if (data.tags && data.tags.length > 0) {
      const best = data.tags[0];
      resultDiv.innerHTML = `Parece que esto es: <b>${best.name}</b> (confianza: ${Math.round(best.confidence * 100)}%)`;
    } else {
      resultDiv.innerHTML = "No se pudo identificar el objeto";
    }
  } catch (error) {
    resultDiv.innerHTML = "Error al analizar la imagen";
    console.error(error);
  }
});
