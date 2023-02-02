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

export const TextAndImage = (args) => (
  <Hero {...args} theme={{ '--background-color': '#c2a251', '--color': '#000' }} imageAspectRatio="16:9">
    <Hero.Card>
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button
        variant="secondary"
        role="link"
        // @ts-ignore
        style={{ '--background-color': '#000', '--color': '#fff', '--border-color': '#000' }}
      >
        Button
      </Button>
    </Hero.Card>
    <Hero.Image src={imageFile} />
  </Hero>
);
export const ImageAndText = (args) => (
  <Hero {...args} theme={{ '--background-color': 'var(--color-bus)', '--color': '#fff' }} imageAspectRatio="16:9">
    <Hero.Image src={imageFile} />
    <Hero.Card>
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button
        variant="secondary"
        role="link"
        // @ts-ignore
        style={{ '--background-color': '#fff', '--color': '#000', '--border-color': '#fff' }}
      >
        Button
      </Button>
    </Hero.Card>
  </Hero>
);

export const CenteredTextCard = (args) => (
  <Hero
    {...args}
    theme={{ '--background-color': '#9fc9eb', '--color': '#000', '--koros-color': '#009246' }}
    koros={{ type: 'storm', forcedDirection: 'up' }}
  >
    <Hero.Card centered>
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button variant="secondary" role="link">
        Button
      </Button>
    </Hero.Card>
  </Hero>
);

export const NoImage = (args) => (
  <Hero {...args} theme={{ '--background-color': '#000', '--color': '#fff' }}>
    <Hero.Card>
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button
        variant="secondary"
        role="link"
        // @ts-ignore
        style={{ '--background-color': '#fff', '--color': '#000', '--border-color': '#fff' }}
      >
        Button
      </Button>
    </Hero.Card>
  </Hero>
);

export const NoKoros = (args) => (
  <div style={{ backgroundColor: '#ccc', padding: '60px 10px' }}>
    <Hero {...args} koros={{ hide: true }}>
      <Hero.Card>
        <h1>This is a hero header</h1>
        <p>This is a hero text with lorem ipsum</p>
        <Button variant="secondary" role="link">
          Button
        </Button>
      </Hero.Card>
    </Hero>
  </div>
);

export const WithTopBackgroundImage = (args) => (
  <Hero {...args} theme={{ '--background-color': '#ccc', '--color': '#000', '--koros-color': '#fff' }}>
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
  <div style={{ backgroundColor: '#c2a251', padding: '60px 10px' }}>
    <Hero
      {...args}
      theme={{ '--background-color': '#fff', '--color': '#000', '--koros-color': '#c2a251' }}
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
  </div>
);

export const WithAngledBackgroundImage = (args) => (
  <Hero {...args} theme={{ '--background-color': '#f5a3c7', '--color': '#000' }}>
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
export const WithAngledBackgroundImageVersion2 = (args) => (
  <Hero {...args} theme={{ '--background-color': '#f5a3c7', '--color': '#000' }}>
    <Hero.Card>
      <h1>This is a hero header with too much text for single line</h1>
      <p>This is a hero text with lorem ipsum</p>
      <p>This is a hero text with lorem ipsum</p>
      <p>This is a hero text with lorem ipsum</p>
      <Button variant="secondary" role="link">
        Button
      </Button>
      <p>
        <Button variant="secondary" role="link">
          Button
        </Button>
      </p>
    </Hero.Card>
    <Hero.BackgroundImage src={imageFile} />
  </Hero>
);

export const WideImageVersion = (args) => (
  <Hero {...args} theme={{ '--background-color': '#fff', '--image-position': 'bottom left' }} imageAspectRatio="1:1">
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

export const WithElementAttributes = (args) => (
  <Hero
    {...args}
    id="hero"
    theme={{ '--background-color': '#fff', '--image-position': 'bottom left' }}
    imageAspectRatio="16:9"
    className="hero-style"
  >
    <Hero.Card id="hero-card" className="hero-card-style">
      <h1>This is a hero header</h1>
      <p>This is a hero text with lorem ipsum</p>
      <Button variant="secondary" role="link">
        Button
      </Button>
    </Hero.Card>
    <Hero.WideImage id="hero-image" src={imageFile} />
  </Hero>
);
