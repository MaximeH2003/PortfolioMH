// Sélection de l'élément select
const selectElement = document.getElementById('contactSelect');

// Ajout d'un écouteur d'événement pour détecter le changement de sélection
selectElement.addEventListener('change', function() {
    // Récupération de la valeur sélectionnée
    const selectedValue = selectElement.value;

    // Vérification de la valeur sélectionnée
    if (selectedValue === 'e-mail') {
        // Si l'option e-mail est sélectionnée, afficher un popup pour envoyer un e-mail
        alert('Envoyez moi un mail à mon nouvel e-mail professionnel :  Maxime.henrist2023@gmail.com');
    } else if (selectedValue === 'Linkeldin') {
        // Si l'option Linkeldin est sélectionnée, rediriger vers la section appropriée de votre site
        window.location.href = 'https://www.linkedin.com/in/maxime-henrist-8206362b1/';
    } else if (selectedValue === 'Number') {
        // Si l'option Number est sélectionnée, vous pouvez ajouter ici une action spécifique, par exemple, ouvrir une popup pour afficher le numéro de téléphone
        alert('Appelez moi, ou ajoutez moi sur WhattsApp au : 07-85-36-81-52 ');
    }
});


                                            //popupMail


// Sélection du formulaire
const emailForm = document.getElementById('emailForm');

// Ajout d'un écouteur d'événement pour détecter la soumission du formulaire
emailForm.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire (rechargement de la page)
    event.preventDefault();

    // Récupération des valeurs saisies par l'utilisateur
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Vous pouvez ajouter ici la logique pour envoyer l'e-mail, par exemple en utilisant une API ou en envoyant les données à votre serveur pour traitement
    // Pour cet exemple, nous affichons simplement les données saisies dans la console
    console.log('Adresse e-mail :', email);
    console.log('Message :', message);

    // Vous pouvez également ajouter ici une logique pour afficher un message de confirmation à l'utilisateur
    alert('Votre message a été envoyé avec succès !'); // Par exemple, affichage d'une boîte de dialogue d'alerte

    // Réinitialisation du formulaire après soumission
    emailForm.reset();
});
