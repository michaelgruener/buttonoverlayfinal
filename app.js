//Selectors
const body = document.querySelector('body');
const head = document.querySelector('head');

//Creating open button, overlay and close button
const OButton = document.createElement('button');
const XButton = document.createElement('img');
const overlay = document.createElement('img');

//Adding CSS file to DOM
const CustomCSS = document.createElement('link');
CustomCSS.rel = 'stylesheet';
CustomCSS.href = 'https://michi19935.github.io/buttonoverlayfinal/styles.css';
head.appendChild(CustomCSS);

//Adding JQuery to DOM
const JQuery = document.createElement('script');
JQuery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
head.appendChild(JQuery);

//Style & Position Button
OButton.id = 'OverlayButton';
OButton.textContent = 'Zeig mir das Overlay';
body.appendChild(OButton);

//Style & Position Overlay
overlay.id = 'Overlay';
overlay.src = 'https://cdn.analyticaaperformance.com/werbemittel-new/Werbemittel/DanielHechter/Converify/Sale/Sale50_Desktop.jpg';
body.appendChild(overlay);

//Style & Position XButton
const imgURLXBtn = 'https://lh3.google.com/u/0/d/1LCueRYpuFraZo1fyJXzKgx0WzmgNahgX=w1920-h919-iv2';
XButton.setAttribute('src',imgURLXBtn);
XButton.setAttribute('id','CloseButton');
body.appendChild(XButton);

//Toggle Image & Button Text
const ToggleMessage = () => {
    if(OButton.textContent == 'Zeig mir das Overlay'){
       OButton.textContent = 'Overlay schließen'; 
    } else if (OButton.textContent == 'Overlay schließen'){
    OButton.textContent = 'Zeig mir das Overlay';}
}

document.addEventListener('click', (e) => {
  if(e.target.id=='OverlayButton' || e.target.id=='CloseButton'){
    $(overlay).toggle();
    $(XButton).toggle();
    setTimeout(()=>ToggleMessage(),10);
  }
})






