function makeCard (s) {
           let nickString = ( s.nickName ) ? `"${s.nickName}"` : '',
               spString = (s.superpower ) ? s.superpower : '',
               aiString = (s.academicinterests ) ? s.academicinterests : '',
               imageUrl = (s.picture) ? s.picture :  "http://lorempixel.com/400/400/nature/",
               imageAlt = (s.picture) ? "Image of " + (s.name ||  s.firstName || "student") : "Oops! no picture found." ,
               blurb = s.blurb
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



fetch("./allstudents.json", {headers: {
  'Content-Type': 'application/json'
  // 'Content-Type': 'application/x-www-form-urlencoded',
}})
  .then(response => {console.log(response); return response.json()})
  .then(students => {
    let result = ""
    students.forEach((s) => result += makeCard(s) )
    document.querySelector("#cardcontainer").innerHTML = result
  })
