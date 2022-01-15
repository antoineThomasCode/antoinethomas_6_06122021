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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/photographer */ \"./src/pages/photographer.js\");\n\r\n\r\n// ici faire une factory media sur le modèle de la factory photographer\r\n\r\nfunction mediaFactory(data) {\r\n  const { photographerId, id, image, video, title, date, price, likes } = data\r\n\r\n  const mediaPathImg = `../assets/images/${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.name}/${image}`\r\n  const mediaPathVideo = `../assets/images/${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.name}/${video}`\r\n  let path = ''\r\n  let mediaInfosLightbox = document.createElement('div')\r\n  const article = document.createElement('article')\r\n  const titlesForGallery = []\r\n  const srcForGallery = []\r\n\r\n  // *** tools to display medias in photographers' portfolio *** //\r\n  function createImage() {\r\n    //setting image\r\n    const img = document.createElement('img')\r\n    img.setAttribute('src', mediaPathImg)\r\n    img.setAttribute('alt', `${title} `)\r\n    path = mediaPathImg\r\n\r\n    // insert items in articles\r\n    article.appendChild(img)\r\n    img.addEventListener('click', createLightbox)\r\n    srcForGallery.push(mediaPathImg)\r\n  }\r\n  function createVideo() {\r\n    // create video  and setting path\r\n    const video = document.createElement('video')\r\n    video.setAttribute('src', mediaPathVideo)\r\n    video.setAttribute('alt', `${title}`)\r\n    video.setAttribute('type', 'video/mp4')\r\n    video.setAttribute('loop', '')\r\n    video.setAttribute('muted', '')\r\n    video.addEventListener('click', createLightbox)\r\n\r\n    path = mediaPathVideo\r\n    srcForGallery.push(mediaPathVideo)\r\n\r\n    // insert video in article\r\n    article.appendChild(video)\r\n  }\r\n  function getMediaItems() {\r\n    // select portfolio items container\r\n    const section = document.getElementById('mediaContainer')\r\n\r\n    // create and setting items\r\n    // container for image, like and title\r\n\r\n    const infosItemsContainer = document.createElement('div')\r\n    const h3 = document.createElement('h3')\r\n    const likesPerItem = document.createElement('span')\r\n    const likeIcon = document.createElement('i')\r\n    let isLiked = false\r\n\r\n    // setting title\r\n    h3.textContent = title\r\n\r\n    likesPerItem.textContent = likes\r\n    likesPerItem.style.cursor = 'pointer'\r\n    likesPerItem.appendChild(likeIcon)\r\n    likeIcon.classList.add('fas')\r\n    likeIcon.classList.add('fa-heart')\r\n    titlesForGallery.push(title)\r\n    // create image or video\r\n    if (image) {\r\n      // create image and setting path\r\n      createImage()\r\n    } else {\r\n      createVideo()\r\n    }\r\n    infosItemsContainer.addEventListener('click', function (e) {\r\n      if (!isLiked) {\r\n        isLiked = true\r\n        likesPerItem.textContent = likes + 1\r\n        likesPerItem.appendChild(likeIcon)\r\n      }\r\n    })\r\n    //insert items in section container\r\n\r\n    article.append(infosItemsContainer)\r\n    infosItemsContainer.append(h3, likesPerItem)\r\n    section.appendChild(article)\r\n  }\r\n  // ** tools to display media in the lightbox //\r\n\r\n  // Lightbox creation //\r\n  function createLightbox() {\r\n    const header = document.getElementById('main')\r\n    let mediaToDisplay\r\n    let infosMedia = document.createElement('div')\r\n    const h2 = document.createElement('h2')\r\n    h2.id = 'lightbox-title'\r\n    h2.textContent = title\r\n    infosMedia.appendChild(h2)\r\n    const btnClose = document.createElement('button')\r\n    btnClose.innerHTML = '<i class=\"fas fa-times\"></i>'\r\n\r\n    // create Next Button in the lightbox\r\n    const btnNext = document.createElement('i')\r\n    btnNext.id = 'btn-next'\r\n    btnNext.classList.add('fas', 'fa-chevron-right')\r\n    // button Next Event\r\n    const buttonNextLightbox = () => {\r\n      let regex = /\\.jpg/i\r\n      let newMedia\r\n      let index = titlesForGallery.indexOf(h2.innerHTML)\r\n      let src\r\n      containerMedia.removeChild(mediaToDisplay)\r\n      if (index === titlesForGallery.length - 1) {\r\n        index = 0\r\n      } else {\r\n        index++\r\n      }\r\n      h2.textContent = titlesForGallery[index]\r\n      if (regex.test(srcForGallery[index])) {\r\n        newMedia = document.createElement('img')\r\n        newMedia.setAttribute('src', srcForGallery[index])\r\n        newMedia.setAttribute('alt', titlesForGallery[index])\r\n      } else {\r\n        newMedia = document.createElement('video')\r\n        newMedia.setAttribute('src', srcForGallery[index])\r\n        newMedia.setAttribute('alt', titlesForGallery[index])\r\n        newMedia.setAttribute('type', 'video/mp4')\r\n        newMedia.setAttribute('autoplay', 'autoplay')\r\n        newMedia.setAttribute('preload', 'auto')\r\n        newMedia.setAttribute('controls', '')\r\n        newMedia.setAttribute('loop', '')\r\n      }\r\n      mediaToDisplay = newMedia\r\n      containerMedia.appendChild(mediaToDisplay)\r\n    }\r\n    // create button Prev in the Lightbox\r\n\r\n    const btnPrev = document.createElement('i')\r\n    btnPrev.classList.add('fas', 'fa-chevron-left')\r\n    btnPrev.id = 'btn-prev'\r\n\r\n    // button Prev Event\r\n\r\n    const buttonPrevLigthbox = () => {\r\n      let regex = /\\.jpg/i\r\n      let newMedia\r\n      let index = titlesForGallery.indexOf(h2.innerHTML)\r\n      let src\r\n      containerMedia.removeChild(mediaToDisplay)\r\n      if (index === 0) {\r\n        index = titlesForGallery.length - 1\r\n      } else {\r\n        index--\r\n      }\r\n      h2.textContent = titlesForGallery[index]\r\n      if (regex.test(srcForGallery[index])) {\r\n        newMedia = document.createElement('img')\r\n        newMedia.setAttribute('src', srcForGallery[index])\r\n        newMedia.setAttribute('alt', titlesForGallery[index])\r\n      } else {\r\n        newMedia = document.createElement('video')\r\n        newMedia.setAttribute('src', srcForGallery[index])\r\n        newMedia.setAttribute('alt', titlesForGallery[index])\r\n        newMedia.setAttribute('type', 'video/mp4')\r\n        newMedia.setAttribute('autoplay', 'autoplay')\r\n        newMedia.setAttribute('preload', 'auto')\r\n        newMedia.setAttribute('controls', '')\r\n        newMedia.setAttribute('loop', '')\r\n      }\r\n      mediaToDisplay = newMedia\r\n      containerMedia.appendChild(mediaToDisplay)\r\n    }\r\n    // create image --> OR vidéo\r\n    if (image) {\r\n      mediaToDisplay = document.createElement('img')\r\n    } else {\r\n      mediaToDisplay = document.createElement('video')\r\n      mediaToDisplay.setAttribute('alt', `${title}`)\r\n      mediaToDisplay.setAttribute('type', 'video/mp4')\r\n      mediaToDisplay.setAttribute('autoplay', 'autoplay')\r\n      mediaToDisplay.setAttribute('preload', 'auto')\r\n      mediaToDisplay.setAttribute('controls', '')\r\n      mediaToDisplay.setAttribute('loop', '')\r\n    }\r\n    mediaToDisplay.id = 'mediaDisplayed'\r\n    mediaToDisplay.setAttribute('src', path)\r\n\r\n    // Display media in lightbox\r\n    const lightbox = document.createElement('div')\r\n    const containerMedia = document.createElement('div')\r\n    containerMedia.id = 'container-media'\r\n    lightbox.id = 'lightbox'\r\n    header.append(lightbox)\r\n\r\n    lightbox.appendChild(containerMedia)\r\n    containerMedia.appendChild(mediaToDisplay)\r\n\r\n    lightbox.appendChild(infosMedia)\r\n\r\n    btnClose.addEventListener('click', function () {\r\n      header.removeChild(lightbox)\r\n    })\r\n    btnNext.addEventListener('click', buttonNextLightbox)\r\n    btnPrev.addEventListener('click', buttonPrevLigthbox)\r\n    lightbox.append(btnClose, btnPrev, btnNext)\r\n  }\r\n  return { getMediaItems, createLightbox }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediaFactory);\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/factories/medias.js?");

/***/ }),

/***/ "./src/factories/photographer.js":
/*!***************************************!*\
  !*** ./src/factories/photographer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/photographer */ \"./src/pages/photographer.js\");\n\r\n\r\nfunction photographerFactory(data) {\r\n    const { name, portrait, id, city, country, tagline, price } = data;\r\n\r\n    const picture = `assets/photographers/${portrait}`;\r\n    const location = `${city}, ${country}`;\r\n    const tjm =  `${price}€/jour`; \r\n   \r\n\r\n    function getUserCardDOM() {\r\n        \r\n        // create user card container \r\n        const article = document.createElement( 'article' );\r\n        // create link to Portfolio\r\n        const linkToProfil = document.createElement('a');\r\n        linkToProfil.setAttribute('href', `./pages/photographer.html?id=${id}`);\r\n        article.appendChild(linkToProfil);\r\n\r\n        // create and setting items \r\n        // --> profil picture\r\n        const img = document.createElement( 'img' );\r\n        img.setAttribute(\"src\", picture);\r\n        img.setAttribute(\"alt\", `portrait de ${name}`);\r\n\r\n        // --> name \r\n        const h2 = document.createElement( 'h2' );\r\n        h2.textContent = name;\r\n\r\n        // -- > location \r\n        const h3 = document.createElement( 'h3' );\r\n        h3.textContent = location;\r\n\r\n        // --> tagline \r\n        const p = document.createElement( 'p' );\r\n        p.textContent = tagline;\r\n\r\n        // -- > price\r\n        const salary = document.createElement( 'p' );\r\n        salary.textContent = tjm;\r\n\r\n        // insert items in article \r\n        linkToProfil.appendChild(img);\r\n        linkToProfil.appendChild(h2);\r\n        linkToProfil.appendChild(h3);\r\n        linkToProfil.appendChild(p);\r\n        linkToProfil.appendChild(salary);\r\n        return (article);\r\n\r\n    }\r\n    function getPortoflioItems() {\r\n        // create div container for design \r\n        const userInfosContainer = document.createElement('div')\r\n        const infosLikesAndPrice = document.createElement('div')\r\n        infosLikesAndPrice.id = 'sticky-user-infos'\r\n        // -- > profil picture\r\n        const picture = `../assets/photographers/${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.portrait}`\r\n        const img = document.createElement('img')\r\n        img.setAttribute('src', picture)\r\n        img.setAttribute('alt', `portrait de ${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.name}`)\r\n\r\n        // --> name\r\n        const h1 = document.createElement('h1')\r\n        h1.textContent = _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.name\r\n\r\n        // -- > location\r\n        const h3 = document.createElement('h3')\r\n        h3.textContent = `${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.city}, ${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.country}`\r\n\r\n        // --> tagline\r\n        const p = document.createElement('p')\r\n        p.textContent = _pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.tagline\r\n        \r\n        // --> price \r\n        const price = document.createElement('span');\r\n        price.textContent = `${_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerInfos.price}€ / jour`\r\n\r\n        \r\n        //import parent element in DOM\r\n        const photographerHeader = document.querySelector('.photograph-header')\r\n\r\n        // insert intems in header\r\n        photographerHeader.appendChild(userInfosContainer)\r\n        userInfosContainer.appendChild(h1)\r\n        userInfosContainer.appendChild(h3)\r\n        userInfosContainer.appendChild(p)\r\n        photographerHeader.appendChild(img)\r\n        photographerHeader.appendChild(infosLikesAndPrice)\r\n        infosLikesAndPrice.appendChild(price)\r\n    }\r\n   \r\n    return { name, picture, tagline, location,  getUserCardDOM, getPortoflioItems }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photographerFactory);\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/factories/photographer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_pages_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/homepage */ \"./src/pages/homepage.js\");\n/* harmony import */ var _src_pages_photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/pages/photographer */ \"./src/pages/photographer.js\");\n\r\n\r\nconst url = new URL(document.location).pathname\r\n\r\n\r\n\r\nif (url === '/pages/photographer.html') {\r\n    (0,_src_pages_photographer__WEBPACK_IMPORTED_MODULE_1__.initPortfolio)()\r\n} else {\r\n    (0,_src_pages_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/index.js?");

/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/photographer */ \"./src/factories/photographer.js\");\n\r\n\r\nasync function getPhotographers() {\r\n    try {\r\n        const response = await fetch('../data/photographers.json');\r\n        return await response.json();\r\n        \r\n    } catch {\r\n       console.log('erreur de la requête')\r\n    }\r\n}\r\n\r\nasync function displayData(photographers) {\r\n    const photographersSection = document.querySelector(\".photographer_section\");\r\n\r\n    photographers.forEach((photographer) => {\r\n        const photographerModel = (0,_factories_photographer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(photographer);\r\n        const userCardDOM = photographerModel.getUserCardDOM();\r\n        const photographerHeader = document.querySelector('.photograph-header')\r\n        photographersSection.appendChild(userCardDOM);\r\n    });\r\n};\r\n\r\nasync function initHomePage() {\r\n    // Récupère les datas des photographes\r\n    const { photographers } = await getPhotographers();\r\n    displayData(photographers);\r\n};\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initHomePage);\r\n\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/pages/homepage.js?");

/***/ }),

/***/ "./src/pages/photographer.js":
/*!***********************************!*\
  !*** ./src/pages/photographer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initPortfolio\": () => (/* binding */ initPortfolio),\n/* harmony export */   \"displayPortfolioItems\": () => (/* binding */ displayPortfolioItems),\n/* harmony export */   \"getPhotographerInfos\": () => (/* binding */ getPhotographerInfos),\n/* harmony export */   \"photographerInfos\": () => (/* binding */ photographerInfos)\n/* harmony export */ });\n/* harmony import */ var _factories_medias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/medias */ \"./src/factories/medias.js\");\n/* harmony import */ var _factories_photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/photographer */ \"./src/factories/photographer.js\");\n\r\n\r\n\r\n\r\n// catch id in URL\r\nlet params = new URL(document.location).searchParams\r\nlet photographerInfos\r\nconst photographerId = params.get('id')\r\nlet userLikesCounter = 0\r\n\r\n\r\n\r\n\r\n// connect to json file\r\nasync function getPhotographerInfos() {\r\n  try {\r\n    const res = await fetch('../data/photographers.json')\r\n\r\n    return res.json()\r\n  } catch {\r\n    console.log('erreur')\r\n  }\r\n}\r\n// display items in page or console log an error\r\nasync function displayPortfolioItems(photographers) {\r\n  //catch photographer array\r\n\r\n  if (photographerId) {\r\n    //display items in header\r\n     photographerInfos = photographers.find(\r\n      (photographer) => photographer.id == photographerId,\r\n    )\r\n    const photographerModel = (0,_factories_photographer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(photographerInfos)\r\n    const userInfosElements = photographerModel.getPortoflioItems()\r\n    return photographerInfos.name\r\n  } else {\r\n    console.log(\r\n      \"Les information sur votre photographe n'ont pas pu être chargé\",\r\n    )\r\n  }\r\n}\r\nasync function displayDataUser(medias) {\r\n  const url = new URL(document.location)\r\n  const portfolioMain = document.getElementById('main')\r\n  const section = document.createElement('section')\r\n  const sorterContainer = document.createElement('div')\r\n  const p = document.createElement('p')\r\n  const ul = document.createElement('ul')\r\n  const byPopularity = document.createElement('li')\r\n  const byTitle = document.createElement('li')\r\n\r\n  section.id = 'mediaContainer'\r\n  // create sorter for media display --> using URL  params\r\n  sorterContainer.id = 'sorter'\r\n  p.textContent = 'Trier par'\r\n  byPopularity.innerHTML = `<a href=\"${url.origin}${url.pathname}?id=${photographerId}&sortBy=popularity\">Popularité <i class=\"fas fa-chevron-right\"></i></a>`\r\n  byTitle.innerHTML = `<a href=\"${url.origin}${url.pathname}?id=${photographerId}&sortBy=title\">Titre <i class=\"fas fa-chevron-right\"></i></a>`\r\n\r\n  console.log(url)\r\n\r\n  portfolioMain.appendChild(section)\r\n  mediaContainer.appendChild(sorterContainer)\r\n  sorterContainer.append(p, ul)\r\n  ul.append(byPopularity, byTitle)\r\n  if (url.searchParams.get('sortBy') == 'popularity') {\r\n    medias = medias.sort(function (a, b) {\r\n      return b.likes - a.likes\r\n    })\r\n  }\r\n  if (url.searchParams.get('sortBy') == 'title') {\r\n    medias = medias.sort(function SortArray(x, y) {\r\n      if (x.title < y.title) {\r\n        return -1\r\n      }\r\n      if (x.title > y.title) {\r\n        return 1\r\n      }\r\n      return 0\r\n    })\r\n  }\r\n  // display media with media factory\r\n  medias.forEach((media) => {\r\n    if (media.photographerId == photographerId) {\r\n      let mediaModel = (0,_factories_medias__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(media)\r\n      const userDataDOM = mediaModel.getMediaItems()\r\n    }\r\n  })\r\n}\r\nasync function displayLikes(medias) {\r\n  const stickyUserInfos = document.getElementById('sticky-user-infos')\r\n  const userLikes = document.createElement('span')\r\n  medias.forEach((media) => {\r\n    if (media.photographerId == photographerId) {\r\n      userLikesCounter += media.likes\r\n    }\r\n    userLikes.textContent = userLikesCounter\r\n    const heartIcon = document.createElement('i')\r\n    heartIcon.classList.add('fas')\r\n    heartIcon.classList.add('fa-heart')\r\n    userLikes.appendChild(heartIcon)\r\n    stickyUserInfos.appendChild(userLikes)\r\n    const formTitle = document.getElementById('formTitle')\r\n    formTitle.innerHTML = `Contactez-moi ${photographerInfos.name}`\r\n  })\r\n}\r\n\r\n// call functions to display data in page\r\nasync function initPortfolio() {\r\n  const { photographers, medias } = await getPhotographerInfos()\r\n //const res = await getPhotographerInfos()\r\n//  console.log(res)\r\n  displayPortfolioItems(photographers)\r\n  displayDataUser(medias)\r\n  displayLikes(medias)\r\n  console.log('ok')\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://antoinethomas_6_06122021/./src/pages/photographer.js?");

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