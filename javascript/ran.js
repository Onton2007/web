const { execSync } = require('child_process');

try {
  // Ejecuta el comando, por ejemplo 'ls' en Linux/Mac o 'dir' en Windows
  const resultado = execSync('libretranslate --get-api-key-link GET_API_KEY_LINK', { encoding: 'utf8' });
  console.log(resultado);
} catch (error) {  
  console.error(`Error al ejecutar: ${error.message}`);
}