import fs from 'fs';

function createTextFile(content, fileName) {
  const jsonData = JSON.stringify(content);
  fs.writeFileSync(fileName, jsonData);

  console.log('manifest generado con éxito.');
}
const manifest = {
  "manifest_version": 3,
  "name": "ChaWiz",
  "version": "1.0",
  "description": "Con ChaWiz, optimiza tu flujo de trabajo y ahorra tiempo al realizar tareas relacionadas con el manejo de caracteres. Ya sea que seas un desarrollador, un escritor o un editor de contenido, ChaWiz es una herramienta versátil que te ayudará a mejorar la eficiencia y la calidad de tus textos.",
  "permissions": ["contextMenus"],
  "icons": {
    "128": "./logo.png"
  },
  "action": {
    "default_popup": "./index.html"
  },
  "background": {
    "service_worker": "./contextMenu.js"
  }
};

createTextFile(manifest, './dist/manifest.json');