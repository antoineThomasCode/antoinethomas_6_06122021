import initHomePage from '../src/pages/homepage'
import { initPortfolio, displayPortfolioItems, getPhotographerInfos} from '../src/pages/photographer'
const url = new URL(document.location).pathname



if (url === '/pages/photographer.html') {
    initPortfolio()
} else {
    initHomePage()
}
  





