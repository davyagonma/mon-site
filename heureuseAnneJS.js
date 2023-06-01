/**
 * Transforme la première lettre en majuscule
 * @param {string} text
 * @returns {string}
 */
var ucFirst = (text) => {
  return text.trim().charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Les citations et phrases
 * @type {Object}
 */
const bases = {
  love: [
    "Argent, plein de gràce ",
    "Bonheur, remplit votre maison",
    "Couronne, ta vie",
    "Davy vous aime",
    "Elevé, tu seras elevé😎",
    "Force, à vous",
    "Guérison de vos anciennes blessures",
    "Honneur, ta maison et ton couple sera honoré",
    "Ignorer, le malheur et l'echec vous ignore " ,
    "Jesus t'aime",
    "Kyrielles seront vos atouts",
    "L'amitié de joies et réduction de vos peines.",
    "Mieux, vous allez donner beaucoup que recevoir des autres ",
    "Nourriture ne manquera pas chez vous",
    "On va vous chercher du mal et on va pas vous trouver ",
    "Protéger par le Psaumes 91",
    "Que la paix règne chez vous",
    "Reflexion adéquate aux problèmes pour de bonnes solutions",
    "Sécurité absolue sur votre vie",
    "Tout mes meiileurs et sincères voeux",
    "Une vie remplit amour",
    "Vous demeurerez genial",
    "Waouh vous êtes l'homme de l'année ?  ",
    "X Davy vous aime",
    "Y aura-t-il quelqu'un benit plus que vous en 2023? Jamais",
    "Zelé pour toujours"
  ],
};

/**
 * Liste, paragraphe de l'acrostiche
 */
const liste = document.getElementById("liste");
liste.innerHTML ="<p style='margin:1rem 0;'>Mes souhaits pour vous s'afficheront ici</p>";

/**
 * @type {String[]}
 */
var results = [];

let category = "love";


/**
 * @type {Array}
 */
const categories = Object.keys(bases);

if (categories.includes(category)) {
  /**
   * @type {String []}
   */
  var loves_sentences = bases[category];
}

/*
* Lorsqu'on clique sur géner
*/

document.getElementById("submit").onclick = (e) => {

  /**
   * @type {string}
   */
  let input = document.querySelector("#name").value;

  if (input.length>0) {
      liste.innerHTML=""
  }
  document.querySelector("#name").placeholder = input;

  for (let i = 0; i < input.length; i++) {
    var c = input.charAt(i).toUpperCase();

    const acr = loves_sentences.map((text) => ucFirst(text));
    acr.forEach(function (text, index) {
      if (text.startsWith(c)) {
        results.push(text);
      }
    });
  }

  results.forEach(function (text, ind) {
    let li = document.createElement("li");
    li.innerHTML =
      '<span class="first-caract">' +
      text.charAt(0) +
      "</span>" +
      text.slice(1) +
      " <b>;</b>";
    liste.append(li);
   
  });
  results= [];
};
