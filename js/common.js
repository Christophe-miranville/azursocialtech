

function generateHeader() {




    //on attribue une variable à l'élement qui a pour id "header".
    let header = document.getElementById('header');

    //on fait une boucle pour nettoyer le header de tous éléments enfants.
    while (header.firstChild) {
        header.removeChild(header.firstChild)
    }

    //Factorisation du header

    //nav
    let nav = document.createElement("nav");
    header.appendChild(nav);
    nav.classList.add("navbar");

    //ol
    let menu = document.createElement("ol");
    nav.appendChild(menu);
    
    //menu_li
    let titleItem = document.createElement("li");
    titleItem.classList.add("menu-item");
    menu.appendChild(titleItem);

    //h1
    let title = document.createElement("h1");
    titleItem.appendChild(title);
    title.setAttribute("alt", "AzurSocialTech")
    title.classList.add("title");
    title.textContent = "AzurSocialTech";

    //li_home
    let homeItem = document.createElement("li");
    homeItem.classList.add("menu-item");
    menu.appendChild(homeItem);

    //link_home
    let linkHome = document.createElement("a");
    homeItem.appendChild(linkHome);
    linkHome.setAttribute("href", "index.html");
    linkHome.textContent = "Accueil";

    //li_friends
    let friendsItem = document.createElement("li");
    friendsItem.classList.add("menu-item");
    menu.appendChild(friendsItem);

    //link_friends
    let linkFriends = document.createElement("a");
    friendsItem.appendChild(linkFriends);
    linkFriends.setAttribute("href", "friends.html");
    linkFriends.textContent = "Amis";

    //li_messenger
    let messengerItem = document.createElement("li");
    messengerItem.classList.add("menu-item");
    menu.appendChild(messengerItem);

    //link_messenger
    let linkMessenger = document.createElement("a");
    messengerItem.appendChild(linkMessenger);
    linkMessenger.setAttribute("href", "messenger.html");
    linkMessenger.textContent = "Messagerie";
}

generateHeader();
