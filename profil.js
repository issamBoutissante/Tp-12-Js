var ajouterBtn = document.getElementById("ajouter");
var validerBtn = document.getElementById("valider");
var nomSociete = document.getElementById("nomSoc");
var isSociete = document.getElementById("isSoc");
var titreProfile = document.getElementById("titreProf");
var selPays = document.getElementById("pays");
var telephone = document.getElementById("tel");
var isDisponible = document.getElementById("isDis");
var tarife = document.getElementById("tarife");
var selComp = document.getElementById("comp");
var level = document.getElementById("level");
var competencesArea = document.getElementById("compArea");

ajouterBtn.onclick = () => {
  competencesArea.value += selComp.value + " " + level.value + "\n";
};
validerBtn.onclick = () => {
  var inputs = document.querySelectorAll(".required");
  console.log(inputs);
  console.log(document.getElementsByClassName(".required"));
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      return;
    }
  }
  var info = document.querySelector('input[name="sexe"]:checked').value + "\n";
  if (isSociete.checked) {
    info += nomSociete.value + "\n";
  }
  info += selPays.value + "\n";
  info += telephone.value + "\n";
  info += isDisponible.checked ? "a distance uniquement" : "disponible" + "\n";
  info += tarife.value + "\n";
  info += competencesArea.value + "\n";
  alert(info);
};
