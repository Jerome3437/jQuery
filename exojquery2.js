jQuery(function($){
    //RECUPERATION D'ELEMENTS DU DOM
    /**
     * La deuxieme facon d'utiliser la fonction
     * jQuery est de lui donner en paramètre
     * une chaine de caractère qui correspon à 
     * un sélécteur CSS
     */
    /**
      * h1 est un objet du dom augmenté par jQuery
      * h1 est un objet du dom augmenté par jQuery
      * C'est à dire que l'objet du dom a des propriétés
      * supplémentaires (comme hide et show)
      * qui sont souvent des méthodes.
      * Cet objet est appelé un objet jQuery (élément du DOM que l'on va réaugmenter par 
      * des propriétés supplémentaires comme "hide", "show" ou des méthodes)

    */

  let h1 =  jQuery("h1");
  h1.hide(1000).show(2000); //Cache le h1 en 1 seconde puis le remonte en 2 secondes
});