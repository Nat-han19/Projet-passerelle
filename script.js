const hiddenText = document.getElementById('hiddenText');
const button = document.getElementById('button');
const words = ["JAVASCRIPT","PROGRAMMATION", "BELIEVEMY", "CODEPEN", "GIT", "PERSEVERANCE", "FLEXBOX", "GRID", "MOTIVATION"]
const score = 10
const letters = document.querySelectorAll('#keyboard li')
const word = words[Math.floor(Math.random()*words.length)];

for(let i = 0; i < letters.length; i++) { 
    letters[i].addEventListener('click', function() {
        const letter = letters[i].textContent;
        if (word.indexOf(letter) > -1) {
            letters[i].classList.add("active-success");  
        } else{
            letters[i].classList.add("active-error");  
        }
    })
}
for (let i = 0; i < word.length; i++) {
    hiddenText.innerHTML += "<span>_</span>"  
}



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