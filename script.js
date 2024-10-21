const elements = [document.getElementById("like"),
    document.getElementById("love"),
    document.getElementById("dislike")]
    
    elements.forEach( (element) => {
        element.addEventListener("click", () => {
            const parent = element.parentElement;
    
            [...parent.children].forEach( (parentChildrenElement) => {
               if(parentChildrenElement !== element)
                {
                  parentChildrenElement.classList.add("fa-regular");
                  parentChildrenElement.classList.remove("fa-solid");
               }
           });
    
           element.classList.toggle("fa-regular");
           element.classList.toggle("fa-solid");
        });
    });