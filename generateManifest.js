import fs from 'fs';

function createTextFile(content, fileName) {
  const jsonData = JSON.stringify(content);
  fs.writeFileSync(fileName, jsonData);

  console.log('manifest generado con éxito.');
}
const manifest = {
  "manifest_version": 3,
  "name": "ChaWiz",
  "version": "1.0.4",
  "description": "Optimiza tu flujo con ChaWiz para tareas de manejo de caracteres. Desarrollador, escritor o editor, mejora eficiencia y calidad.",
  "permissions": [],
  "icons": {
    "128": "./logo.png"
  },
  "action": {
    "default_popup": "./index.html"
  }
};

createTextFile(manifest, './dist/manifest.json');