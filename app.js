//Selectors
const body = document.querySelector('body');
const head = document.querySelector('head');

//Creating open button, parent element, overlay-child and close-child button
const OButton = document.createElement('button');
const ParentElement = document.createElement('div');
const XButton = document.createElement('img');
const overlay = document.createElement('img');

//Adding JQuery to DOM
const JQuery = document.createElement('script');
JQuery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
head.appendChild(JQuery);

//Adding CSS file to DOM
const CustomCSS = document.createElement('link');
CustomCSS.rel = 'stylesheet';
CustomCSS.href = 'https://michi19935.github.io/buttonoverlayfinal/styles.css';
head.appendChild(CustomCSS);

//Style & Position Button
OButton.id = 'OverlayButton';
OButton.textContent = 'Zeig mir das Overlay';
body.appendChild(OButton);

//Create Parent Element
ParentElement.classList = 'ParentElement';
body.appendChild(ParentElement);

//Style & Position Overlay
overlay.id = 'Overlay';
overlay.src = 'https://cdn.analyticaaperformance.com/werbemittel-new/Werbemittel/DanielHechter/Converify/Sale/Sale50_Desktop.jpg';
ParentElement.appendChild(overlay);

//Style & Position XButton
XButton.id = 'CloseButton';
XButton.src = 'https://lh3.google.com/u/0/d/1LCueRYpuFraZo1fyJXzKgx0WzmgNahgX=w1920-h919-iv2';
ParentElement.appendChild(XButton);

//Toggle Image & Button Text
const ToggleMessage = () => {
    if(OButton.textContent == 'Zeig mir das Overlay'){
       OButton.textContent = 'Overlay schließen'; 
    } else if (OButton.textContent == 'Overlay schließen'){
    OButton.textContent = 'Zeig mir das Overlay';}
}

document.addEventListener('click', (e) => {
  if(e.target.id=='OverlayButton' || e.target.id=='CloseButton'){
    $(ParentElement).toggle();
    setTimeout(()=>ToggleMessage(),10);
  }
})








