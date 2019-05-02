const fs = require('fs')
const Tesseract = require('tesseract.js');
const pdf = require('pdf-parse');
const officeParser = reqiore('officeparser');


async function parseFile(filename, callback) {
    var myExtension = filename.split('.').pop().toLowerCase();

    if(myExtension == "bmp" || myExtension == "pnm" || myExtension == "png" || myExtension == "jfif" || myExtension == "jpg" || myExtension == "jpeg" || myExtension == "tiff") {
        Tesseract.recognize(filename)
        .finally((result) => {
            callback(result);
        })
    }
    else if(myExtension == "pdf") {
        var dataBuffer = await fs.readFileSync(filename);
        
        pdf(dataBuffer)
        .then((data) => {
            callback(data.text);
        })
    }
    else if(myExtension == "docx" || myExtension == "pptx" || myExtension == "xlsx" || myExtension == "odt" || myExtension == "odp" || myExtension == "ods") {
        officeParser.parseOffice(filename, (result) => {
            callback(result);
        })
    }
    else {
        callback(await fs.readFileSync(location, 'utf-8').toString());
    }
}


module.exports.parseFile = parseFile;


