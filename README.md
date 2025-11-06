# Proyecto Azure: Chatbot Conversacional, Clasificador de Imágenes y OCR

Este repositorio reúne **tres mini aplicaciones web** que utilizan servicios de **Azure Cognitive Services** para demostrar capacidades de interacción conversacional, reconocimiento visual y extracción automática de texto desde imágenes.

---

## Aplicaciones Incluidas

| **Chatbot Conversacional** | Responde preguntas sobre PlayStation con mensajes humanizados.
| **Clasificador de Imágenes** | Identifica objetos dentro de imágenes y muestra nivel de confianza.
| **OCR - Extracción de Texto** | Extrae texto desde imágenes y permite descargarlo como `.txt`.

> **Nota:** El Clasificador y el OCR utilizan **el mismo recurso de Azure Computer Vision**, por lo que **no es necesario crear recursos adicionales**.

---

## Objetivos del Proyecto

1. **Chatbot**  
   Levantar un chatbot capaz de mantener una conversación sobre soporte de PlayStation con respuestas naturales y comprensibles.

2. **Clasificador de Imágenes**  
   Reconocer automáticamente objetos en imágenes, útil para inventarios o identificación de productos.

3. **OCR**  
   Convertir texto presente en imágenes en texto digital editable y exportable.

---

## Cómo Ejecutar

Solo abre los siguientes archivos en tu navegador:

| Chatbot | `chatbot/index.html` |
| Clasificador de Imágenes | `clasificador-imagenes/index.html` |
| OCR | `computervision/index.html` |

Para mejor funcionamiento, se recomienda usar **Live Server** en Visual Studio Code.

---

## Configuración de Claves

Puedes usar este proyecto de dos formas:

| Opción | Descripción |
|-------|-------------|
| **A Usar tus propias claves** | Obtén tus claves desde Azure Portal y reemplázalas en los archivos indicados. |
| **B Usar las claves compartidas** | Si este repositorio fue proporcionado en clase, revisa el archivo `claves.txt` donde están documentadas las claves de prueba. |

> ⚠️ **Importante:** No publiques `claves.txt` ni tus claves personales en GitHub público.

---

### 1 Chatbot Conversacional

Editar el archivo:

`chatbot/index.html`

```html
<iframe 
  src="https://webchat.botframework.com/embed/TU-BOT?s=TU-SECRET"
  class="chat-iframe"
  title="Chatbot">
</iframe>

> **Dónde obtener la clave:**
> - Ve a [Azure Portal](https://portal.azure.com/)
> - Busca tu recurso de **Bot Service**
> - En **Configuración** > **Canales**, haz clic en **Web Chat**
> - Copia el **Secreto** y reemplaza `TU-SECRET`
> - El nombre del bot (`TU-BOT`) suele ser el nombre del recurso en Azure

---

### 2 Clasificador de Imágenes

Editar el archivo:

`clasificador-imagenes/script.js`

Reemplaza `TU-ENDPOINT` y `TU-CLAVE-DE-COMPUTER-VISION` con tus propias claves:

```javascript
const endpoint = "https://TU-ENDPOINT.cognitiveservices.azure.com/";
const key = "TU-CLAVE-DE-COMPUTER-VISION";
```
---

### 3 OCR (Reconocimiento de Texto)

Editar el archivo:

`computervision/script.js`

Reemplaza `TU-ENDPOINT` y `TU-CLAVE-DE-COMPUTER-VISION` con tus propias claves:

```javascript
const endpoint = "https://TU-ENDPOINT.cognitiveservices.azure.com/";
const key = "TU-CLAVE-DE-COMPUTER-VISION";
```

> **Nota:** Si ya configuraste el Clasificador de Imágenes, puedes usar **el mismo** `endpoint` y `key` que usaste en ese proyecto, ya que ambos usan el mismo servicio de Computer Vision.
