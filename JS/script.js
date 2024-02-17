/*          BOUTON REMONTER SMOOTH          */

const btn = document.querySelector('.btnTop');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})


/*          comment          */
