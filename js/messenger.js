async function loadMessengerData() {
    try {
        const res = await fetch("json/messenger.json");
        const data = await res.json();

        discussionView(data.discussions);
        messengerDetails(data.discussions);
    } catch (error) {
        console.error("Erreur lors du chargement", error);
    }
}

function discussionView(discussions) {
    const discussionContainer = document.getElementById("discussions-container");

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
        discussionContainer.appendChild(discussionElement);
    });

}

function messengerDetails(discussions) {
    const messengerContainer = document.getElementById("messenger-container");

    discussions.forEach(discussion => {
        const messengerElement = document.createElement("div");
        messengerElement.classList.add("messages");

        messengerElement.innerHTML =
            ` <div class="profil_messenger">
                        <img src="${discussion.picture}" alt="discussion_picture">
                        <p class="name_messenger">${discussion.pseudo}</p>
                    </div>
                    <div class="message">
                        <p class="name_contact">Kriss</p>
                        <p class="last_message">${discussion.last_message}</p>
                        <p date>01/01/2024 12:00</p>
                    </div>
                    `;
        messengerContainer.appendChild(messengerElement);
    })

}

document.addEventListener("DOMContentLoaded", loadMessengerData);
