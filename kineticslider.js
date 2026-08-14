// Use the portrait artwork on phones and the original artwork elsewhere.
// Both files should exist in the site's /images directory.
const isMobileHero = window.matchMedia("(max-width: 768px)").matches;

const images = [
  isMobileHero
    ? "images/Data_Visualization4_mobile.png"
    : "images/Data_Visualization4.png",
];

// The ObsessedQuant wordmark is already part of the hero artwork, so the
// slider's generated title/subtitle text is intentionally disabled.
const texts = [["", ""]];

const rgbKineticSliderInstance = new rgbKineticSlider({
  // images and content sources
  slideImages: images,
  itemsTitles: texts,

  // displacement images sources
  backgroundDisplacementSprite: "./images/map-9.jpg",
  cursorDisplacementSprite: "./images/displace-circle.png",

  // cursor displacement effect
  cursorImgEffect: true,
  cursorTextEffect: false,
  cursorScaleIntensity: 0.65,
  cursorMomentum: 0.14,

  // swipe
  swipe: true,
  swipeDistance: window.innerWidth * 0.4,
  swipeScaleIntensity: 2,

  // slide transition
  slideTransitionDuration: 1,
  transitionScaleIntensity: 30,
  transitionScaleAmplitude: 160,

  // image RGB effect
  imagesRgbEffect: true,
  imagesRgbIntensity: 0.9,
  navImagesRgbIntensity: 80,

  // Text is baked into the supplied artwork.
  textsDisplay: false,
  textsSubTitleDisplay: false,
  textsTiltEffect: false,
  googleFonts: ["Playfair Display:700", "Roboto:400"],
  buttonMode: false,
  textsRgbEffect: false,
  textsRgbIntensity: 0.03,
  navTextsRgbIntensity: 15,

  textTitleColor: "white",
  textTitleSize: 125,
  mobileTextTitleSize: 60,
  textTitleLetterspacing: 3,

  textSubTitleColor: "white",
  textSubTitleSize: 21,
  mobileTextSubTitleSize: 21,
  textSubTitleLetterspacing: 2,
  textSubTitleOffsetTop: 90,
  mobileTextSubTitleOffsetTop: 90,
});
