import React from 'react';

import styles from './Logo.module.css';
import classNames from '../../utils/classNames';

export type LogoLanguage = 'fi' | 'sv' | 'ru';
export type LogoSize = 'full' | 'small' | 'medium' | 'large';

export type LogoProps = {
  /**
   * Additional class names to apply to the logo
   */
  className?: string;
  /**
   * Adds a data-testid attribute to the root element with the given value
   */
  dataTestId?: string;
  /**
   * The language of the Helsinki-logo
   * @default 'fi'
   */
  language?: LogoLanguage;
  /**
   * The size of the logo
   * @default 'full'
   */
  size?: LogoSize;
  /**
   * Override or extend the styles applied to the component
   */
  style?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<'svg'>;

const LogoFI = (props): React.ReactElement => (
  <svg viewBox="0 0 78 36" title="Helsingin kaupunki" role="img" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M75.753 2.251v20.7c0 3.95-3.275 7.178-7.31 7.178h-22.26c-2.674 0-5.205.96-7.183 2.739a10.749 10.749 0 00-7.183-2.74H9.509c-4.003 0-7.247-3.21-7.247-7.177V2.25h73.491zM40.187 34.835a8.47 8.47 0 016.012-2.471h22.245c5.268 0 9.556-4.219 9.556-9.413V0H0v22.935c0 5.194 4.256 9.413 9.509 9.413h22.308c2.263 0 4.398.882 6.012 2.471L39.016 36l1.17-1.165z"
      fill="currentColor"
    />
    <path
      d="M67.522 11.676c0 .681-.556 1.177-1.255 1.177-.7 0-1.255-.496-1.255-1.177 0-.682.556-1.178 1.255-1.178.7-.03 1.255.465 1.255 1.178zm-2.352 9.622h2.178v-7.546H65.17v7.546zm-3.909-4.556l2.845 4.556h-2.368l-1.907-3.022-1.033 1.271v1.75h-2.161V10.453h2.16v5.004c0 .93-.11 1.86-.11 1.86h.047s.509-.821.938-1.41l1.653-2.154h2.542l-2.606 2.99zm-6.817-.278c0-1.875-.938-2.898-2.432-2.898-1.271 0-1.939.728-2.32 1.426h-.048l.112-1.24h-2.162v7.546h2.162V16.82c0-.868.524-1.472 1.335-1.472.81 0 1.16.527 1.16 1.534v4.416h2.177l.016-4.834zm-8.931-4.788c0 .681-.557 1.177-1.256 1.177-.7 0-1.255-.496-1.255-1.177 0-.682.556-1.178 1.255-1.178.715-.03 1.256.465 1.256 1.178zm-2.352 9.622h2.177v-7.546H43.16v7.546zm-3.75-2.107c0-.605-.859-.729-1.86-1.008-1.16-.294-2.622-.867-2.622-2.308 0-1.426 1.398-2.324 3.051-2.324 1.541 0 2.956.712 3.544 1.72l-1.86 1.022c-.19-.666-.762-1.193-1.62-1.193-.557 0-1.018.232-1.018.682 0 .573 1.018.635 2.162.991 1.208.372 2.32.915 2.32 2.294 0 1.518-1.446 2.417-3.115 2.417-1.811 0-3.242-.744-3.877-1.952l1.89-1.039c.24.822.922 1.441 1.955 1.441.62 0 1.05-.248 1.05-.743zm-6.882-8.677h-2.177v8.692c0 .775.175 1.348.509 1.705.35.356.89.526 1.636.526.255 0 .525-.03.78-.077.27-.062.476-.14.65-.233l.191-1.425a2.07 2.07 0 01-.46.124c-.128.03-.287.03-.461.03-.286 0-.414-.077-.509-.216-.111-.14-.159-.387-.159-.744v-8.382zm-7.246 4.57c-.795 0-1.446.558-1.621 1.581h3.05c.017-.899-.587-1.58-1.43-1.58zm3.353 3.007H23.63c.095 1.224.794 1.828 1.7 1.828.81 0 1.367-.527 1.494-1.24l1.828 1.007c-.54.961-1.7 1.798-3.322 1.798-2.16 0-3.75-1.472-3.75-3.951 0-2.464 1.62-3.951 3.703-3.951 2.081 0 3.464 1.44 3.464 3.486-.016.604-.111 1.023-.111 1.023zm-11.077 3.207h2.257V10.916h-2.257v4.107h-4.243v-4.091H11.06v10.366h2.256v-4.292h4.243v4.292z"
      fill="currentColor"
    />
  </svg>
);

const LogoSV = (props): React.ReactElement => (
  <svg viewBox="0 0 104 36" title="Helsingfors stad" role="img" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M103.105 0v22.935c0 5.179-4.266 9.397-9.524 9.397l-34.867.032a8.46 8.46 0 00-5.981 2.471L51.553 36l-1.181-1.165a8.405 8.405 0 00-5.982-2.471H9.476C4.25 32.364 0 28.145 0 22.966V0h103.105zm-2.236 2.235H2.251v20.731c0 3.951 3.243 7.163 7.225 7.163H44.39c2.676 0 5.195.96 7.162 2.739 1.968-1.78 4.486-2.74 7.162-2.74l34.867-.03c4.014 0 7.288-3.212 7.288-7.163v-20.7zM62.02 12.09l2 1.15c-.032 1.007-.489 1.479-1.354 1.479-.205 0-.473-.047-.614-.094v.062c.425.331.944.882.944 1.763 0 1.512-1.464 2.472-3.274 2.472-.834 0-1.558.267-1.558.677 0 .315.267.456.913.456.645 0 1.369-.126 2.203-.126 1.653 0 2.755.661 2.755 2.157 0 1.794-2.015 2.503-4.282 2.503-2.109 0-4.03-.598-4.03-1.952 0-.819.85-1.307 1.622-1.448v-.048c-.582-.173-1.102-.55-1.102-1.212 0-.865.882-1.338 1.779-1.527v-.047c-.834-.33-1.543-1.007-1.543-2.188 0-1.511 1.322-2.55 3.133-2.55.692 0 1.086.142 1.605.142.646 0 .882-.362.882-.945 0-.267-.047-.535-.079-.724zm-1.731 9.54c-.93 0-2.724.078-2.724.786 0 .536.898.787 2.157.803 1.417 0 2.235-.267 2.235-.913 0-.504-.755-.677-1.668-.677zm28.995-8.013c1.527 0 2.928.724 3.526 1.747l-1.842 1.04a1.624 1.624 0 00-1.606-1.213c-.55 0-1.007.236-1.007.677 0 .582 1.007.645 2.157 1.008 1.196.377 2.298.928 2.298 2.33 0 1.542-1.433 2.455-3.101 2.455-1.795 0-3.211-.771-3.841-1.984l1.873-1.054c.252.834.913 1.464 1.936 1.464.598 0 1.023-.268 1.023-.74 0-.614-.85-.756-1.841-1.023-1.165-.315-2.613-.882-2.613-2.346 0-1.448 1.385-2.36 3.038-2.36zm-14.655 0c2.078 0 3.699 1.527 3.699 4.014s-1.606 4.014-3.7 4.014c-2.109 0-3.714-1.527-3.714-4.014s1.605-4.014 3.715-4.014zm-49.68 0c2.063 0 3.432 1.464 3.432 3.542.016.614-.094 1.039-.094 1.039h-4.974c.094 1.243.787 1.857 1.684 1.857.803 0 1.354-.535 1.48-1.26l1.81 1.024c-.535.976-1.684 1.826-3.29 1.826-2.14 0-3.715-1.495-3.715-4.014 0-2.487 1.606-4.014 3.668-4.014zm13.066-.016c1.527 0 2.928.724 3.526 1.748l-1.842 1.039c-.189-.677-.755-1.213-1.605-1.213-.551 0-1.008.237-1.008.677 0 .583 1.008.646 2.14 1.008 1.197.378 2.3.928 2.3 2.33 0 1.542-1.433 2.44-3.086 2.44-1.795 0-3.211-.756-3.841-1.984l1.873-1.055c.236.835.913 1.464 1.936 1.464.583.016 1.008-.236 1.008-.724 0-.614-.85-.74-1.842-1.023-1.165-.3-2.597-.882-2.597-2.345 0-1.449 1.385-2.362 3.038-2.362zM32.3 10.53v8.501c0 .362.047.614.157.756.095.157.22.22.504.22.173 0 .33 0 .456-.031a2.01 2.01 0 00.457-.126l-.189 1.448a2.532 2.532 0 01-.645.236c-.252.047-.52.079-.772.079-.74 0-1.275-.174-1.621-.536-.33-.362-.504-.944-.504-1.731V10.53h2.157zm19.818 3.086c1.48 0 2.408 1.023 2.408 2.928v4.911h-2.156V16.97c0-1.007-.362-1.543-1.165-1.543s-1.322.614-1.322 1.496v4.549h-2.141v-7.666h2.14l-.11 1.26h.048c.378-.71 1.039-1.449 2.298-1.449zm16.733-3.337a3.27 3.27 0 012.739 1.4l-1.858 1.134c-.031-.456-.252-.928-.771-.928-.535 0-.787.409-.787 1.086v.834h1.684v1.637h-1.684v6.029h-2.14v-6.029h-1.181v-1.637h1.18v-.819c0-1.794 1.18-2.707 2.818-2.707zm14.812 3.384c1.086 0 1.684.913 1.684 2.03 0 .505-.078.898-.078.898l-1.936 1.118c.031-.22.126-.74.126-1.26 0-.503-.19-.975-.725-.975-.676 0-.944.63-.944 1.62v4.377h-2.157v-7.65h2.157l-.11 1.259h.047c.378-.74.96-1.417 1.936-1.417zm-70.52-2.723v4.171h4.203v-4.17h2.235v10.514h-2.235v-4.36h-4.203v4.36h-2.235V10.94h2.235zm32.332 2.85v7.665H43.32V13.79h2.156zm29.153 1.463c-1.07 0-1.543 1.008-1.543 2.377 0 1.37.472 2.377 1.543 2.377 1.054 0 1.527-1.007 1.527-2.377 0-1.37-.473-2.377-1.527-2.377zm-14.891-.189c-.724 0-1.307.473-1.307 1.197 0 .74.583 1.212 1.307 1.196.724 0 1.306-.472 1.306-1.196s-.582-1.197-1.306-1.197zm-34.773.095c-.787 0-1.432.566-1.605 1.605h3.038c0-.913-.598-1.605-1.433-1.605zm19.44-4.675c.693 0 1.244.503 1.244 1.196s-.55 1.196-1.243 1.196c-.709 0-1.244-.503-1.244-1.196s.551-1.196 1.244-1.196z"
      fill="currentColor"
    />
  </svg>
);

const LogoRU = (props): React.ReactElement => (
  <svg viewBox="0 0 111 40" title="Xельсинки" role="img" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M111,0 L111,25.5004366 C111,31.2654012 106.262725,35.9554377 100.439986,35.9554377 L63.3562072,35.9554377 C60.8502714,35.9554377 58.4945561,36.9288232 56.7222777,38.6957928 L55.4161673,40 L54.1094108,38.6957928 C52.3377785,36.9288232 49.9817401,35.9554377 47.4761274,35.9554377 L10.495403,35.9554377 C4.70820006,35.9554377 0,31.2654012 0,25.5004366 L0,0 L111,0 Z M108.516032,2.48617534 L2.48364499,2.48617534 L2.48364499,25.5004366 C2.48364499,29.8942535 6.07795224,33.4692624 10.495403,33.4692624 L47.4761274,33.4692624 C50.4372473,33.4692624 53.2336093,34.5448372 55.4161673,36.5110112 C57.5993714,34.5445138 60.3950872,33.4692624 63.3562072,33.4692624 L100.439986,33.4692624 C104.892973,33.4692624 108.516032,29.8942535 108.516032,25.5004366 L108.516032,2.48617534 Z" />
    <path d="M26.7583027,15.102351 C29.0393923,15.102351 30.5600111,16.7260615 30.5600111,19.0434305 C30.5600111,19.2767644 30.5466196,19.4852293 30.5288503,19.6591371 L30.5060024,19.8506189 L30.5060024,19.8506189 L30.4714217,20.0675005 L30.4714217,20.0675005 L30.441773,20.2105229 L24.9333663,20.2105229 C25.0348055,21.5978398 25.8117522,22.2740355 26.8086992,22.2740355 C27.6638105,22.2740355 28.256947,21.7345249 28.4265488,20.9795155 L28.447879,20.870226 L30.4588949,22.0036866 C29.8673817,23.0860525 28.583239,24.0332439 26.8086992,24.0332439 C24.4264934,24.0332439 22.6858744,22.3759014 22.6858744,19.5676357 C22.6858744,16.7939721 24.4604142,15.102351 26.7583027,15.102351 Z M55.6956097,15.102351 C57.8080647,15.102351 59.0922074,16.5061605 59.3626042,17.8760146 L57.1829538,18.9926592 C57.1829538,17.8591987 56.7432762,16.9291466 55.6956097,16.9291466 C54.5468269,16.9291466 54.0567529,18.0454678 54.0567529,19.5676357 C54.0567529,21.0901271 54.5468269,22.2067717 55.6956097,22.2067717 C56.7432762,22.2067717 57.1829538,21.2763962 57.1829538,20.1429357 L59.3626042,21.2592569 C59.0922074,22.6294344 57.8080647,24.0332439 55.6956097,24.0332439 C53.3638004,24.0332439 51.6403033,22.3419461 51.6403033,19.5676357 C51.6403033,16.7939721 53.3638004,15.102351 55.6956097,15.102351 Z M40.276206,15.1194903 L40.276206,23.8301588 L38.0119152,23.8301588 L38.0119152,16.84442 L35.8380797,16.84442 L35.8380797,20.0077612 C35.8380797,22.1049057 35.2821025,23.5261779 33.4904408,24.0332439 L31.4125526,22.4431653 C33.0006898,22.1049057 33.5414834,21.5299292 33.5414834,19.7878602 L33.5340532,15.1194903 L40.276206,15.1194903 Z M12.0260365,12.1252789 L14.7800783,12.1252789 L16.2717464,14.9725234 L16.2717464,14.9725234 L16.4341748,15.2953441 L16.4341748,15.2953441 L16.6788491,15.8037339 L16.6788491,15.8037339 L16.9768507,16.4553892 L16.9768507,16.4553892 L17.0275702,16.4553892 L17.4430426,15.6010329 L17.4430426,15.6010329 L17.7660509,14.9703444 L17.7660509,14.9703444 L19.2918611,12.1252789 L21.8772683,12.1252789 L18.7678662,17.7579795 L22.2151836,23.8301588 L19.4776175,23.8301588 L17.7880412,20.7347282 L17.3477821,19.8934851 L17.3477821,19.8934851 L16.9936495,19.1957443 L16.9936495,19.1957443 L16.9429299,19.1957443 L16.4296666,20.2017612 L16.4296666,20.2017612 L16.1488613,20.7347282 L16.1488613,20.7347282 L14.4589619,23.8301588 L11.8060362,23.8301588 L15.1858351,17.8423827 L12.0260365,12.1252789 Z M73.6329021,15.3089933 L73.6329021,18.4982052 L76.7384275,18.4982052 L76.7384275,15.3089933 L79.0263013,15.3089933 L79.0263013,23.8301588 L76.7384275,23.8301588 L76.7384275,20.5300262 L73.6329021,20.5300262 L73.6329021,23.8301588 L71.3443822,23.8301588 L71.3443822,15.3089933 L73.6329021,15.3089933 Z M81.7509452,15.3089933 L84.038819,15.3089933 L84.0382826,17.7625146 L84.0382826,17.7625146 L84.0272597,18.2272853 L84.0272597,18.2272853 L84.0073592,18.6676664 L84.0073592,18.6676664 L83.9648394,19.3234809 L83.9648394,19.3234809 L84.0139437,19.3234809 L84.169379,19.0264906 L84.169379,19.0264906 L84.2968993,18.7938994 L84.2968993,18.7938994 L84.513041,18.4178519 L84.513041,18.4178519 L84.6376281,18.2110698 L84.6376281,18.2110698 L84.7713017,17.9974092 L84.7713017,17.9974092 L84.9126187,17.7810904 L84.9126187,17.7810904 L86.5974127,15.3089933 L89.2177098,15.3089933 L86.5851366,18.7937781 L89.3776219,23.8301588 L86.8432573,23.8301588 L85.1087763,20.6778126 L84.038819,22.143065 L84.038819,23.8301588 L81.7509452,23.8301588 L81.7509452,15.3089933 Z M61.4012413,15.3066003 L63.529526,15.3066003 L63.5289835,19.1888185 L63.5289835,19.1888185 L63.5216221,19.5157585 L63.5216221,19.5157585 L63.5077012,19.8578907 L63.5077012,19.8578907 L63.4770492,20.4030472 L63.4770492,20.4030472 L63.4309943,21.0450474 L63.4800987,21.0450474 L63.7716874,20.253641 L63.7716874,20.253641 L63.9311384,19.8405724 L64.0786871,19.4774947 C64.0944245,19.44017 64.1098452,19.4041507 64.1248513,19.3697367 L64.1685284,19.2716101 L65.989588,15.3066003 L68.9419855,15.3066003 L68.9419855,23.8280891 L66.8259768,23.8280891 L66.8267222,19.9455089 L66.8267222,19.9455089 L66.8322848,19.7302493 L66.8322848,19.7302493 L66.8423864,19.5050527 L66.8423864,19.5050527 L66.8719349,19.0505018 L66.8719349,19.0505018 L66.9236002,18.4544812 L66.9236002,18.4544812 L66.9613367,18.0893186 L66.9119094,18.0893186 L66.5976118,18.8667578 L66.5976118,18.8667578 L66.3325494,19.5013201 L66.3325494,19.5013201 L66.1737292,19.8627559 L64.0961641,23.8280891 L61.4012413,23.8280891 L61.4012413,15.3066003 Z M93.1489632,15.3066003 L93.1489632,19.0869579 C93.1489632,19.2860499 93.1422578,19.5145216 93.1323455,19.7434955 L93.1092816,20.193557 L93.1092816,20.193557 L93.0504315,21.0450474 L93.0995358,21.0450474 L93.4288994,20.1548475 L93.4288994,20.1548475 L93.6009648,19.7147112 L93.6009648,19.7147112 L93.7446087,19.3697367 L93.7446087,19.3697367 L93.7882885,19.2716101 L95.6090252,15.3066003 L98.5614226,15.3066003 L98.5614226,23.8280891 L96.445737,23.8280891 L96.4464806,19.9455089 L96.4464806,19.9455089 L96.4520299,19.7302493 L96.4520299,19.7302493 L96.4621074,19.5050527 L96.4621074,19.5050527 L96.4915854,19.0505018 L96.4915854,19.0505018 L96.5349255,18.5406549 L96.5349255,18.5406549 L96.5807739,18.0893186 L96.5313465,18.0893186 L96.173661,18.9724125 L96.173661,18.9724125 L95.9607946,19.4811094 L95.9607946,19.4811094 L95.8453327,19.74729 L95.8453327,19.74729 L95.7934894,19.8627559 L93.7156012,23.8280891 L91.0206784,23.8280891 L91.0206784,15.3066003 L93.1489632,15.3066003 Z M44.9008964,14.9924652 L44.9008964,18.0646121 L47.1054221,18.0646121 C47.6187561,18.0646121 48.0778169,18.1212043 48.4819584,18.234712 C48.8860999,18.3482198 49.2282149,18.5241406 49.5076573,18.7615044 C49.7874227,18.9991915 50.0009619,19.3005853 50.1485979,19.6653624 C50.2959109,20.0301394 50.3695674,20.4612101 50.3695674,20.9582511 C50.3695674,21.407108 50.30851,21.7903179 50.1867184,22.1094978 C50.0642806,22.4280309 49.9082452,22.6941759 49.7176429,22.9076092 C49.5267175,23.1210426 49.3144705,23.2888788 49.0805789,23.4104712 C48.8466872,23.5320635 48.6176414,23.6239045 48.3940875,23.6859942 C48.1705336,23.748084 47.9631325,23.7872134 47.7725302,23.8033826 L47.5649326,23.818905 L47.5649326,23.818905 L47.4001953,23.8266662 L47.4001953,23.8266662 L42.7422445,23.8276364 L42.7422445,14.9924652 L44.9008964,14.9924652 Z M46.5407224,19.7908353 L44.9008964,19.7908353 L44.9008964,22.1014132 L46.7235714,22.1014132 C46.8915598,22.1014132 47.057933,22.0865375 47.2233371,22.0564628 C47.3887411,22.0270349 47.5386385,21.9704427 47.6733523,21.8863629 C47.8080662,21.8026065 47.9162895,21.6865117 47.9976993,21.5377551 C48.0791091,21.3893219 48.119814,21.1959383 48.119814,20.9582511 C48.119814,20.7260615 48.0778169,20.5339715 47.9938227,20.3829512 C47.9098284,20.2316075 47.7957901,20.1126023 47.6504155,20.0262588 C47.5053639,19.9399153 47.3380215,19.8787957 47.1470961,19.8435469 C47.0041444,19.8173528 46.8546508,19.8007996 46.6987517,19.7941601 L46.5407224,19.7908353 Z M26.7583027,16.827604 C25.9162066,16.827604 25.2292817,17.4025896 25.0100089,18.4777051 L24.9840859,18.6207677 L28.3467629,18.6207677 C28.3467629,17.5888497 27.6877312,16.827604 26.7583027,16.827604 Z" />
  </svg>
);

export const Logo = ({ className, dataTestId, language = 'fi', size = 'full', style, ...rest }: LogoProps) => {
  const props = {
    className: classNames(styles.logo, size !== 'full' && styles[size], className),
    style,
    'data-testid': dataTestId,
    ...rest,
  };

  if (language === 'sv') {
    return <LogoSV {...props} />;
  }

  if (language === 'ru') {
    return <LogoRU {...props} />;
  }

  return <LogoFI {...props} />;
};
