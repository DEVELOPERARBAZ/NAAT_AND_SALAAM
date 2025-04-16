function renderSalaam(Salaam, lines) {
  const timeline = gsap.timeline();
  var output = document.createElement("div");
  if (lines >= 4) {
    for (let i = 0; i < Salaam.length; i++) {
      var box = document.createElement("div");
      box.setAttribute("class", `boxes`);

      var head = document.createElement("div");
      head.setAttribute("id", `head${i + 1}`);
      head.setAttribute("class", `heads`);
      head.innerText = `${Salaam[i].split("\n")[0].toUpperCase()}\n${Salaam[i]
        .split("\n")[1]
        .toUpperCase()}`;

      var toggle = document.createElement("button");
      toggle.setAttribute("class", `buttons`);
      toggle.setAttribute("id", `toggle${i}`);
      toggle.innerText = `Get More ${i + 1}`;
      // toggle.style.backgroundColor = "#d4af37";
      toggle.onclick = () => {
        var open = document.getElementById(`ashar${i + 1}`);
        console.log(getComputedStyle(open).getPropertyValue("display"));
        if (getComputedStyle(open).getPropertyValue("display") == "none") {
          open.style.display = "flex";
          timeline.from(open, {
            duration: 0.5,
            x: 200,
            opacity: 0,
          });
          timeline.to(open, {
            backgroundColor: "#006400",
            color: "#f8f8f0",
          });
          timeline.to(open, {
            boxShadow: "0.6vw 0.5vw 2vw 0.3vw black",
          });
        } else {
          timeline.to(open, {
            backgroundColor: "#d4af37",
            color: "black",
          });
          timeline.to(open, {
            boxShadow: "none",
          });
          open.style.display = "none";
        }
      };
      toggle.style.border = "1px solid black";
      head.appendChild(toggle);

      box.appendChild(head);

      var ashar = document.createElement("div");

      // var checkbox = document.createElement("input");
      // checkbox.setAttribute("class", `checkbox${i + 1}`);
      // checkbox.setAttribute("type", `checkbox`);
      // checkbox.setAttribute("data-id", `${i + 1}`);
      // checkbox.setAttribute("name", `checkbox`);

      ashar.setAttribute("id", `ashar${i + 1}`);
      ashar.setAttribute("class", `ashars`);
      ashar.innerText = Salaam[i].toUpperCase();

      // ashar.appendChild(checkbox);
      box.appendChild(ashar);
      output.appendChild(box);
    }
  }
  return output;
}

export default renderSalaam;
