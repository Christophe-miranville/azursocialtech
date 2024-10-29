//Gestion des reactions de post
function setupReactions() {
//Selectionne tous les elements i qui ont la classe react.
const elements = document.querySelectorAll(".react i");

// Boucle forEach afin d'appliquer l'écouteur d'événement sur chaque element reaction
elements.forEach((element) => {
    element.addEventListener("click", () => {
        const parent = element.parentElement;
        // Boucle forEach en ciblant tous les enfants du parent element
        [...parent.children].forEach((parentChildrenElement) => {
            //Vérification que ce n'est pas l'élément cliqué afin de réinitialiser son état
            if (parentChildrenElement !== element) {
                //On enlève la classe fa-solid pour désactiver les autres réactions
                parentChildrenElement.classList.remove("fa-solid");
                //On réattribue la classe fa-regular pour remettre les autres boutons dans leur état initial
                parentChildrenElement.classList.add("fa-regular");
            }
        });
        //Mise en place d'un toggle afin de basculer entres les 2 classes pour l'élément cliqué : activation ou désactivation de la réaction en alternant les classes
        element.classList.toggle("fa-regular");
        element.classList.toggle("fa-solid");
    });
});

}