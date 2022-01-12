// require modules

const path = require('path'),
      fs=require('fs'),
      // util=require('util'),
      urlExists = require('url-exists'),
      marked = require('marked');

// some paths
// json directory
const jsonDir = path.join("", "json-files"),
      // images dir
      imagesDir = path.join("", "images")
      // html start
      start = fs.readFileSync("start.html", {encoding:'utf8', flag:'r'}),
      end = fs.readFileSync("end.html", {encoding:'utf8', flag:'r'})

// helper function: test if URL exists
const urlVal = async(data) => {
  try {
    const result = await urlExists(data);
    console.log(`Result for ${data} is ${result}`);
  } catch(err) {
    console.log(err);
  }
};


const reducer = (prev, current) => prev + "," + current

function gatherJSON (dir) {
  let allFiles = fs.readdirSync(dir),
      allContents = allFiles.map(name => JSON.parse(fs.readFileSync(path.join(dir,name))))
  
  console.log (allContents)
  return allContents
}

function parseBlurb (file) {
  let text = fs.readFileSync(path.join(jsonDir,file), {encoding:'utf8', flag:'r'})
  return marked.parse(text)
}

function makeCard (s) {
           let nickString = ( s.nickName ) ? `"${s.nickName}"` : '',
               spString = (s.superpower ) ? s.superpower : '',
               aiString = (s.academicinterests ) ? s.academicinterests : '',
               imageUrl = (s.picture) ? s.picture :  "http://lorempixel.com/400/400/nature/",
               imageAlt = (s.picture) ? "Image of " + (s.name ||  s.firstName || "student") : "Oops! no picture found." ,
               blurb = (s.blurb && fs.existsSync(path.join(jsonDir, s.blurb))) ? parseBlurb(s.blurb) : "<em> no description found</em>"
           //console.log("nick is " + nickString);
           let card = `
  <section class="card"  > 
  <header class="card-header">
    ${s.name}
  </header>
  <img class="profile-image"  src="${imageUrl}" alt="${imageAlt}" title="${imageAlt}">
  <section class="card-body">
    <p class="card-text"><b>I'm interested in these periods:</b> ${s.periods.join(", ")}</p>
    <p class="card-text"><b>...and these parts of the world:</b> ${s.regions.join(", ")}</p>
    <p class="card-text"><b>...and these kinds of history:</b> ${s.styles.join(", ")}</p>
    <figure>
    <figure-caption>Tech Skills</figure-caption>
    <div class="progress-bar">
				<span class="progress-bar-fill" style="width: ${s.techskills * 20}%;"></span>
			</div>
    </figure>
    ${blurb}
  </section> <!-- caqrd-body -->
    <footer class="card-footer text-center">
    <a href="https://github.com/${s.github}" class="button">Github</a>
    <a href="mailto:${s.email}" class="button">Email</a>
    </footer>  <!-- card-footer -->
  </section>  <!-- card -->

`;

  return card
}

let students = gatherJSON(jsonDir),
    cards = students.map(s => makeCard(s)).join("\n");

fs.writeFileSync("docs/index.html", start + cards + end)
fs.readdirSync("images").forEach(i => fs.copyFile(path.join(imagesDir, i), path.join("docs/images", i), () => {}))
// console.log(makeCard(JSON.parse(fs.readFileSync('json-files/matt.json'))))
// console.log(cards.join("\n"))
