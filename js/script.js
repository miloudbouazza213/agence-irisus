window.onload = function() {
    // ouverture fermeture menu
			const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon');
			menu.addEventListener('click', function () {
                body.classList.toggle('nav-active');
			});
    
    // changement de couleur:
        const switchBarre = document.getElementById('switch-barre');
        const switchCercle = document.getElementById('switch-cercle');
        

        const logo = this.document.getElementById('logo');
        const imgFond = document.getElementById('img-fond');
        const root = document.documentElement;

        const imgsReseau = this.document.querySelectorAll('.img-reseau');
        switchCercle.addEventListener('click', function (){
            // changer couleur logo et
            //changer les valeurs des variable couleurs
            if(getComputedStyle(root).getPropertyValue('--couleur-principale').includes('#000')){
                // passage en blanc
                root.style.setProperty('--couleur-principale','#fff');
                root.style.setProperty('--couleur-secondaire','#000');
                root.style.setProperty('--couleur-ombre','rgba(0,0,0,0.1)');
                logo.style.filter = 'invert(1)';
                imgFond.style.filter = 'invert(1)';
                root.style.setProperty('--inversion','1');

                 }
            else {
                // passage en noir
                root.style.setProperty('--couleur-secondaire','#fff');
                root.style.setProperty('--couleur-principale','#000');
                root.style.setProperty('--couleur-ombre','rgba(255,255,255,0.1)');
                logo.style.filter = 'invert(0)'; 
                imgFond.style.filter = 'invert(0)'; 
                root.style.setProperty('--inversion','0');
                
            }
            switchCercle.classList.toggle('switched');
            
        })

        //------------- changement de langue :

        const btnFr = document.getElementById('lang-fr');
        const btnEn = document.getElementById('lang-en');

        function changerLangue() {
            // changer couleur bouton selectionné/ non selectionné
            if(this === btnFr) {
                this.classList.remove('langue-non-selectionnee');
                btnEn.classList.add('langue-non-selectionnee');
            }
            if(this === btnEn) {
                this.classList.remove('langue-non-selectionnee');
                btnFr.classList.add('langue-non-selectionnee');
            }
        }
        btnFr.addEventListener('click',changerLangue);
        btnEn.addEventListener('click',changerLangue);
        
        
}