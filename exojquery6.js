jQuery(function($) {
    /**
     * création d'un élément bouton 
     * que l'on place en premier fils de body
     */
let button = $("<button></button>",{
    text: "GO!",
    id: "go",
}).prependTo("body");

button.on("click", function() {
    console.log("CLic sur le bouton");
})
});