import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

export function initFullpage(handleSetIndex) {
  new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    onLeave: (prev, current) => handleSetIndex(current.index+1),
    normalScrollElements: ".worldModal"
    // navigation: true,
    // menu: '#myMenu',
    // anchors: ['Home', 'KTOPIA', 'Genshin Royal', 'TCG World', 'Legend of Meta', 'Unhinged Extravagence', 'Fighting Cats', 'Dance Challenge', 'Fontaine', 'Footer'],
  });
}