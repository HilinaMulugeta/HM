AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Simon Game",
    cardImage: "assets/images/project-page/Simon.jpeg",
    description: "A simple game built using basic react.",
    
  },
  {
    title: "Drum-Kit",
    cardImage: "assets/images/project-page/Drum-kit.jpeg",
    description: "A drumkit that gives sound by pressing keyboard or mouse click that developed by Js, Bootstrap",
   
  },
  // {
  //   title: "Flappy Bird",
  //   cardImage: "assets/images/project-page/flappybird.png",
  //   description: "Flappy bird game built using React.js",
  //   tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  {
    title: "Hospital management system",
    cardImage: "assets/images/project-page/HMS.jpeg",
    description: "Overall Hospital management system built using react ,basic redux.",
    
  },
  {
    title: "Love Calculator",
    cardImage: "assets/images/project-page/LoveCalculator.jpeg",
    description: "Simple and funny love calculator based on Your name, built using JavaScript and bootstrap.",
    
  },
  // {
  //   title: "Poker Game",
  //   cardImage: "assets/images/project-page/poker.jpg",
  //   description: "Poker game built using typescript.",
  //   tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      " Tic Tac Toe Game using React.",
    
  },
  {
    title: "Online COC registration",
    cardImage: "assets/images/project-page/COC.jpeg",
    description: "COC registration dashboard portal system built using Next.js.",
   
  },
  {
    title: "Mini Form Fill Robot",
    cardImage: "assets/images/project-page/robot.jpeg",
    description:
      "Mini Form Fill Robot is built using UIPATH.",
   
  },
  // {
  //   title: "Battery Life Calculator",
  //   cardImage: "assets/images/project-page/battery.png",
  //   description: "Built battery life calculator using Python.",
  //   tagimg:
  //     "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Movie Recommendation System",
  //   cardImage: "assets/images/project-page/movie-recommendation.jpeg",
  //   description: "Built using Tensorflow.",
  //   tagimg:
  //     "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Music Recommendation Engine",
  //   cardImage: "assets/images/project-page/music.jpg",
  //   description: "Built using Python.",
  //   tagimg:
  //     "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
  //   Previewlink: "",
  //   Githublink: "",
  // },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description}) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title">${title}</h1>
                
                </div>
            <div class="menu-content "><br>
${description}
            </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
