async function loadJSONData() {
    try {
        //Récupération des données depuis le fichier JSON
        const res = await fetch("json/posts.json");
        const data = await res.json();

        //Affiche les posts selon le tableau des posts
        postsView(data.posts);
        //Ajout des écouteurs d'évenements à la suite de l'affichage des posts
        setupReactions();

        //gestion des erreurs de chargement
    } catch (error) {
        console.error("Erreur lors du chargement", error);
    }
}

function postsView(posts) {
    //Selectionne le conteneur des posts dans le DOM
    const postsContainer = document.getElementById("posts-container");

    //Pour chaque objet du tableau on crée des éléments HTML
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
        <div>
                        <div class="top_post">
                            <img class="picture_author" src="${post.author_picture}" alt="picture_author">
                            <div>
                                <h4 class="name_author">${post.author}</h4>
                                <em class="descr_post">${post.description}.</em>
                            </div>
                        </div>
                        <img class="picture_post" src="${post.post_picture}" alt="picture_post">
                        <div class="bottom_post">

                            <div class="react">
                                <i id="like" class="fa-regular fa-thumbs-up"></i>
                                <i id="dislike" class="fa-regular fa-thumbs-down"></i>
                                <i id="love" class="fa-regular fa-heart"></i>
                            </div>

                            <div id="comments_container-${index}" class="comments-container"></div>

                            <input id="pseudo-${index}" class="pseudo_input" placeholder=" saisir votre pseudo"></input>
                            <textarea id="comment-${index}" class="comment_input" placeholder="Commenter ici" name="comment_post"></textarea>
                            <button class="comm_button" onclick="AddComm(${index})"> Ajouter le commentaire </button>
                        </div>
                    </div>
        `;

        //Ajout d'un element post au parent conteneur de posts
        postsContainer.appendChild(postElement);
    });
}

function AddComm(index) {
    const pseudoInput = document.getElementById(`pseudo-${index}`);
    const commentInput = document.getElementById(`comment-${index}`);
    const commentsContainer = document.getElementById(`comments_container-${index}`);

    const new_comm = document.createElement("p");
    new_comm.classList.add("comment");

    if (pseudoInput.value.trim() && commentInput.value.trim()) {
        new_comm.innerHTML = `<strong>${pseudoInput.value}</strong>: ${commentInput.value}`
        commentsContainer.appendChild(new_comm);
        pseudoInput.value = "";
        commentInput.value = "";
    } else {
        alert("Veuillez remplir les deux champs obligatoires pour l'ajout d'un commentaire")
    }


}

//demande à loadJSONdata d'attendre le chargement du DOM pour s'éxécuter
document.addEventListener("DOMContentLoaded", loadJSONData);
