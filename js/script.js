//#################### Sélectionner un élément /####################//

// Avec JavaScript
document.querySelector('h1');
document.querySelectorAll('p');

// Avec jQuery
$('h1'); // on donne le sélecteur CSS
$('p'); // on sélectionne tous les paragraphes


//#################### Modifier le contenu d'un élément ####################//

// Avec JavaScript
document.querySelector('h1').textContent = 'Bonjour avec JavaScript';
// document.querySelectorAll('p').textContent = 'Ceci est un paragraphe'; impossible
document.querySelector('.maClass').innerHTML = '<p><b>HTML modifié</b></p>';

// Avec jQuery
$('h1').text('Bonjour avec jQuery');
// $('p').text('Ceci est un paragraphe');
$('.maClass').html('<p><b>HTML modifié avec jQuery</b></p>');


//#################### Modifier le style d'un élément ####################//

// Avec JavaScript
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.color; // renvoie la valeur de color
document.querySelector('#monId').className = 'important';
// Supprimer une seule classe sans supprimer les autres ? Impossible
// document.querySelectorAll('p').style.color = 'green'; // ne fonctionne pas

// Avec jQuery
$('h1').css('color', 'orange');
$('h1').css('color'); // renvoie la valeur de color
$('#monId').addClass('important'); // ajoute une classe
$('#monId').removeClass('important'); // supprime une classe
$('p').css('color', 'green');


//#################### Ajouter et supprimer un élément ####################//

// Avec JavaScript
document.querySelector('h1').prepend('Oh : ');
document.querySelector('h1').append(' !');
document.querySelectorAll('p');

// Avec jQuery
$('h1').before("<div>Hello</div>"); // Ajoute un élément avant
$('h1').after("<div>World</div>"); // Ajouter un élément après
$('h1').prepend('Oh : '); // Ajouter un élément devant
$('h1').append(' !'); // Ajouter un élément derrière
//$('p').remove();


//#################### Sélectionner et modifier les attributs d'un élément ####################//

// Avec JavaScript
document.querySelector('h1').getAttribute('class');
document.querySelector('h1').setAttribute('style', 'text-transform: lowercase');

// Avec jQuery
console.log($('h1').attr('class')); // sélectionne un attribut et retourne nom de la classe
$('h1').attr('style', 'text-transform: lowercase'); // ajoute ou modifie un attribut
$('h1').after('<a href="https://wikipedia.com">Wikipedia</a>');
$('a').attr('href', 'https://believemy.com');


//#################### Ajouter des évènements ####################//

// Avec JavaScript
// document.querySelector('h1').addEventListener('click', () => {
//   document.querySelector('h1').style.color = 'orange';
// });

// Avec jQuery
 $('h1').click(() => {
   $('h1').css('color', 'blue');
 });

// Avec JavaScript
// for(let i = 0; i < 2; i++) {
//   document.querySelectorAll('p')[i].addEventListener('click', () => {
//     document.querySelector('h1').style.color = 'orange';
//   });
// }

// Avec jQuery
$('p').click(() => {
    $('h1').css('color', 'orange');
  });
  
// Pour utiliser les mêmes évènements JavaScript (plus facile)
$('p').on('click', () => {
$('#monId').addClass('important');
});


//#################### Faire une requête AJAX ####################//

// let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
// requete.open('GET', url); // Nous récupérons juste des données
// requete.responseType = 'json'; // Nous attendons du JSON
// requete.send(); // Nous envoyons notre requête

// // Dès qu'on reçoit une réponse, cette fonction est executée
// requete.onload = function() {
//    if (requete.readyState === XMLHttpRequest.DONE) {   
//       if (requete.status === 200) {                   
//         let reponse = requete.response;
//         // console.log(reponse);
//         let temperature = reponse.main.temp;
//         let ville       = reponse.name;
//         // console.log(temperature);
//         document.querySelector('#temperature_label').textContent = temperature;
//         document.querySelector('#ville').textContent = ville;
//       }
//       else {
//         alert('Un problème est intervenu, merci de revenir plus tard.');
//       }
//     }
// }

const url = 'https://blockchain.info/ticker';

$.ajax({
  url: url,
  type: 'GET',
  dataType: 'json',
  success: (data) => {
    console.log(data);
    $('h1').text(data.EUR.last + ' euros');
  },
  error: () => {
    alert('Merci de revenir plus tard.');
  }
});

const url_bis = 'https://lesoublisdelinfo.com/api.php';

$.ajax({
  url: url_bis,
  type: 'POST',
  data: 'prenom=John&nom=Do',
  dataType: 'json',
  success: (data) => {
    $('#monId').text(data.resultat);
  },
  error: (error) => {
    console.log(error.statusText);
  }
});


//#################### Ajouter des animations ####################//

$('h1').hide();  // cacher comme   display = none (justify = hidden le cache seulement)
$('h1').show();  // afficher comme display = inline (justify = visible)

// Ne retenez pas tout, comprenez juste comment ça fonctionne, internet est fait pour les développeurs

$('p').click(() => {
  // $('h1').toggle();                    // fait un hide puis un show pour cacher puis afficher
  // $('h1').fadeOut(); // ou fadeIn()    // comme hide et show mais progressivement
  // $('h1').fadeToggle();                // comme toggle avec fadOut et fadeIn
  // $('h1').slideToggle();               // idem (se pli puis dépli) 
  // $('h1').animate({
  //   opacity: .7, // atttention seulement les propriétés qui ont une valeur numérique
  //   margin: 30
  // });
  $('h1').slideUp().slideDown().animate({ opacity: .7, margin: 30 });
  // ...
});

$('h1').slideUp().slideDown().hide().show();