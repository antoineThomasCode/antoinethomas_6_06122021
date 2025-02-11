import {photographerInfos, titlesForGallery, srcForGallery} from '../pages/photographer'

function mediaFactory(data) {
  const {  image, video, title, likes } = data

  const mediaPathImg = `../assets/images/${photographerInfos.name}/${image}`
  const mediaPathVideo = `../assets/images/${photographerInfos.name}/${video}`
  let path = ''
  let index
  const article = document.createElement('article')
  const h2 = document.createElement('h2')
  const containerMedia = document.createElement('div')
  let mediaToDisplay
  let lightboxIsOpen = false 
  

  // *** tools to display medias in photographers' portfolio *** //
   // button Next Event
   function buttonNextLightbox() {
    let regex = /\.jpg/i
    let newMedia
    index = titlesForGallery.indexOf(h2.innerHTML)
    
    if (index === (titlesForGallery.length - 1)) {
      index = 0
    } else {
      index++
    }
    h2.textContent = titlesForGallery[index]
    if (regex.test(srcForGallery[index])) {
      newMedia = document.createElement('img')
      newMedia.setAttribute('src', srcForGallery[index])
      newMedia.setAttribute('alt', titlesForGallery[index])
      containerMedia.removeChild(mediaToDisplay)
    } else {
      newMedia = document.createElement('video')
      newMedia.setAttribute('src', srcForGallery[index])
      newMedia.setAttribute('alt', titlesForGallery[index])
      newMedia.setAttribute('type', 'video/mp4')
      newMedia.setAttribute('autoplay', 'autoplay')
      newMedia.setAttribute('preload', 'auto')
      newMedia.setAttribute('controls', '')
      newMedia.setAttribute('loop', '')
      containerMedia.removeChild(mediaToDisplay)
    }
    mediaToDisplay = newMedia
    containerMedia.appendChild(mediaToDisplay)
  }

   // button Prev Event

   function buttonPrevLigthbox () {
    let regex = /\.jpg/i
    let newMedia
    let index = titlesForGallery.indexOf(h2.innerHTML)
    
    if (index === 0) {
      index = titlesForGallery.length - 1
    } else {
      index--
    }
    h2.textContent = titlesForGallery[index]
    if (regex.test(srcForGallery[index])) {
      newMedia = document.createElement('img')
      newMedia.setAttribute('src', srcForGallery[index])
      newMedia.setAttribute('alt', titlesForGallery[index])
      containerMedia.removeChild(mediaToDisplay)
    } else {
      newMedia = document.createElement('video')
      newMedia.setAttribute('src', srcForGallery[index])
      newMedia.setAttribute('alt', titlesForGallery[index])
      newMedia.setAttribute('type', 'video/mp4')
      newMedia.setAttribute('autoplay', 'autoplay')
      newMedia.setAttribute('preload', 'auto')
      newMedia.setAttribute('controls', '')
      newMedia.setAttribute('loop', '')
      containerMedia.removeChild(mediaToDisplay)
    }
    
    mediaToDisplay = newMedia
    containerMedia.appendChild(mediaToDisplay)
  
  }

  function createImage() {
    //setting image
    const img = document.createElement('img')
    img.setAttribute('src', mediaPathImg)
    img.setAttribute('alt', `${title} `)
    path = mediaPathImg

    // insert items in articles
    article.appendChild(img)
    img.addEventListener('click', createLightbox)
    img.tabIndex = 0
    srcForGallery.push(mediaPathImg)
  }
  function createVideo() {
    // create video  and setting path
    const video = document.createElement('video')
    video.setAttribute('src', mediaPathVideo)
    video.setAttribute('alt', `${title}`)
    video.setAttribute('type', 'video/mp4')
    video.setAttribute('loop', '')
    video.setAttribute('muted', '')
    video.addEventListener('click', createLightbox)
    video.tabIndex = 0

    path = mediaPathVideo
    srcForGallery.push(mediaPathVideo)

    // insert video in article
    article.appendChild(video)
  }
  function getMediaItems() {
    // select portfolio items container
    const section = document.getElementById('mediaContainer')

    // create and setting items
    // container for image, like and title

    const infosItemsContainer = document.createElement('div')
    const h3 = document.createElement('h3')
    const likesPerItem = document.createElement('span')
    const likeIcon = document.createElement('i')
    let isLiked = false

    // setting title
    h3.textContent = title

    likesPerItem.textContent = likes
    likesPerItem.style.cursor = 'pointer'
    likesPerItem.appendChild(likeIcon)
    likeIcon.classList.add('fas')
    likeIcon.classList.add('fa-heart')
    titlesForGallery.push(title)
    // create image or video
    if (image) {
      // create image and setting path
      createImage()
    } else {
      createVideo()
    }
    infosItemsContainer.addEventListener('click', function() {
      if (!isLiked) {
        isLiked = true
        likesPerItem.textContent = likes + 1
        
        likesPerItem.appendChild(likeIcon)
      }
    })
    //insert items in section container
    
    article.addEventListener('keydown', (e) => {
      if (e.keyCode === 13){
        createLightbox()
    }
    });
    article.append(infosItemsContainer)

    infosItemsContainer.append(h3, likesPerItem)
    section.appendChild(article)
  }
  // ** tools to display media in the lightbox //

  // Lightbox creation //
  function createLightbox() {
    lightboxIsOpen = true
    
    const header = document.getElementById('main')
 
    let infosMedia = document.createElement('div')
    
    h2.id = 'lightbox-title'
    h2.textContent = title
    infosMedia.appendChild(h2)
    const btnClose = document.createElement('button')
    btnClose.ariaLabel = 'fermer'
    btnClose.innerHTML = '<i class="fas fa-times"></i>'

    // create Next Button in the lightbox
    const btnNext = document.createElement('i')
    btnNext.ariaLabel = "suivant"
    btnNext.id = 'btn-next'
    btnNext.classList.add('fas', 'fa-chevron-right')
   
    // create button Prev in the Lightbox

    const btnPrev = document.createElement('i')
    btnPrev.ariaLabel = 'précédent'
    btnPrev.classList.add('fas', 'fa-chevron-left')
    btnPrev.id = 'btn-prev'

   
    // create image --> OR vidéo
    if (image) {
      mediaToDisplay = document.createElement('img')
    } else {
      mediaToDisplay = document.createElement('video')
      mediaToDisplay.setAttribute('alt', `${title}`)
      mediaToDisplay.setAttribute('type', 'video/mp4')
      mediaToDisplay.setAttribute('autoplay', 'autoplay')
      mediaToDisplay.setAttribute('preload', 'auto')
      mediaToDisplay.setAttribute('controls', '')
      mediaToDisplay.setAttribute('loop', '')
    }
    mediaToDisplay.id = 'mediaDisplayed'
    mediaToDisplay.setAttribute('src', path)

    // Display media in lightbox
    
  
    const lightbox = document.createElement('div')
    
    
    containerMedia.id = 'container-media'
    lightbox.id = 'lightbox'
    header.append(lightbox)
    containerMedia.appendChild(mediaToDisplay)
    lightbox.appendChild(containerMedia)
   

    lightbox.appendChild(infosMedia)

    btnClose.addEventListener('click', function () {
      lightboxIsOpen = false
     containerMedia.removeChild(mediaToDisplay)
     header.removeChild(lightbox)
    })
   
    btnNext.addEventListener('click', buttonNextLightbox)
    btnPrev.addEventListener('click', buttonPrevLigthbox)
    lightbox.append(btnClose, btnPrev, btnNext)
    function buttonEscEvent(){
      if (lightboxIsOpen){
        index = 0
        containerMedia?.removeChild(mediaToDisplay)
        lightbox?.removeChild(containerMedia)
        header?.removeChild(lightbox)
        
        lightboxIsOpen = false 
      }
      
    }
  
    //keyboard listener switch + verifications
    window.addEventListener("keydown", function (event) {
      if (lightboxIsOpen) {
        switch (event.key) {
          case "ArrowLeft":
            buttonPrevLigthbox()
            break;
          case "ArrowRight": 
            buttonNextLightbox()
            break;
          case "Enter":
            // Faire quelque chose pour les touches "enter" ou "return" pressées.
            break;
          case "Escape":
            buttonEscEvent() 
            break;
          default:
            return; // Quitter lorsque cela ne gère pas l'événement touche.
        }
      
      }
      // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
      
    }, true);
  }
  // keyboard navigation for lightbox 

  // functions with ckeckers adapted for keyboard navigation 
  

  return { getMediaItems, createLightbox}
}

export default mediaFactory
