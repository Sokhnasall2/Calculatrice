function Additionne() {
    let input1 = "";
    let input2 = "";
    let resultat = "";
    // on attache les variables à des éléments du HTML
    input1 = document.getElementById('input1').value;
    input2 = document.getElementById("input2").value;
    // et enfin le calcul
    resultat = input1 + input2;
    // On affiche
    console.log("addition !");
    console.log(resultat);
    document.getElementsByClassName("resultat").innerHTML = `${input1} + ${input2} = ${resultat} <br>`;
}
 
function Soustract() {t
      let input1 = "";
      let input2 = "";
      let resultat = "";
      document.getElementById("input1").value = input1;
      document.getElementById("input2").value = input2;
      resultat = input1 - input2;
      console.log("soustraction !");
      console.log(input1-input2);
      document.getElementsByClassName("resultat").innerHTML = `${input1} - ${input2} = ${resultat} <br>`;
}
 
// 3. Fonction multiplication
function Multiply() {
      let input1 = "";
      let input2 = "";
      let resultat = "";
      document.getElementById("input1").value = input1;
      document.getElementById("input2").value = input2;
      resultat = input1 * input2;
      console.log("multiplication !");
      console.log(input1*input2);
      document.getElementsByClassName("resultat").innerHTML = `${input1} x ${input2} = ${resultat} <br>`;
 
}
 
// 4. Fonction division
function Divide() {
      // deux variables input et une variable résultat
      let input1 = "";
      let input2 = "";
      let resultat = "";
      // on attache les variables à des éléments du HTML
      document.getElementById("input1").value = input1;
      document.getElementById("input2").value = input2;
      // et enfin le calcul
      resultat = input1 / input2;
      // On affiche
      console.log("Division !");
      console.log(resultat);
      document.getElementsByClassName("resultat").innerHTML = `${input1} / ${input2} = ${resultat} <br>`;
}