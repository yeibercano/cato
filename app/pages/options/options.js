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


const [
  themePageNavLink,
  usagePageElement,
  usagePageNavLink,
  aboutPageElement,
  aboutPageNavLink
] = utils.getSelectors(
  "a[href^='#theming']",
  "#page-usage",
  "a[href^='#usage']",
  "#page-about",
  "a[href^='#about']"
)


//Tab routing for options page
router.get('theming', function(request) {
  utils.hideNoneMatchingPage("div[id^='page-']", appearancePageElement)
  utils.removeIsActiveClass("a[href^='#']", themePageNavLink)
  themePageNavLink.classList.add('is-active')
  appearancePageElement.classList.remove('hide')
})

router.get('usage', function (request) {
  utils.hideNoneMatchingPage("div[id^='page-']", usagePageElement)
  utils.removeIsActiveClass("a[href^='#']", usagePageNavLink)
  usagePageNavLink.classList.add('is-active')
  usagePageElement.classList.remove('hide')
})

router.get('about', function (request) {
  utils.hideNoneMatchingPage("div[id^='page-']", aboutPageElement)
  utils.removeIsActiveClass("a[href^='#']", aboutPageNavLink)
  aboutPageNavLink.classList.add('is-active')
  aboutPageElement.classList.remove('hide')
})
