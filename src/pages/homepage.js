import photographerFactory from '../factories/photographer'
import { genericFetch} from '../utils/helpers';


const getPhotographers = async () => await genericFetch("../data/photographers.json", "Erreur dans la récupération des photographes");

function displayData(photographers) {
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
