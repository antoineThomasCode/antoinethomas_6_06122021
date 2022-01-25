/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/medias.js":
/*!*********************************!*\
  !*** ./src/factories/medias.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/photographer */ \"./src/pages/photographer.js\");\n\r\n\r\nfunction mediaFactory(data) {\r\n  const {  image, video, title, likes } = data\r\n\r\n  const mediaPathImg = `../assets/images/${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.name}/${image}`\r\n  const mediaPathVideo = `../assets/images/${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.name}/${video}`\r\n  let path = ''\r\n  let index\r\n  const article = document.createElement('article')\r\n  const h2 = document.createElement('h2')\r\n  const containerMedia = document.createElement('div')\r\n  let mediaToDisplay\r\n  let lightboxIsOpen = false \r\n  \r\n\r\n  // *** tools to display medias in photographers' portfolio *** //\r\n   // button Next Event\r\n   function buttonNextLightbox() {\r\n    let regex = /\\.jpg/i\r\n    let newMedia\r\n    index = _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery.indexOf(h2.innerHTML)\r\n    \r\n    if (index === (_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery.length - 1)) {\r\n      index = 0\r\n    } else {\r\n      index++\r\n    }\r\n    h2.textContent = _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery[index]\r\n    if (regex.test(_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.srcForGallery[index])) {\r\n      newMedia = document.createElement('img')\r\n      newMedia.setAttribute('src', _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.srcForGallery[index])\r\n      newMedia.setAttribute('alt', _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery[index])\r\n      containerMedia.removeChild(mediaToDisplay)\r\n    } else {\r\n      newMedia = document.createElement('video')\r\n      newMedia.setAttribute('src', _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.srcForGallery[index])\r\n      newMedia.setAttribute('alt', _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery[index])\r\n      newMedia.setAttribute('type', 'video/mp4')\r\n      newMedia.setAttribute('autoplay', 'autoplay')\r\n      newMedia.setAttribute('preload', 'auto')\r\n      newMedia.setAttribute('controls', '')\r\n      newMedia.setAttribute('loop', '')\r\n      containerMedia.removeChild(mediaToDisplay)\r\n    }\r\n    mediaToDisplay = newMedia\r\n    containerMedia.appendChild(mediaToDisplay)\r\n  }\r\n\r\n   // button Prev Event\r\n\r\n   function buttonPrevLigthbox () {\r\n    let regex = /\\.jpg/i\r\n    let newMedia\r\n    let index = _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery.indexOf(h2.innerHTML)\r\n    \r\n    if (index === 0) {\r\n      index = _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery.length - 1\r\n    } else {\r\n      index--\r\n    }\r\n    h2.textContent = _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery[index]\r\n    if (regex.test(_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.srcForGallery[index])) {\r\n      newMedia = document.createElement('img')\r\n      newMedia.setAttribute('src', _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.srcForGallery[index])\r\n      newMedia.setAttribute('alt', _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery[index])\r\n      containerMedia.removeChild(mediaToDisplay)\r\n    } else {\r\n      newMedia = document.createElement('video')\r\n      newMedia.setAttribute('src', _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.srcForGallery[index])\r\n      newMedia.setAttribute('alt', _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery[index])\r\n      newMedia.setAttribute('type', 'video/mp4')\r\n      newMedia.setAttribute('autoplay', 'autoplay')\r\n      newMedia.setAttribute('preload', 'auto')\r\n      newMedia.setAttribute('controls', '')\r\n      newMedia.setAttribute('loop', '')\r\n      containerMedia.removeChild(mediaToDisplay)\r\n    }\r\n    \r\n    mediaToDisplay = newMedia\r\n    containerMedia.appendChild(mediaToDisplay)\r\n  \r\n  }\r\n\r\n  function createImage() {\r\n    //setting image\r\n    const img = document.createElement('img')\r\n    img.setAttribute('src', mediaPathImg)\r\n    img.setAttribute('alt', `${title} `)\r\n    path = mediaPathImg\r\n\r\n    // insert items in articles\r\n    article.appendChild(img)\r\n    img.addEventListener('click', createLightbox)\r\n    img.tabIndex = 0\r\n    _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.srcForGallery.push(mediaPathImg)\r\n  }\r\n  function createVideo() {\r\n    // create video  and setting path\r\n    const video = document.createElement('video')\r\n    video.setAttribute('src', mediaPathVideo)\r\n    video.setAttribute('alt', `${title}`)\r\n    video.setAttribute('type', 'video/mp4')\r\n    video.setAttribute('loop', '')\r\n    video.setAttribute('muted', '')\r\n    video.addEventListener('click', createLightbox)\r\n    video.tabIndex = 0\r\n\r\n    path = mediaPathVideo\r\n    _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.srcForGallery.push(mediaPathVideo)\r\n\r\n    // insert video in article\r\n    article.appendChild(video)\r\n  }\r\n  function getMediaItems() {\r\n    // select portfolio items container\r\n    const section = document.getElementById('mediaContainer')\r\n\r\n    // create and setting items\r\n    // container for image, like and title\r\n\r\n    const infosItemsContainer = document.createElement('div')\r\n    const h3 = document.createElement('h3')\r\n    const likesPerItem = document.createElement('span')\r\n    const likeIcon = document.createElement('i')\r\n    let isLiked = false\r\n\r\n    // setting title\r\n    h3.textContent = title\r\n\r\n    likesPerItem.textContent = likes\r\n    likesPerItem.style.cursor = 'pointer'\r\n    likesPerItem.appendChild(likeIcon)\r\n    likeIcon.classList.add('fas')\r\n    likeIcon.classList.add('fa-heart')\r\n    _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.titlesForGallery.push(title)\r\n    // create image or video\r\n    if (image) {\r\n      // create image and setting path\r\n      createImage()\r\n    } else {\r\n      createVideo()\r\n    }\r\n    infosItemsContainer.addEventListener('click', function() {\r\n      if (!isLiked) {\r\n        isLiked = true\r\n        likesPerItem.textContent = likes + 1\r\n        \r\n        likesPerItem.appendChild(likeIcon)\r\n      }\r\n    })\r\n    //insert items in section container\r\n    \r\n    article.addEventListener('keydown', (e) => {\r\n      if (e.keyCode === 13){\r\n        createLightbox()\r\n    }\r\n    });\r\n    article.append(infosItemsContainer)\r\n\r\n    infosItemsContainer.append(h3, likesPerItem)\r\n    section.appendChild(article)\r\n  }\r\n  // ** tools to display media in the lightbox //\r\n\r\n  // Lightbox creation //\r\n  function createLightbox() {\r\n    lightboxIsOpen = true\r\n    \r\n    const header = document.getElementById('main')\r\n \r\n    let infosMedia = document.createElement('div')\r\n    \r\n    h2.id = 'lightbox-title'\r\n    h2.textContent = title\r\n    infosMedia.appendChild(h2)\r\n    const btnClose = document.createElement('button')\r\n    btnClose.ariaLabel = 'fermer'\r\n    btnClose.innerHTML = '<i class=\"fas fa-times\"></i>'\r\n\r\n    // create Next Button in the lightbox\r\n    const btnNext = document.createElement('i')\r\n    btnNext.ariaLabel = \"suivant\"\r\n    btnNext.id = 'btn-next'\r\n    btnNext.classList.add('fas', 'fa-chevron-right')\r\n   \r\n    // create button Prev in the Lightbox\r\n\r\n    const btnPrev = document.createElement('i')\r\n    btnPrev.ariaLabel = 'précédent'\r\n    btnPrev.classList.add('fas', 'fa-chevron-left')\r\n    btnPrev.id = 'btn-prev'\r\n\r\n   \r\n    // create image --> OR vidéo\r\n    if (image) {\r\n      mediaToDisplay = document.createElement('img')\r\n    } else {\r\n      mediaToDisplay = document.createElement('video')\r\n      mediaToDisplay.setAttribute('alt', `${title}`)\r\n      mediaToDisplay.setAttribute('type', 'video/mp4')\r\n      mediaToDisplay.setAttribute('autoplay', 'autoplay')\r\n      mediaToDisplay.setAttribute('preload', 'auto')\r\n      mediaToDisplay.setAttribute('controls', '')\r\n      mediaToDisplay.setAttribute('loop', '')\r\n    }\r\n    mediaToDisplay.id = 'mediaDisplayed'\r\n    mediaToDisplay.setAttribute('src', path)\r\n\r\n    // Display media in lightbox\r\n    \r\n  \r\n    const lightbox = document.createElement('div')\r\n    \r\n    \r\n    containerMedia.id = 'container-media'\r\n    lightbox.id = 'lightbox'\r\n    header.append(lightbox)\r\n    containerMedia.appendChild(mediaToDisplay)\r\n    lightbox.appendChild(containerMedia)\r\n   \r\n\r\n    lightbox.appendChild(infosMedia)\r\n\r\n    btnClose.addEventListener('click', function () {\r\n      lightboxIsOpen = false\r\n     containerMedia.removeChild(mediaToDisplay)\r\n     header.removeChild(lightbox)\r\n    })\r\n   \r\n    btnNext.addEventListener('click', buttonNextLightbox)\r\n    btnPrev.addEventListener('click', buttonPrevLigthbox)\r\n    lightbox.append(btnClose, btnPrev, btnNext)\r\n    function buttonEscEvent(){\r\n      if (lightboxIsOpen){\r\n        index = 0\r\n        containerMedia?.removeChild(mediaToDisplay)\r\n        lightbox?.removeChild(containerMedia)\r\n        header?.removeChild(lightbox)\r\n        \r\n        lightboxIsOpen = false \r\n      }\r\n      \r\n    }\r\n  \r\n    //keyboard listener switch + verifications\r\n    window.addEventListener(\"keydown\", function (event) {\r\n      if (lightboxIsOpen) {\r\n        switch (event.key) {\r\n          case \"ArrowLeft\":\r\n            buttonPrevLigthbox()\r\n            break;\r\n          case \"ArrowRight\": \r\n            buttonNextLightbox()\r\n            break;\r\n          case \"Enter\":\r\n            // Faire quelque chose pour les touches \"enter\" ou \"return\" pressées.\r\n            break;\r\n          case \"Escape\":\r\n            buttonEscEvent() \r\n            break;\r\n          default:\r\n            return; // Quitter lorsque cela ne gère pas l'événement touche.\r\n        }\r\n      \r\n      }\r\n      // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.\r\n      \r\n    }, true);\r\n  }\r\n  // keyboard navigation for lightbox \r\n\r\n  // functions with ckeckers adapted for keyboard navigation \r\n  \r\n\r\n  return { getMediaItems, createLightbox}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediaFactory);\r\n\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/factories/medias.js?");

/***/ }),

/***/ "./src/factories/photographer.js":
/*!***************************************!*\
  !*** ./src/factories/photographer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/photographer */ \"./src/pages/photographer.js\");\n\r\n\r\n\r\nfunction photographerFactory(data) {\r\n    const { name, portrait, id, city, country, tagline, price } = data;\r\n\r\n    const picture = `assets/photographers/${portrait}`;\r\n    const location = `${city}, ${country}`;\r\n    const tjm =  `${price}€/jour`; \r\n   \r\n\r\n    function getUserCardDOM() {\r\n        \r\n        // create user card container \r\n        const article = document.createElement( 'article' );\r\n        // create link to Portfolio\r\n        const linkToProfil = document.createElement('a');\r\n        linkToProfil.setAttribute('href', `./pages/photographer.html?id=${id}`);\r\n        article.appendChild(linkToProfil);\r\n\r\n        // create and setting items \r\n        // --> profil picture\r\n        const img = document.createElement( 'img' );\r\n        img.setAttribute(\"src\", picture);\r\n        img.setAttribute(\"alt\", `portrait de ${name}`);\r\n\r\n        // --> name \r\n        const h2 = document.createElement( 'h2' );\r\n        h2.textContent = name;\r\n\r\n        // -- > location \r\n        const h3 = document.createElement( 'h3' );\r\n        h3.textContent = location;\r\n\r\n        // --> tagline \r\n        const p = document.createElement( 'p' );\r\n        p.textContent = tagline;\r\n\r\n        // -- > price\r\n        const salary = document.createElement( 'p' );\r\n        salary.textContent = tjm;\r\n\r\n        // insert items in article \r\n        linkToProfil.appendChild(img);\r\n        linkToProfil.appendChild(h2);\r\n        linkToProfil.appendChild(h3);\r\n        linkToProfil.appendChild(p);\r\n        linkToProfil.appendChild(salary);\r\n        return (article);\r\n\r\n    }\r\n    function getPortoflioItems() {\r\n        // create div container for design \r\n        const userInfosContainer = document.createElement('div')\r\n        const infosLikesAndPrice = document.createElement('div')\r\n        infosLikesAndPrice.id = 'sticky-user-infos'\r\n        // -- > profil picture\r\n        const picture = `../assets/photographers/${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.portrait}`\r\n        const img = document.createElement('img')\r\n        img.setAttribute('src', picture)\r\n        img.setAttribute('alt', `portrait de ${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.name}`)\r\n\r\n        // --> name\r\n        const h1 = document.createElement('h1')\r\n        h1.textContent = _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.name\r\n\r\n        // -- > location\r\n        const h3 = document.createElement('h3')\r\n        h3.textContent = `${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.city}, ${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.country}`\r\n\r\n        // --> tagline\r\n        const p = document.createElement('p')\r\n        p.textContent = _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.tagline\r\n        \r\n        // --> price \r\n        const price = document.createElement('span');\r\n        price.textContent = `${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.price}€ / jour`\r\n\r\n        \r\n        //import parent element in DOM\r\n        const photographerHeader = document.querySelector('.photograph-header')\r\n\r\n        // insert intems in header\r\n        photographerHeader.appendChild(userInfosContainer)\r\n        userInfosContainer.appendChild(h1)\r\n        userInfosContainer.appendChild(h3)\r\n        userInfosContainer.appendChild(p)\r\n        photographerHeader.appendChild(img)\r\n        photographerHeader.appendChild(infosLikesAndPrice)\r\n        infosLikesAndPrice.appendChild(price)\r\n    }\r\n   \r\n    return { name, picture, tagline, location,  getUserCardDOM, getPortoflioItems }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photographerFactory);\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/factories/photographer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_pages_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/homepage */ \"./src/pages/homepage.js\");\n/* harmony import */ var _src_pages_photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/pages/photographer */ \"./src/pages/photographer.js\");\n\r\n\r\n\r\nconst url = new URL(document.location).pathname\r\nconst urlDivided = url.split('/')\r\n\r\nif (urlDivided.indexOf('photographer.html') != -1) {\r\n    (0,_src_pages_photographer__WEBPACK_IMPORTED_MODULE_1__.initPortfolio)()\r\n} else {\r\n    (0,_src_pages_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/index.js?");

/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/photographer */ \"./src/factories/photographer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n\r\n\r\n\r\n\r\nconst getPhotographers = async () => await (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.genericFetch)(\"../data/photographers.json\", \"Erreur dans la récupération des photographes\");\r\n\r\nfunction displayData(photographers) {\r\n    const photographersSection = document.querySelector(\".photographer_section\");\r\n\r\n    photographers.forEach((photographer) => {\r\n        const photographerModel = (0,_factories_photographer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(photographer);\r\n        const userCardDOM = photographerModel.getUserCardDOM();\r\n        const photographerHeader = document.querySelector('.photograph-header')\r\n        photographersSection.appendChild(userCardDOM);\r\n    });\r\n};\r\n\r\nasync function initHomePage() {\r\n    // Récupère les datas des photographes\r\n    const { photographers } = await getPhotographers();\r\n    displayData(photographers);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initHomePage);\r\n\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/pages/homepage.js?");

/***/ }),

/***/ "./src/pages/photographer.js":
/*!***********************************!*\
  !*** ./src/pages/photographer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initPortfolio\": () => (/* binding */ initPortfolio),\n/* harmony export */   \"displayPortfolioItems\": () => (/* binding */ displayPortfolioItems),\n/* harmony export */   \"getPhotographerInfos\": () => (/* binding */ getPhotographerInfos),\n/* harmony export */   \"photographerInfos\": () => (/* binding */ photographerInfos),\n/* harmony export */   \"titlesForGallery\": () => (/* binding */ titlesForGallery),\n/* harmony export */   \"srcForGallery\": () => (/* binding */ srcForGallery)\n/* harmony export */ });\n/* harmony import */ var _factories_medias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/medias */ \"./src/factories/medias.js\");\n/* harmony import */ var _factories_photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/photographer */ \"./src/factories/photographer.js\");\n/* harmony import */ var _utils_contactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/contactForm */ \"./src/utils/contactForm.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n\r\n\r\n\r\n\r\n\r\n// catch id in URL\r\nlet params = new URL(document.location).searchParams\r\nlet photographerInfos\r\nconst photographerId = params.get('id')\r\nlet userLikesCounter = 0\r\nconst titlesForGallery = []\r\nconst srcForGallery = []\r\n\r\n// connect to json file\r\nconst getPhotographerInfos = async () => await (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.genericFetch)(\"../data/photographers.json\", \"Erreur dans la récupération des photographes\");\r\n\r\n// display items in page or console log an error\r\nasync function displayPortfolioItems(photographers) {\r\n  //catch photographer array\r\n  if (photographerId) {\r\n    //display items in header\r\n     photographerInfos = photographers.find(\r\n      (photographer) => photographer.id === parseInt(photographerId),\r\n    )\r\n    const photographerModel = (0,_factories_photographer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(photographerInfos)\r\n    const userInfosElements = photographerModel.getPortoflioItems()\r\n    return photographerInfos.name\r\n  } else {\r\n    console.log(\r\n      \"Les information sur votre photographe n'ont pas pu être chargé\",\r\n    )\r\n  }\r\n}\r\nasync function displayDataUser(medias) {\r\n  const url = new URL(document.location)\r\n  const portfolioMain = document.getElementById('main')\r\n  const section = document.createElement('section')\r\n  const sorterContainer = document.createElement('div')\r\n  const p = document.createElement('p')\r\n  const ul = document.createElement('ul')\r\n  const byPopularity = document.createElement('li')\r\n  const byTitle = document.createElement('li')\r\n  \r\n  byPopularity.id = 'byPopularity'\r\n  byPopularity.tabIndex = 0\r\n  byTitle.id = 'byTitle'\r\n  byTitle.tabIndex = 0\r\n  section.id = 'mediaContainer'\r\n  ul.tabIndex = 0           \r\n\r\n  // create sorter for media display --> using URL  params\r\n  sorterContainer.id = 'sorter'\r\n  p.textContent = 'Trier par'\r\n  byPopularity.innerHTML = `<a href=\"${url.origin}${url.pathname}?id=${photographerId}&sortBy=popularity\">Popularité</a>`\r\n  byTitle.innerHTML = `<a href=\"${url.origin}${url.pathname}?id=${photographerId}&sortBy=title\">Titre</a>`\r\n  // add in DOM\r\n  portfolioMain.appendChild(section)\r\n  sorterContainer.append(p, ul)\r\n  ul.append(byPopularity, byTitle)\r\n  if (url.searchParams.get('sortBy') === 'popularity') {\r\n    medias = medias.sort(function (a, b) {\r\n      return b.likes - a.likes\r\n    })\r\n    byPopularity.style.display = 'none'\r\n    byTitle.style.display = 'flex'\r\n  }\r\n  if (url.searchParams.get('sortBy') === 'title') {\r\n    medias = medias.sort(function SortArray(x, y) {\r\n      if (x.title < y.title) {\r\n        return -1\r\n      }\r\n      if (x.title > y.title) {\r\n        return 1\r\n      }\r\n      return 0\r\n    })\r\n    byTitle.style.display = 'none'\r\n    byPopularity.style.display = 'flex'\r\n  }\r\n  // display media with media factory\r\n  medias.forEach((media) => {\r\n    if (media.photographerId == photographerId) {\r\n      let mediaModel = (0,_factories_medias__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(media)\r\n      const userDataDOM = mediaModel.getMediaItems()\r\n    }\r\n  })\r\n}\r\nasync function displayLikes(medias) {\r\n  const stickyUserInfos = document.getElementById('sticky-user-infos')\r\n  const userLikes = document.createElement('span')\r\n  medias.forEach((media) => {\r\n    if (media.photographerId == photographerId) {\r\n      userLikesCounter += media.likes\r\n    }\r\n    userLikes.textContent = userLikesCounter\r\n    const heartIcon = document.createElement('i')\r\n    heartIcon.classList.add('fas')\r\n    heartIcon.classList.add('fa-heart')\r\n    userLikes.appendChild(heartIcon)\r\n    stickyUserInfos.appendChild(userLikes)\r\n    const formTitle = document.getElementById('formTitle')\r\n    formTitle.innerHTML = `Contactez-moi ${photographerInfos.name}`\r\n  })\r\n}\r\n// contact form in portfolio --> photographers \r\n\r\n// call functions to display data in page\r\nasync function initPortfolio() {\r\n  const { photographers, medias } = await getPhotographerInfos()\r\n  const openContactFormBtn = document.getElementById('open_contact_form')\r\n  const closeContactFormBtn = document.getElementById('close_contact_form')\r\n  const submitForm = document.getElementById('contact_form')\r\n \r\n  openContactFormBtn.addEventListener('click', _utils_contactForm__WEBPACK_IMPORTED_MODULE_2__.displayModal)\r\n  openContactFormBtn.ariaLabel = 'ouvrir'\r\n  closeContactFormBtn.tabIndex = 0\r\n  closeContactFormBtn.ariaLabel = \"Fermer\"\r\n  closeContactFormBtn.addEventListener('keydown', (e) => {\r\n    if (e.keyCode === 13){\r\n      (0,_utils_contactForm__WEBPACK_IMPORTED_MODULE_2__.closeModal)()\r\n  }\r\n  });\r\n  \r\n  closeContactFormBtn.addEventListener('click', _utils_contactForm__WEBPACK_IMPORTED_MODULE_2__.closeModal)\r\n  \r\n  submitForm.addEventListener('click', function(e){\r\n   e.preventDefault()\r\n   const submitFormBtn = document.getElementById('submit_contact_form')\r\n   submitFormBtn.addEventListener('click', _utils_contactForm__WEBPACK_IMPORTED_MODULE_2__.validate)\r\n })\r\n  displayPortfolioItems(photographers)\r\n  displayDataUser(medias)\r\n  displayLikes(medias)\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/pages/photographer.js?");

/***/ }),

/***/ "./src/utils/contactForm.js":
/*!**********************************!*\
  !*** ./src/utils/contactForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayModal\": () => (/* binding */ displayModal),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"validate\": () => (/* binding */ validate),\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/utils/functions.js\");\n\r\n// open & close FormModal \r\nconst modal = document.getElementById(\"contact_modal\");\r\nfunction displayModal() {\r\n    \r\n\tmodal.style.display = \"flex\";\r\n}\r\n\r\nfunction closeModal() {\r\n    modal.style.display = \"none\";\r\n}\r\n// validate form before sending data to the backend\r\nfunction validate(){\r\n    \r\n    // field values recovery\r\n    const formContent = document.getElementById('modal-content')\r\n    let isErrors = false;\r\n    let firstName = document.getElementById('firstName');\r\n    let lastName = document.getElementById('lastName');\r\n    let email = document.getElementById('email');\r\n\r\n    // delete error class \r\n    document.querySelectorAll('.error').forEach(error => error.remove());\r\n    document.querySelectorAll('.error--bg').forEach(error => error.classList.remove('error--bg'));\r\n\r\n    // find functions using to validate values in ---> functions.js \r\n    if(!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.nameIsCorrect)(firstName.value)){\r\n        isErrors = true\r\n        ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.displayErrorMessage)(firstName, 'Veuillez entrer 2 caractères ou plus pour le prénom.')\r\n    }\r\n    if(!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.nameIsCorrect)(lastName.value)){\r\n        isErrors = true\r\n        ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.displayErrorMessage)(lastName, 'Veuillez entrer 2 caractères ou plus pour le nom.')\r\n    }\r\n    if(!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.emailIsCorrect)(email.value)){\r\n        isErrors = true\r\n        ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.displayErrorMessage)(email, 'Veuillez entrer une adresse mail valide.')\r\n    }\r\n    // check if an error was detected \r\n    if(isErrors){\r\n    return false; \r\n    } else {\r\n        const messageForPhotographer = {\r\n            firstname: firstName.value,\r\n            lastname: lastName.value,\r\n            email: email.value,\r\n        };\r\n\r\n        console.log(messageForPhotographer)\r\n        \r\n        const formData = document.getElementById('formData')\r\n        formData.style.display = 'none'\r\n        const messageSending = document.createElement('div')\r\n        messageSending.id = \"message-sending\"; \r\n        formContent.append(messageSending)\r\n        messageSending.innerHTML ='Votre message à bien été envoyé au photographe'\r\n        const buttonClose = document.createElement('button')\r\n        buttonClose.classList.add('contact_button')\r\n        buttonClose.innerHTML = \"Fermer\";\r\n        buttonClose.addEventListener (\"click\", closeModal);\r\n        formContent.appendChild(buttonClose)\r\n        return false;    \r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/utils/contactForm.js?");

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nameIsCorrect\": () => (/* binding */ nameIsCorrect),\n/* harmony export */   \"emailIsCorrect\": () => (/* binding */ emailIsCorrect),\n/* harmony export */   \"createErrorMessage\": () => (/* binding */ createErrorMessage),\n/* harmony export */   \"displayErrorMessage\": () => (/* binding */ displayErrorMessage)\n/* harmony export */ });\n// -- > check firstname and lastname \r\nfunction nameIsCorrect(value) {\r\n    value = value.trim();\r\n    if(value != \"\" && value.length >= 2 && value != null){\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n// -- > ckeck if the valuse of email input is correct \r\nfunction emailIsCorrect(value){\r\n    const regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');\r\n\r\n    if (regEmail.test(value)){    \r\n    return true;\r\n    } \r\n    return false;\r\n}\r\n// ** function to create ERROR container and display message inside  **//\r\nconst createErrorMessage = (message) => {\r\n    const errorMessage = document.createElement('div');\r\n    errorMessage.className = \"error\";\r\n    errorMessage.innerHTML = message;\r\n    return errorMessage;\r\n}\r\nconst displayErrorMessage = (input, errorMessage) => {\r\n    input.classList.add('error--bg');\r\n    input.insertAdjacentElement('afterend', createErrorMessage(`${errorMessage}`));\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/utils/functions.js?");

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getParam\": () => (/* binding */ getParam),\n/* harmony export */   \"genericFetch\": () => (/* binding */ genericFetch)\n/* harmony export */ });\nconst getParam = (param) => new URL(document.location).searchParams.get(param);\r\n\r\nconst genericFetch = async (url, msgErr = 'Failed to fetch', method = 'GET', headers = {}) => {\r\n    try {\r\n        const response = await fetch(url, { method, headers });\r\n        return response.json()\r\n    } catch (err) {\r\n        document.querySelector(\"#msg-err\").innerHTML = msgErr;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/utils/helpers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;