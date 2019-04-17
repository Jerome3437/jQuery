jQuery(function ($){
    //CREATION D'ELEMENTS DU DOM
    /**
     * La troisième façon d'utiliser la fonction
     * jQuery est de lui donner en paramètre
     * une chaine de caractère qui correspond à une balise HTML
     */
    //Création d'un élément p du dom
    let p = $("<p>Paragraphe crée via jQuery</>"); 
    // En javascript on aurait utilisé create.element.textContent

    //aout de p en dernier fils de body
    p.appendTo("body");

    let p2 = $("<p></p>",{
        text: "Deuxième paragraphe crée avec jQuery",
        id: "p2",
        class: "paragraphe"
    }).appendTo("body");
});