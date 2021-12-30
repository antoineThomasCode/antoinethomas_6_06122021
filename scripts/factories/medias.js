
// ici faire une factory media sur le modèle de la factory photographer
function mediaFactory(data) {
   
    const { photographerId, id, image, video,  title, date, price, likes } = data;
   

    const mediaPathImg = `../assets/images/${photographerInfos.name}/${image}`
    const mediaPathVideo = `../assets/images/${photographerInfos.name}/${video}`
    let path = ""
    let mediaInfosLightbox = document.createElement('div');
    const article = document.createElement('article');
   

    // *** tools to display medias in photographers' portfolio *** //
    function createImage() {
        //setting image
        const img = document.createElement( 'img' );
        img.setAttribute("src", mediaPathImg);
        img.setAttribute("alt", `${title} `);
        path = mediaPathImg

        // insert items in articles
        article.appendChild(img)
        img.addEventListener('click', createLightbox)
        srcForGallery.push(mediaPathImg)
    }
    function createVideo() {
        // create video  and setting path 
        const video = document.createElement('video');
        video.setAttribute("src", mediaPathVideo);
        video.setAttribute("alt", `${title}`);
        video.setAttribute("type", "video/mp4");
        video.setAttribute("loop", "")
        video.setAttribute("muted", "")
        video.addEventListener('click', createLightbox)

        path = mediaPathVideo
        srcForGallery.push(mediaPathVideo)

        // insert video in article 
        article.appendChild(video) 
      
    }
    function getMediaItems() {
        // select portfolio items container 
        const section = document.getElementById('mediaContainer');

        // create and setting items 
        // container for image, like and title 
 

        const infosItemsContainer = document.createElement('div');
        const h3 = document.createElement('h3'); 
        const likesPerItem = document.createElement('span'); 
        const likeIcon = document.createElement('i')
        let isLiked = false; 
       
        // setting title
        h3.textContent = title; 
        
        likesPerItem.textContent = likes; 
        likesPerItem.style.cursor = "pointer"
        likesPerItem.appendChild(likeIcon)
        likeIcon.classList.add('fas')
        likeIcon.classList.add('fa-heart') 
        titlesForGallery.push(title)
        // create image or video 
        if (image) {
            // create image and setting path
           createImage();

        } else {
            createVideo();
        }
        infosItemsContainer.addEventListener('click', function(e){
            if (!isLiked) {
                isLiked = true; 
                likesPerItem.textContent = likes + 1;
                likesPerItem.appendChild(likeIcon)
            }
        })
        //insert items in section container 

        article.append(infosItemsContainer)
        infosItemsContainer.append(h3, likesPerItem)
        section.appendChild(article)
    }
    // ** tools to display media in the lightbox //

    // Lightbox creation //
    function createLightbox() {

        const header = document.getElementById('main')
        let mediaToDisplay; 
        let infosMedia = document.createElement('div')
        const h2 = document.createElement("h2")
        h2.id = 'lightbox-title'
        h2.textContent = title
        infosMedia.appendChild(h2)
        const btnClose = document.createElement('button')
        btnClose.innerHTML = '<i class="fas fa-times"></i>'
        const btnPrev = document.createElement('i')
        btnPrev.classList.add('fas', 'fa-chevron-left')
        btnPrev.id = 'btn-prev'

        // create Next Button in the lightbox
        const btnNext = document.createElement('i')
        btnNext.id = 'btn-next'
        btnNext.classList.add('fas', 'fa-chevron-right')
        // create image --> OR vidéo
        if (image) {
            mediaToDisplay = document.createElement('img')
        } else {
            mediaToDisplay = document.createElement('video')
            mediaToDisplay.setAttribute("alt", `${title}`);
            mediaToDisplay.setAttribute("type", "video/mp4");
            mediaToDisplay.setAttribute("autoplay", "autoplay")
            mediaToDisplay.setAttribute("preload", "auto")
            mediaToDisplay.setAttribute("controls", "")
            mediaToDisplay.setAttribute("loop", "")
        }
        mediaToDisplay.id = "mediaDisplayed"
        mediaToDisplay.setAttribute('src', path)

        // Display media in lightbox
        const lightbox = document.createElement('div')
        const containerMedia = document.createElement('div')
        containerMedia.id = 'container-media'
        lightbox.id = 'lightbox'
        header.append(lightbox)

        lightbox.appendChild(containerMedia)
        containerMedia.appendChild(mediaToDisplay)

        lightbox.appendChild(infosMedia)

        btnClose.addEventListener('click', function(){
            header.removeChild(lightbox)
            })
        btnNext.addEventListener('click', function(){
            
            let regex = /\.jpg/i;
            let newMedia;
            let index = titlesForGallery.indexOf(h2.innerHTML)
            let src
            containerMedia.removeChild(mediaToDisplay)
            if (index === (titlesForGallery.length - 1)) {
                index = 0
            } else {
                  index++
            }
            h2.textContent = titlesForGallery[index]
            if(regex.test(srcForGallery[index])) {
                newMedia = document.createElement('img')
                newMedia.setAttribute('src', srcForGallery[index])
                newMedia.setAttribute("alt", titlesForGallery[index]);

            } else {
                newMedia = document.createElement('video')
                newMedia.setAttribute('src', srcForGallery[index])
                newMedia.setAttribute("alt", titlesForGallery[index]);
                newMedia.setAttribute("type", "video/mp4");
                newMedia.setAttribute("autoplay", "autoplay")
                newMedia.setAttribute("preload", "auto")
                newMedia.setAttribute("controls", "")
                newMedia.setAttribute("loop", "")
            }
            mediaToDisplay = newMedia
            containerMedia.appendChild(mediaToDisplay)
            
        })    
        lightbox.append(btnClose ,btnPrev, btnNext)
        
    }

    
    return { getMediaItems, createLightbox}
}