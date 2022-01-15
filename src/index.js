import initHomePage from '../src/pages/homepage'
import { initPortfolio, displayPortfolioItems, getPhotographerInfos} from '../src/pages/photographer'
import {displayModal, closeModal, validate, modal} from '../src/utils/contactForm'
const url = new URL(document.location).pathname



if (url === '/pages/photographer.html') {
    initPortfolio()
} else {
    initHomePage()
}
  





