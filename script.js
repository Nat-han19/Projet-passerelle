const hiddenText = document.getElementById("hiddenText");
const button = document.getElementById("button");
const words = [
  "JAVASCRIPT",
  "PROGRAMMATION",
  "BELIEVEMY",
  "CODEPEN",
  "GIT",
  "PERSEVERANCE",
  "FLEXBOX",
  "GRID",
  "MOTIVATION",
];
const score = 10;
const letters = document.querySelectorAll("#keyboard li");
const word = words[Math.floor(Math.random() * words.length)];
let lettersFound = 0;

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", function () {
    // Retier une tentative ! 
    // À CODER

    const letter = letters[i].textContent;
    if (word.includes(letter)) {
        letters[i].classList.add("active-success");
        // Afficher les lettres qui sont trouvées dans le mot 
        // On parcours toutes les lettres du mot
        for (let i = 0; i < word.length; i++) {
            // Si la lettre cliquée est égale à la lettre parcourue grace à la boucle
            if (word[i] == letter) {
                // On va récupérer la span correspondante
                const span = document.querySelector('#hiddenText span:nth-child(' + (i + 1) + ')')
                // On change le contenu text (textContent) de la lettre 
                span.textContent = letter;
                lettersFound++;
            }
        }

        // Vérifier si l'utilisateur a gagné ?
        // Si lettersFound (lettres trouvées) est égal à la taille du mot
        if (lettersFound == word.length) {
            document.querySelector('.alert').textContent = "Vous avez gagné";
        }
    } else {
        letters[i].classList.add("active-error");

        // On ajoute un membre du pendu
        // À CODER


        // Si le nombre de chance est à 0, indiquer à l'utilisateur qu'il a perdu
        // À CODER
    }
  });
}
for (let i = 0; i < word.length; i++) {
  hiddenText.innerHTML += "<span>_</span>";
}


// Rejouer -> Au clique sur le bouton "Rejouer" -> recharger la page RELOAD
// À CODER









// Le joueur clique sur une lettre de l'alphabet.
// La lettre est présente dans le mot proposé :
// Toutes les lettres "e" (par exemple si le joueur propose "e") sont affichées sur le mot secret et le joueur passe à la manche d'après.
// La lettre est introuvable dans le mot proposé :
// Le joueur perd un coup ;
// Le motif du pendu change ;
// Si le pendu est tué, le joueur perd.
// Le joueur propose un mot.
// Le mot est bien le mot qu'il faut trouver
// Le joueur gagne
// Le mot est différent
// Le joueur perd un coup ;
// Le motif du pendu change ;
// Si le pendu est tué, le joueur perd.
