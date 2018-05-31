function FchoixU() {
  var choixU = Math.floor(Math.random() * 100);

  if (choixU <= 33) {
    choixU = "pierre";
  } else if (choixU >= 34 && choixU <= 66) {
    choixU = "feuille";
  } else if (choixU >= 67) {
    choixU = "ciseaux";
  }

  return choixU;

}


var scoreJ = 0;
var scoreU = 0;
var scoreN = 0;

function FchoixJ(ChoixJ) {
  console.log(ChoixJ);

  var ChoixU = FchoixU();
  console.log(ChoixU);



  if (ChoixJ == ChoixU) {
    document.getElementById("compare").textContent = "Toi : " + ChoixJ + " / Ordi : " + ChoixU;
    document.getElementById("result").textContent = "Egalité";
    document.getElementById("result").style.color = "Black";
    scoreN++;
    document.getElementById("PointN").textContent = scoreN;

  } else if (ChoixJ == "pierre" && ChoixU == "ciseaux") {
    document.getElementById("compare").textContent = "Toi : " + ChoixJ + " / Ordi : " + ChoixU;
    document.getElementById("result").textContent = "Victoire";
    document.getElementById("result").style.color = "Green";
    scoreJ++;
    document.getElementById("PointJ").textContent = scoreJ;



  } else if (ChoixJ == "feuille" && ChoixU == "pierre") {
    document.getElementById("compare").textContent = "Toi : " + ChoixJ + " / Ordi : " + ChoixU;
    document.getElementById("result").textContent = "Victoire";
    document.getElementById("result").style.color = "Green";
    scoreJ++;
    document.getElementById("PointJ").textContent = scoreJ;


  } else if (ChoixJ == "ciseaux" && ChoixU == "feuille") {
    document.getElementById("compare").textContent = "Toi : " + ChoixJ + " / Ordi : " + ChoixU;
    document.getElementById("result").textContent = "Victoire";
    document.getElementById("result").style.color = "Green";
    scoreJ++;
    document.getElementById("PointJ").textContent = scoreJ;


  } else {
    document.getElementById("compare").textContent = "Toi : " + ChoixJ + " / Ordi : " + ChoixU;
    document.getElementById("result").textContent = "Défaite";
    document.getElementById("result").style.color = "red";
    scoreU++;
    document.getElementById("PointU").textContent = scoreU;

  };
  console.log(scoreU);
  console.log(scoreJ);
  console.log(result);
};