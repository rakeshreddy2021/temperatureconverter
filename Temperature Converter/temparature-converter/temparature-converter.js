const celsius = document.getElementById("celsius");
const farenheit = document.getElementById("farenheit");
const kelvin = document.getElementById("kelvin");
const rankine = document.getElementById("rankine");
const reaumur = document.getElementById("reaumur");

celsius.addEventListener("input", celciusOnInput);
farenheit.addEventListener("input", farenheitOnInput);
kelvin.addEventListener("input", kelvinOnInput);
rankine.addEventListener("input", rankineOnInput);
reaumur.addEventListener("input", reaumurOnInput);

function celciusOnInput() {
   let C = celsius.value;
   if (C !== "") {
      C = parseInt(C);
      farenheit.value = ((C * 1.8) + 32).toFixed(1);
      kelvin.value = (C + 273.15).toFixed(2);
      rankine.value = ((C * 1.8) + 491.670).toFixed(2);
      reaumur.value = (C * 0.8).toFixed(2);
   } else {
      farenheit.value = kelvin.value = rankine.value = reaumur.value = "";
   }
}


function farenheitOnInput() {
   let F = farenheit.value;
   if (F !== "") {
      F = parseInt(F);
      celsius.value = ((F - 32) / 1.8).toFixed(2);
      kelvin.value = ((F - 32) / 1.8 + 273.15).toFixed(2);
      rankine.value = (F + 459.67).toFixed(2);
      reaumur.value = ((F - 32) / 2.25).toFixed(2);
   } else {
      celsius.value = kelvin.value = rankine.value = reaumur.value = "";
   }
}

function kelvinOnInput() {
   let K = kelvin.value;
   if (K !== "") {
      K = parseInt(K);
      celsius.value = (K - 273.15).toFixed(2);
      farenheit.value = ((K - 273.15) * 1.8 + 32).toFixed(1);
      rankine.value = (K * 1.8).toFixed(2);
      reaumur.value = ((K - 273.15) * 0.8).toFixed(2);
   } else {
      celsius.value = farenheit.value = rankine.value = reaumur.value = "";
   }
}
