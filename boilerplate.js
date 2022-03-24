const fs = require("fs");
//process.argv[2];
// console.log(fs);

// fs.mkdir("dogs", {recursive: true} , (err) => {
//     if (err) throw err;
// });




const folderName = process.argv[2] || "Project";


// console.log("I execute after mkdirSynv")
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}