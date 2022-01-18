import initHomePage from '../src/pages/homepage'
import { initPortfolio} from '../src/pages/photographer'

const url = new URL(document.location).pathname
const urlDivided = url.split('/')
console.log(urlDivided)

if (urlDivided.indexOf('photographer.html') != -1) {
    initPortfolio()
} else {
    initHomePage()
}
  





