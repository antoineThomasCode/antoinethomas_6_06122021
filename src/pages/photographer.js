import mediaFactory from '../factories/medias'
import photographerFactory from '../factories/photographer'
import {displayModal, closeModal, validate, modal} from '../utils/contactForm'


// catch id in URL
let params = new URL(document.location).searchParams
let photographerInfos
const photographerId = params.get('id')
let userLikesCounter = 0
const titlesForGallery = []
const srcForGallery = []



// connect to json file
async function getPhotographerInfos() {
  try {
    const res = await fetch('https://antoinethomascode.github.io/antoinethomas_6_06122021/data/photographers.json')

    return res.json()
  } catch {
    console.log('erreur')
  }
}
// display items in page or console log an error
async function displayPortfolioItems(photographers) {
  //catch photographer array

  if (photographerId) {
    //display items in header
     photographerInfos = photographers.find(
      (photographer) => photographer.id === parseInt(photographerId),
    )
    const photographerModel = photographerFactory(photographerInfos)
    const userInfosElements = photographerModel.getPortoflioItems()
    return photographerInfos.name
  } else {
    console.log(
      "Les information sur votre photographe n'ont pas pu être chargé",
    )
  }
}
async function displayDataUser(medias) {
  const url = new URL(document.location)
  const portfolioMain = document.getElementById('main')
  const section = document.createElement('section')
  const sorterContainer = document.createElement('div')
  const p = document.createElement('p')
  const ul = document.createElement('ul')
  const byPopularity = document.createElement('li')
  const byTitle = document.createElement('li')
  
  byPopularity.id = 'byPopularity'
  byPopularity.tabIndex = 0
  byTitle.id = 'byTitle'
  byTitle.tabIndex = 0
  section.id = 'mediaContainer'
  ul.tabIndex = 0           
  // create sorter for media display --> using URL  params
  sorterContainer.id = 'sorter'
  p.textContent = 'Trier par'
  byPopularity.innerHTML = `<a href="${url.origin}${url.pathname}?id=${photographerId}&sortBy=popularity">Popularité</a>`
  byTitle.innerHTML = `<a href="${url.origin}${url.pathname}?id=${photographerId}&sortBy=title">Titre</a>`


  portfolioMain.appendChild(section)
  mediaContainer.appendChild(sorterContainer)
  sorterContainer.append(p, ul)
  ul.append(byPopularity, byTitle)
  if (url.searchParams.get('sortBy') === 'popularity') {
    medias = medias.sort(function (a, b) {
      return b.likes - a.likes
    })
    byPopularity.style.display = 'none'
    byTitle.style.display = 'flex'
  }
  if (url.searchParams.get('sortBy') === 'title') {
    medias = medias.sort(function SortArray(x, y) {
      if (x.title < y.title) {
        return -1
      }
      if (x.title > y.title) {
        return 1
      }
      return 0
    })
    byTitle.style.display = 'none'
    byPopularity.style.display = 'flex'
  }
  // display media with media factory
  medias.forEach((media) => {
    if (media.photographerId == photographerId) {
      let mediaModel = mediaFactory(media)
      const userDataDOM = mediaModel.getMediaItems()
    }
  })
}
async function displayLikes(medias) {
  const stickyUserInfos = document.getElementById('sticky-user-infos')
  const userLikes = document.createElement('span')
  medias.forEach((media) => {
    if (media.photographerId == photographerId) {
      userLikesCounter += media.likes
    }
    userLikes.textContent = userLikesCounter
    const heartIcon = document.createElement('i')
    heartIcon.classList.add('fas')
    heartIcon.classList.add('fa-heart')
    userLikes.appendChild(heartIcon)
    stickyUserInfos.appendChild(userLikes)
    const formTitle = document.getElementById('formTitle')
    formTitle.innerHTML = `Contactez-moi ${photographerInfos.name}`
  })
}
// contact form in portfolio --> photographers 




// call functions to display data in page
async function initPortfolio() {
  const { photographers, medias } = await getPhotographerInfos()
  const openContactFormBtn = document.getElementById('open_contact_form')
  const closeContactFormBtn = document.getElementById('close_contact_form')
  const submitForm = document.getElementById('contact_form')
 
  openContactFormBtn.addEventListener('click', displayModal)
  closeContactFormBtn.addEventListener('click', closeModal)
  document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 27) {
     closeModal()
    }
    // faire un if avec checker if it's a media or not 
    
  });
  submitForm.addEventListener('click', function(e){
   e.preventDefault()
   const submitFormBtn = document.getElementById('submit_contact_form')
   submitFormBtn.addEventListener('click', validate)
 })
  displayPortfolioItems(photographers)
  displayDataUser(medias)
  displayLikes(medias)
}



export  {initPortfolio, displayPortfolioItems, getPhotographerInfos, photographerInfos, titlesForGallery, srcForGallery}

