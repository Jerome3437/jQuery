/*jQuery(function ($){
    //Récupération (getter) du texte de l'élément #h1
    let titre1 = $("#h1").text();
    console.log(titre1);

//Modification (setter) du texte de l'élément #h1
//$("#h1").text("Nouveau titre de niveau 1");


});
*/

jQuery(function ($){
    //Récupération (getter) du html de l'élément #h1
    let titre1 = $("#h1").html();
    console.log(titre1);

    //SETTER
    titre1 = $("#h1").html("Nouveau <br><br>HTML</br></br>");

    //CSS SETTER
    titre1.css("color", "red");

    //CSS GETTER
    let colorH1 = titre1.css("color");
    console.log(colorH1);

    //récupération (get) de l'attribut id de h1
    let id = $("#h1").attr("id");
    console.log(id);
    //Modification (set) de l'attribut "id" de h1
    $("#h1").attr("id","autre-identite");

    //Modification (setter) de la position
    //$("#autre-identite").offset({top: 100, left:300});


    $("#autre-identite").animate({top: 100, left:800}, 7000);


});