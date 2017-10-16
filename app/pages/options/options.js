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

const {pageSelector, hrefSelector} = { pageSelector: "div[id^='page-']", hrefSelector: "a[href^='#']"}
const {isActive, hide} = {hide: 'hide', isActive: 'is-active'}

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
  utils.hideNoneMatchingPage(pageSelector, appearancePageElement)
  utils.removeIsActiveClass(hrefSelector, themePageNavLink)
  themePageNavLink.classList.add(isActive)
  appearancePageElement.classList.remove(hide)
})

router.get('usage', function (request) {
  utils.hideNoneMatchingPage(pageSelector, usagePageElement)
  utils.removeIsActiveClass(hrefSelector, usagePageNavLink)
  usagePageNavLink.classList.add(isActive)
  usagePageElement.classList.remove(hide)
})

router.get('about', function (request) {
  utils.hideNoneMatchingPage(pageSelector, aboutPageElement)
  utils.removeIsActiveClass(hrefSelector, aboutPageNavLink)
  aboutPageNavLink.classList.add(isActive)
  aboutPageElement.classList.remove(hide)
})
