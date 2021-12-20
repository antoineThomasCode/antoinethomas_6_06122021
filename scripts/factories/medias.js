// ici faire une factory media sur le modèle de la factory photographer
function mediaFactory(data) {
   
    const { photographerId, id, image, video,  title, date, price, likes } = data;
   

    const mediaPathImg = `../assets/images/${photographerInfos.name}/${image}`
    const mediaPathVideo = `../assets/images/${photographerInfos.name}/${video}`
    let path = ""
    let mediaInfosLightbox = document.createElement('div');
   
    function getMediaItems() {
        // select portfolio items container 
        const section = document.getElementById('mediaContainer');
        // create and setting items 
        // container for image, like and title 
        const article = document.createElement('article');
        const infosItemsContainer = document.createElement('div');
        const h3 = document.createElement('h3'); 
        const likesPerItem = document.createElement('span'); 
        const likeIcon = document.createElement('i')
        let isLiked = false; 
       



        // setting title
        h3.textContent = title; 
        // setting likes
        likesPerItem.textContent = likes; 
        likesPerItem.style.cursor = "pointer"
        likesPerItem.appendChild(likeIcon)
        likeIcon.classList.add('fas')
        likeIcon.classList.add('fa-heart') 
       
        // create image or video 
        if (image) {
            // create image and setting path
            const img = document.createElement( 'img' );
            img.setAttribute("src", mediaPathImg);
            img.setAttribute("alt", `${title} `);
            // insert items in articles
            article.appendChild(img)
            article.style.order = '1';
            path = mediaPathImg
            article.addEventListener('click', createLightbox)
        } else {
            // create video  and setting path 
            const video = document.createElement('video');
            video.setAttribute("src", mediaPathVideo);
            video.setAttribute("alt", `${title}`);
            video.setAttribute("type", "video/mp4");
            video.setAttribute("autoplay", "autoplay")
            video.setAttribute("preload", "auto")
            //video.setAttribute("controls", "")
            video.setAttribute("loop", "")
            video.setAttribute("muted", "")

            path = mediaPathVideo
            // insert video in article 
            article.appendChild(video);
            article.style.order = '2';
            path = mediaPathVideo
            article.addEventListener('click', function(e){
                e.preventDefault;
                createLightbox();
            })
        }
  
        infosItemsContainer.addEventListener('click', function(){
            if (!isLiked) {
                isLiked = true; 
                likesPerItem.textContent = likes + 1;
                likesPerItem.appendChild(likeIcon)
                console.log(isLiked)
            }
        })
        //insert items in section container 
        article.appendChild(infosItemsContainer)
        infosItemsContainer.appendChild(h3)
        infosItemsContainer.appendChild(likesPerItem)
        section.appendChild(article)
        
        console.log(path)
        return (section);

    }
    function createLightbox() {
        const header = document.getElementById('main')
        const lightbox = document.createElement('div')
        let mediaToDisplay; 
        let infosMedia = document.createElement('div')
        infosMedia.innerHTML = `<h2> ${title}<span>${likes} <i class="fas fa-heart"></i> </h2>`
        const btnClose = document.createElement('button')
        btnClose.innerHTML = '<i class="fas fa-times"></i>'
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
        mediaToDisplay.setAttribute('src', path)
        lightbox.id = 'lightbox'
        header.append(lightbox)
        lightbox.appendChild(mediaToDisplay) 
        lightbox.appendChild(infosMedia)
        btnClose.addEventListener('click', function(e){
            e.preventDefault
            header.removeChild(lightbox)
        })
        lightbox.appendChild(btnClose)

        console.log(mediaInfosLightbox)
    }

    
    return { getMediaItems, createLightbox }
}