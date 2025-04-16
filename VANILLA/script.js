import mustafaJaneRehmat from "./modules/SALAAM/mustafa_jane_rehmat.js";
import tumper_lakhon_salaam from "./modules/SALAAM/tumper_lakhon_salaam.js";
import jise_chaha_dar_pe_bulaliya from "./modules/SALAAM/jise_chaha_dar_pe_bulaliya.js";
import renderSalaam from "./modules/renderSalaam.js";

// Haqqani Talks Animation
const Haqqani = document.getElementById("Haqqani");
const Talks = document.getElementById("Talks");
const timeline = gsap.timeline();

timeline.from(Haqqani, {
  x: -200,
  duration: 0.8,
});

timeline.from(Talks, {
  opacity: 0,
  duration: 1.3,
});

timeline.to(document.querySelector("#icon"), {
  opacity: 1,
  boxShadow: "0.7vw 0.7vw 1vw #333333",
});

// output listing
export let salaamList = [
  { name: "MUSTAFA JANE REHMAT PE LAKHON SALAAM", content: mustafaJaneRehmat },
  { name: "JISE CHAHA DAR PE BULALIYA", content: jise_chaha_dar_pe_bulaliya },
  { name: "TUMPER LAKHON SALAAM", content: tumper_lakhon_salaam },
];

// onChange Handler
var output = document.querySelector("#output");

window.handleListChange = (value) => {
  console.log(value);
  output.innerHTML = null;
  var h1 = document.createElement("h1");
  h1.setAttribute("class", "headings");
  h1.innerHTML = salaamList[value].name;
  output.appendChild(h1);
  output.appendChild(renderSalaam(salaamList[value].content, 5));
};

// output animation
gsap.from(document.querySelectorAll("#output .boxes"), {
  y: -100,
  x: -70,
  opacity: 0,
  stagger: 0.2,
});

// search bar functionality
const searchBar = document.getElementById("search-bar");
// console.log(searchBar.value);
