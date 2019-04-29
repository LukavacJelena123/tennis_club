import _ from 'lodash';
import displayCoaches from './coaches'
import display from './membership';
import "@babel/polyfill";
import'../css/main.css';
import showSlides from './slider';
import '../js/modal';
import $ from 'jquery';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

displayCoaches();
showSlides();
display();

let controller = new ScrollMagic.Controller();
let pinStickyNav = new ScrollMagic.Scene({
  triggerElement: "#navigation",
	triggerHook: 0,
	reverse: true
})
  .setPin("#navigation", {
	pushFollowers: false
  })
  .addTo(controller);

  let pinStickyWeather = new ScrollMagic.Scene({
    triggerElement: "#weather",
    duration: 3300,
    offset: 150,
    reverse: true
  })
    .setPin("#weather", {
    pushFollowers: false
    })
    .addTo(controller);


const aTag = {
  aWelcome: `welcome`,
  aNews: `news`,
  aCoaches: `coaches`,
  aCourts: `courts`,
  aMembership: `membership`,
  aForm: `form`
}
const entries = Object.entries(aTag);
for (const [tag, valTag] of entries) {
  $(`#${tag}`).on(`click`, (event) => {
    event.preventDefault();
    $(`html, body`).animate({scrollTop: $(`#${valTag}`).offset().top}, 1500);
  });
}