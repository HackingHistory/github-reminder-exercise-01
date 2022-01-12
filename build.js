// require modules

const path = require('path'),
      fs=require('fs'),
      // bring this back later if we want
      // urlExists = require('url-exists'),
      marked = require('marked');

// some paths
// json directory
const jsonDir = path.join("", "json-files")
      // images dir
      // imagesDir = path.join("", "images")
      // html start
      // start = fs.readFileSync("start.html", {encoding:'utf8', flag:'r'}),
      // end = fs.readFileSync("end.html", {encoding:'utf8', flag:'r'})

// helper function: test if URL exists
// not using for now -- reducing dependency chain
// const urlVal = async(data) => {
//   try {
//     const result = await urlExists(data);
//     console.log(`Result for ${data} is ${result}`);
//   } catch(err) {
//     console.log(err);
//   }
// };


const reducer = (prev, current) => prev + "," + current

function gatherJSON (dir) {
  let allFiles = fs.readdirSync(dir),
      allContents = allFiles.map(name => JSON.parse(fs.readFileSync(path.join(dir,name), {encoding:'utf8'})))
  
  console.log (allContents)
  return allContents
}

function parseBlurb (file) {
  let text = fs.readFileSync(path.join(jsonDir,file), {encoding:'utf8', flag:'r'})
  return marked.parse(text)
}

let students = gatherJSON(jsonDir),
    updated = students.map (s => {s.blurb = parseBlurb(s.blurb); return s}) 
    //cards = students.map(s => makeCard(s)).join("\n");
console.log(updated)
fs.writeFileSync("docs/allstudents.json", JSON.stringify(updated))

// moved images to docs for simplicity
// fs.readdirSync("images").forEach(i => fs.copyFile(path.join(imagesDir, i), path.join("docs/images", i), () => {}))
// console.log(makeCard(JSON.parse(fs.readFileSync('json-files/matt.json'))))
// console.log(cards.join("\n"))
