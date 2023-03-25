// option -1  : directly set on the html tag
//<button onclick="document.body.style.backgroundColor='yellow'">Make yellow</button>
// OPtion : 2 add onclick function on the html
// <button onclick="makeRed()">Make Red</button> ::: useable 
function makeRed() {
  document.body.style.backgroundColor = "red";
}
//  option 3 :
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
//   option 3 : Another
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
// OPtion -4 :
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// Option 4 : another

const makeGrenButton = document.getElementById("make-green");
makeGrenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

//   Option -4 : final : important we will use sometime
document.getElementById("make-goldenrod").addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
