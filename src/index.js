import initHomePage from '../src/pages/homepage'
import { initPortfolio} from '../src/pages/photographer'

const url = new URL(document.location).pathname
console.log(url)


if (url === '/antoinethomas_6_06122021/pages/photographer.html') {
    
    initPortfolio()
} else {
    initHomePage()
    console.log(url)
}
  





