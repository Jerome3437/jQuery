jQuery(function ($){
console.log("dans exo 5");
//Parcours de plusieurs éléments du dom grâce à la méthode each

// Je vais chercher des éléments du dom en HTML ici mes LI dans mon UL//


$ ("ul>li").each(function(index){
    //le $(htis) correspond à chaque élément du dom (ici un li)
    console.log(index);
    console.log($(this).text());
    }); 
});
