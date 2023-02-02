import React from 'react';

import { Hero, HeroProps } from './Hero';
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

type DefaultCardContentProps = {
  title?: string;
  text?: string;
  buttonStyle?: Record<string, string>;
};
const defaultText =
  'Nullam ut nunc consectetur, accumsan nunc sed, luctus nisl. Curabitur lacinia tristique est, sit amet egestas velit elementum sit amet. Nam lacinia volutpat erat vel faucibus.';
const DefaultCardContent = (props: DefaultCardContentProps) => {
  const { title, text, buttonStyle } = props;
  const h1Text = title || 'Welcome to the page hero';
  const paragraphText = text || defaultText;
  return (
    <>
      <h1>{h1Text}</h1>
      <p>{paragraphText}</p>
      <Button
        variant="secondary"
        role="link"
        // @ts-ignore
        style={buttonStyle}
      >
        Click me
      </Button>
    </>
  );
};

export const ImageLeftOrRight = (args) => (
  <Hero theme={{ '--background-color': '#c2a251', '--color': '#000' }} imageAspectRatio="16:9">
    {args?.imagePosition === 'left' && <Hero.Image src={imageFile} />}
    <Hero.Card>
      <DefaultCardContent buttonStyle={{ '--background-color': '#000', '--color': '#fff', '--border-color': '#000' }} />
    </Hero.Card>
    {args?.imagePosition === 'right' && <Hero.Image src={imageFile} />}
  </Hero>
);

ImageLeftOrRight.argTypes = {
  imagePosition: {
    options: ['right', 'left'],
    control: { type: 'radio' },
    defaultValue: 'right',
  },
};

export const WithoutImage = (args) => {
  const heroProps: HeroProps = {};
  const defaultContentProps: DefaultCardContentProps = {};
  if (args.heroType === 'blueAndGreen') {
    heroProps.theme = { '--background-color': '#9fc9eb', '--color': '#000', '--koros-color': '#009246' };
    heroProps.koros = { type: 'storm', forcedDirection: 'up' };
  } else if (args.heroType === 'blackAndWhite') {
    heroProps.theme = { '--background-color': '#000', '--color': '#fff' };
    defaultContentProps.buttonStyle = { '--background-color': '#fff', '--color': '#000', '--border-color': '#fff' };
  } else if (args.heroType === 'whiteWithoutKoros') {
    heroProps.koros = { hide: true };
    heroProps.theme = { '--background-color': '#fff', '--color': '#000' };
    defaultContentProps.buttonStyle = {};
  }
  return (
    <Hero {...heroProps}>
      <Hero.Card centered={args.heroType === 'blueAndGreen'}>
        <DefaultCardContent {...defaultContentProps} />
      </Hero.Card>
    </Hero>
  );
};

WithoutImage.argTypes = {
  heroType: {
    options: ['blackAndWhite', 'blueAndGreen', 'whiteWithoutKoros'],
    control: { type: 'radio' },
    defaultValue: 'blueAndGreen',
  },
};

export const WithBackgroundImage = (args) => {
  const heroProps: HeroProps = {};
  if (args.imagePosition === 'top') {
    heroProps.theme = { '--background-color': '#ccc', '--color': '#000', '--koros-color': '#fff' };
  } else if (args.imagePosition === 'right') {
    heroProps.theme = { '--background-color': '#f5a3c7', '--color': '#000' };
  }

  return (
    <Hero {...heroProps}>
      {args?.imagePosition === 'top' && <Hero.BackgroundImage src={imageFile} />}
      <Hero.Card>
        {!args.demoLongContent ? (
          <DefaultCardContent
            buttonStyle={{ '--background-color': '#000', '--color': '#fff', '--border-color': '#000' }}
          />
        ) : (
          <Hero.Card>
            <h1>This is a header with too much text for single line</h1>
            <p>{defaultText}</p>
            <p>{defaultText}</p>
            <Button variant="secondary" role="link">
              Click me once!
            </Button>
            <p>
              <Button variant="secondary" role="link">
                Never click me!
              </Button>
            </p>
          </Hero.Card>
        )}
      </Hero.Card>
      {args?.imagePosition === 'right' && <Hero.BackgroundImage src={imageFile} />}
    </Hero>
  );
};

WithBackgroundImage.argTypes = {
  imagePosition: {
    options: ['top', 'right'],
    control: { type: 'radio' },
    defaultValue: 'top',
  },
  demoLongContent: {
    control: 'boolean',
  },
};

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
