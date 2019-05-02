# anyFileParser
Node.JS library that can parse text from any kind of file, eg. text, image, pdf, office files.


#### Update
* 2019/05/02 - Initial module with pdf, image, utf-8 and office files.



## Install via npm


```
npm i anyfileparser
```

----------

**Usage**
```
const anyFileParser = require('anyfileparser');

anyFileParser.parseFile("/path/to/file", function(data){
        // "data" string in the callback here is the text parsed from the file passed in the first argument above
        console.log(data)
})

```

**Example**
```
const anyFileParser = require('anyfileparser');

anyFileParser.parseFile("C:\\files\\myText.docx", function(data){
        var newText = data + "look, I can parse any file"
        callSomeOtherFunction(newText);
})

// Using relative path for file is also fine
anyFileParser.parseFile("files/myWorkSheet.ods", function(data){
        var newText = data + "look, I can parse any file"
        callSomeOtherFunction(newText);
})
```

