// catch id in URL
let params = new URL(document.location).searchParams
const photographerId = params.get('id')
let userLikesCounter = 0

const srcForGallery = []
const titlesForGallery = []

// connect to json file
async function getPhotographerInfos() {
  try {
    const response = await fetch('../data/photographers.json')

    return await response.json()
  } catch {
    console.log('erreur de la requête')
  }
}
// display items in page or console log an error
async function displayPortfolioItems(photographers) {
  //catch photographer array

  if (photographerId) {
    //display items in header
    photographerInfos = photographers.find(
      (photographer) => photographer.id == photographerId,
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

  section.id = 'mediaContainer'
  // create sorter for media display --> using URL  params
  sorterContainer.id = 'sorter'
  p.textContent = 'Trier par'
  byPopularity.innerHTML = `<a href="${url.origin}${url.pathname}?id=${photographerId}&sortBy=popularity">Popularité <i class="fas fa-chevron-right"></i></a>`
  byTitle.innerHTML = `<a href="${url.origin}${url.pathname}?id=${photographerId}&sortBy=title">Titre <i class="fas fa-chevron-right"></i></a>`

  console.log(url)

  portfolioMain.appendChild(section)
  mediaContainer.appendChild(sorterContainer)
  sorterContainer.append(p, ul)
  ul.append(byPopularity, byTitle)
  if (url.searchParams.get('sortBy') == 'popularity') {
    medias = medias.sort(function (a, b) {
      return b.likes - a.likes
    })
  }
  if (url.searchParams.get('sortBy') == 'title') {
    medias = medias.sort(function SortArray(x, y) {
      if (x.title < y.title) {
        return -1
      }
      if (x.title > y.title) {
        return 1
      }
      return 0
    })
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

// call functions to display data in page
async function init() {
  const { photographers, medias } = await getPhotographerInfos()
  displayPortfolioItems(photographers)
  displayDataUser(medias)
  displayLikes(medias)
}

init()
