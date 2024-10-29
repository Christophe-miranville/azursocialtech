async function loadMessengerData() {
    try {
        const res = await fetch("json/messenger.json");
        const data = await res.json();

        messengerView(data.discussions);
    } catch (error) {
        console.error("Erreur lors du chargement", error);
    }
}

function messengerView(discussions) {
    const messengerContainer = document.getElementById("discussions-container");

    discussions.forEach(discussion => {
        const discussionElement = document.createElement("div");
        discussionElement.classList.add("discussion");

        discussionElement.innerHTML=`
        <img class="picture_discussion" src="${discussion.picture}" alt="discussion_picture">
                    <div>
                        <p class="name_contact">${discussion.pseudo}</p>
                        <p>${discussion.last_message}</p>
                    </div>
                    <button>more...</button>
        `;
        
        messengerContainer.appendChild(discussionElement);
    });

}

document.addEventListener("DOMContentLoaded", loadMessengerData);
