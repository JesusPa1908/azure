const endpoint = "Tu endpoint aqui";
const key = "Tu clave aqui";

async function procesarImagen() {
  const archivo = document.getElementById("imagen").files[0];
  if (!archivo) {
    alert("Por favor, selecciona una imagen primero.");
    return;
  }

  const url = endpoint + "vision/v3.2/ocr?language=unk&detectOrientation=true";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": key,
      "Content-Type": "application/octet-stream"
    },
    body: await archivo.arrayBuffer()
  });

  const data = await response.json();

  let textoExtraido = "";
  data.regions?.forEach(region => {
    region.lines.forEach(linea => {
      linea.words.forEach(palabra => {
        textoExtraido += palabra.text + " ";
      });
      textoExtraido += "\n";
    });
  });

  document.getElementById("resultado").value = textoExtraido || "No se detectó texto.";
}

document.getElementById('imagen').addEventListener('change', handleFileSelect);
function descargarTexto() {
  const texto = document.getElementById('resultado').value;
  if (!texto || texto === 'No se detectó texto.') {
    alert('No hay texto para descargar. Primero analiza una imagen.');
    return;
  }

  const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'texto_extraido.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


function handleFileSelect(e) {
  const file = e.target.files && e.target.files[0];
  const preview = document.getElementById('preview');
  if (!preview) return;

  const placeholder = preview.querySelector('.preview__placeholder');
  if (placeholder) placeholder.style.display = '';

  const existing = document.getElementById('preview-img');
  if (existing) {
    if (existing.src && existing.src.startsWith('blob:')) {
      try { URL.revokeObjectURL(existing.src); } catch (err) {}
    }
    existing.remove();
  }

  if (!file) {
    if (placeholder) placeholder.style.display = '';
    return;
  }

  const img = document.createElement('img');
  img.id = 'preview-img';
  img.alt = 'Imagen seleccionada';
  img.className = 'preview-img';
  img.style.maxWidth = '100%';
  img.style.maxHeight = '100%';
  img.style.objectFit = 'contain';

  img.onload = () => {
    img.classList.add('loaded');
    if (placeholder) placeholder.style.display = 'none';
  };

  img.onerror = () => {
    if (placeholder) {
      placeholder.style.display = '';
      placeholder.textContent = 'No se pudo cargar la imagen.';
    }
    img.remove();
  };

  img.src = URL.createObjectURL(file);
  preview.appendChild(img);
}
