import initHomePage from '../src/pages/homepage'
import { initPortfolio} from '../src/pages/photographer'

const url = new URL(document.location).pathname



if (url === '/antoinethomas_6_06122021/pages/photographer.html') {
    console.log(url)
    initPortfolio()
} else {
    initHomePage()
    console.log(url)
}
  





