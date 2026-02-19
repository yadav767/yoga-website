const ImageKit = require('@imagekit/nodejs');


const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_API_KEY,
});

async function uploadFile(file, fileName) {
    console.log(file);
    const result = await imagekit.files.upload({
        file: file.toString("base64"),
        fileName: fileName
    })
    console.log(result);
    return result
}
module.exports = uploadFile

