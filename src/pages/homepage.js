import photographerFactory from '../factories/photographer'

async function getPhotographers() {
    try {
        const response = await fetch('/data/photographers.json');
        return await response.json();
        
    } catch {
       console.log('erreur de la requête')
    }
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        const photographerHeader = document.querySelector('.photograph-header')
        photographersSection.appendChild(userCardDOM);
    });
};

async function initHomePage() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};



export default initHomePage
