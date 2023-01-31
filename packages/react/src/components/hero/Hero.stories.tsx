import React from 'react';

import { Hero } from './Hero';
import { Button } from '../button/Button';
// @ts-ignore
import imageFile from '../../assets/img/placeholder_1920x1080.jpg';

export default {
  component: Hero,
  title: 'Components/Hero',
  parameters: {
    controls: { expanded: true },
  },
  args: {},
};

export const Example = (args) => (
  <Hero {...args} theme={{ '--background-color': '#ccc', '--color': '#000' }} imageAspectRatio="4:3">
    <Hero.Card>
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button variant="secondary" role="link">
        Button
      </Button>
    </Hero.Card>
    <Hero.Image src={imageFile} />
  </Hero>
);

export const JustTextCard = (args) => (
  <Hero {...args} theme={{ '--background-color': '#9fc9eb', '--color': '#000', '--koros-color': '#009246' }}>
    <Hero.Card centered>
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button variant="secondary" role="link">
        Button
      </Button>
    </Hero.Card>
  </Hero>
);

export const WithTopBackgroundImage = (args) => (
  <Hero {...args} theme={{ '--background-color': '#ccc', '--color': '#000' }}>
    <Hero.BackgroundImage src={imageFile} />
    <Hero.Card>
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button variant="secondary" role="link">
        Button
      </Button>
    </Hero.Card>
  </Hero>
);

export const WithTopBackgroundImageCustomKoros = (args) => (
  <Hero
    {...args}
    theme={{ '--background-color': '#ccc', '--color': '#000', '--koros-color': '#f00' }}
    koros={{ type: 'pulse' }}
  >
    <Hero.BackgroundImage src={imageFile} />
    <Hero.Card>
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button variant="secondary" role="link">
        Button
      </Button>
    </Hero.Card>
  </Hero>
);

export const WithAngledBackgroundImage = (args) => (
  <Hero {...args} theme={{ '--background-color': '#ccc', '--color': '#000' }}>
    <Hero.Card>
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button variant="secondary" role="link">
        Button
      </Button>
    </Hero.Card>
    <Hero.BackgroundImage src={imageFile} />
  </Hero>
);
export const WideImageVersion = (args) => (
  <Hero
    {...args}
    theme={{ '--background-color': '#ccc', '--color': '#000', '--image-position': 'bottom left' }}
    imageAspectRatio="1:1"
  >
    <Hero.Card>
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button variant="secondary" role="link">
        Button
      </Button>
    </Hero.Card>
    <Hero.WideImage src={imageFile} />
  </Hero>
);
