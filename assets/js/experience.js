AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Frontend Developer and Scrum Master",
    cardImage: "assets/images/experience-page/BranaTechLogo.jpg",
    place: "Brana Software Solutions.",
    time: "(July, 2024 - present)",
    desp: "<li>Worked as a junior frontend web-developer.</li> <li>Working as a scrum master</li> <li>Performing different data migration using Uipath robot.</li>",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/Toffi.jpg",
    place: "Tofi Technologies",
    time: "(November,2022 - March, 2023)",
    desp: "<li>Worked with React Js framework.</li><li>Worked on different javascript libraries</li><li>Participating on different real time projects.</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap " md:data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

