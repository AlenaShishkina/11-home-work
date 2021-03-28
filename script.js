var classArray = ["firstClass", "SecondClass", "ThirdClass", "firstClass", "SecondClass", "ThirdClass"];
var xx = document.getElementById("square");

function setColorClass(id) {
  let elem = document.getElementById(id);
  if (!elem.hasAttribute("class")) {
    elem.setAttribute("class", classArray[0]);
    classArray.shift();
    let num = 6 - classArray.length;
    elem.setAttribute("number", num);
    elem.innerHTML = num;
  }
}
for (let i = 0; i < 6; i++) {
  let btn = document.createElement("BUTTON");
  btn.setAttribute("id", i);
  btn.setAttribute("onclick", "setColorClass('" + i + "')");
  xx.appendChild(btn);

}
