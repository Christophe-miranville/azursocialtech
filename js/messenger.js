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

        discussionElement.innerHTML = `
        <img class="picture_discussion" src="${discussion.picture}" alt="discussion_picture">
                    <div class="message">
                        <p class="name_contact">${discussion.pseudo}</p>
                        <p class="last_message short long"> ${discussion.last_message}</p>
                    </div>
                    <button><a href="messenger.html">more...</a></button>
        `;
        messengerContainer.appendChild(discussionElement);
    });

}

document.addEventListener("DOMContentLoaded", loadMessengerData);
