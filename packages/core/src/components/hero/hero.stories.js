import './hero.css';

export default {
  title: 'Components/Hero',
};

const button = `
    <button type="button" class="hds-button hds-button--secondary hds-button--theme-black" role="link">
      <span class="hds-button__label">Button</span>
    </button>`;

const card = `
      <div class="card">
        <h1>Welcome to the hero story</h1>
        <p>Nullam ut nunc consectetur, accumsan nunc sed, luctus nisl. Curabitur lacinia tristique est, sit amet egestas velit elementum sit amet. Nam lacinia volutpat erat vel faucibus.</p>
        ${button}
      </div>`;

let korosId = 0;
const getKorosSVG = () => {
  korosId = korosId + 1;
  return `
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="85">
        <defs>
          <pattern id="koros_basic-${korosId}" x="0" y="0" width="106" height="85" patternUnits="userSpaceOnUse">
            <path transform="scale(5.3)" d="M0,800h20V0c-4.9,0-5,2.6-9.9,2.6S5,0,0,0V800z"></path>
          </pattern>
        </defs>
        <rect fill="url(#koros_basic-${korosId})" width="100%" height="85"></rect>
      </svg>`;
};

const koros = `
      <div class="hds-koros" style="fill: var(--koros-color); transform: scaleY(-1); margin-bottom: -14px; height: 14px; overflow: hidden;">
        ${getKorosSVG()}
      </div>`;

const image = `<img class="image" src="https://hds.hel.fi/images/homepage/amos58.jpg" aria-hidden="true" alt="">`;

export const BottomWideImage = () => `
<div class="hero wideImage">
  <div class="content singleColumn">
    ${card}
  </div>
  ${koros}
  <div class="imageContainer imageBelowKoros">
    ${image}
  </div>
</div>`;

BottomWideImage.storyName = 'Bottom wide image';

export const AngledKoros = () => `
<style type="text/css">
  .custom-theme {
    content: "";
    --background-color: #f5a3c7;
    --koros-color: var(--background-color);
    --color: #000;
  </style>
<div class="hero custom-theme angledKoros">
   <div class="container">
      <div class="content">
        ${card}
         <div class="mobileKoros">
            ${koros}
         </div>
      </div>
      <div class="hds-koros korosAndBackground" style="fill: var(--koros-color);">
         ${getKorosSVG()}
      </div>
      <div class="background">
        ${image}
      </div>
   </div>
</div>`;
AngledKoros.storyName = 'Angled koros and background';

export const WithoutImage = () => `
  <style type="text/css">
    .custom-theme {
      content: "";
      --background-color: #9fc9eb;
      --color: #000;
      --koros-color: #009246;
    </style>
    <div class="hero custom-theme">
      <div class="content singleColumn">
        ${card}
        <div class="hds-koros__spacer" style="height: 34px;"></div>
      </div>
      <div class="hds-koros" style="fill: var(--koros-color); margin-top: -34px;">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="85">
            <defs>
                <pattern id="koros_pulse-23" x="0" y="0" width="106" height="85" patternUnits="userSpaceOnUse">
                  <path transform="scale(5.3)" d="M0,800h20V0c-5.1,0-5.1,6.4-10,6.4S4.9,0,0,0V800z"></path>
                </pattern>
            </defs>
            <rect fill="url(#koros_pulse-23)" width="100%" height="85"></rect>
          </svg>
      </div>
      </div>
    </div>
  </div>`;
WithoutImage.storyName = 'Without image';

export const ImageRight = () => `
<style type="text/css">
    .custom-theme {
      content: "";
      --background-color: #c2a251;
      --color: #000;
      --koros-color: var(--background-color);
    </style>
<div class="hero custom-theme imageRight">
   <div class="content twoColumns">
      ${card}
      <div class="imageContainer">${image}</div>
   </div>
   ${koros}
   <div class="imageContainer imageBelowKoros">${image}</div>
</div>`;
ImageRight.storyName = 'Image right';

export const ImageLeft = () => `
<style type="text/css">
    .custom-theme {
      content: "";
      --background-color: #c2a251;
      --color: #000;
      --koros-color: var(--background-color);
    </style>
<div class="hero custom-theme imageLeft">
   <div class="content twoColumns">
    <div class="imageContainer">${image}</div>
      ${card}
   </div>
   ${koros}
   <div class="imageContainer imageBelowKoros">${image}</div>
</div>`;
ImageLeft.storyName = 'Image left';

export const BackgroundImage = () => `
    <style type="text/css">
      .custom-theme {
        content: "";
        --background-color: #fff;
        --color: #000;
        --koros-color: var(--background-color);
    </style>
    <div class="hero custom-theme backgroundTop">
        <div class="container">
          <div class="background">${image}</div>
          <div class="hds-koros topKoros" style="fill: var(--koros-color); margin-top: -14px; height: 14px; overflow: hidden;">
            ${getKorosSVG()}
          </div>
          <div class="content singleColumn">
              ${card}
          </div>
        </div>
        <div class="hds-koros bottomKoros" style="fill: var(--koros-color); margin-top: -14px; height: 14px; overflow: hidden;">
          ${getKorosSVG()}
        </div>
    </div>`;
ImageLeft.storyName = 'Image left';
