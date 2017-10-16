//Requiring the CSS we will use on this page.
//Webpack will output `options.css` from all these requires
require('./options.scss')
const browser = require('webextension-polyfill')
const themeCustomizerElement = require('../../components/theme-customizer')
const staticCommandPaletteElement = require('../../components/static-command-palette')
const utils = require('../../util.js')
const Grapnel = require('grapnel')
const router = new Grapnel()


const appearancePageElement = document.querySelector('#page-theme')
appearancePageElement.appendChild(staticCommandPaletteElement)
appearancePageElement.appendChild(themeCustomizerElement)


const themePageNavLink = document.querySelector("a[href^='#theming']")
const usagePageElement = document.querySelector("#page-usage")
const usagePageNavLink = document.querySelector("a[href^='#usage']")
const aboutPageElement = document.querySelector("#page-about")
const aboutPageNavLink = document.querySelector("a[href^='#about']")

//Tab routing for options page
router.get('theming', function(request) {
  utils.hideNoneMatchingPage("div[id^='page-']", appearancePageElement)

  const otherNavLinks = Array.from(document.querySelectorAll("a[href^='#']"))
  .reduce((acc, navLink) => navLink != themePageNavLink ? acc.concat([navLink.classList.remove('is-active')]) : acc, [])
  themePageNavLink.classList.add('is-active')

  appearancePageElement.classList.remove('hide')
})

router.get('usage', function (request) {
  utils.hideNoneMatchingPage("div[id^='page-']", appearancePageElement)

  const otherNavLinks = Array.from(document.querySelectorAll("a[href^='#']"))
  .reduce((acc, navLink) => navLink != themePageNavLink ? acc.concat([navLink.classList.remove('is-active')]) : acc, [])
  usagePageNavLink.classList.add('is-active')

  usagePageElement.classList.remove('hide')
})

router.get('about', function (request) {
  utils.hideNoneMatchingPage("div[id^='page-']", appearancePageElement)

  const otherNavLinks = Array.from(document.querySelectorAll("a[href^='#']"))
  .reduce((acc, navLink) => navLink != aboutPageNavLink ? acc.concat([navLink.classList.remove('is-active')]) : acc, [])
  aboutPageNavLink.classList.add('is-active')

  aboutPageElement.classList.remove('hide')
})
