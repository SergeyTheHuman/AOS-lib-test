import { isWebp } from './components/isWebp.js'
import AOS from 'aos'

isWebp()

AOS.init({
	disable: 'mobile',
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	offset: 150,
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
})
