const { exec } = require('child_process');

exec('libretranslate --get-api-key-link GET_API_KEY_LINK');


exec('node test2.js', (error, stdout, stderr) => {
    if (error) {
        console.error("Error:", error.message);
        return;
    }
    console.log(stdout);
});