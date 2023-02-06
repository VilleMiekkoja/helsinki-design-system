import React from 'react';

import { Hero, HeroProps } from './Hero';
import { Button } from '../button/Button';
// @ts-ignore
import imageFile from '../../assets/img/placeholder_1920x1080.jpg';
import { Navigation } from '../navigation/Navigation';
import { Section } from '../section/Section';

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
  const h1Text = title || 'Welcome to the hero story';
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

const NavigationComponent = () => (
  <Navigation menuToggleAriaLabel="Menu" skipTo="#content" skipToContentLabel="Skip to main content">
    {/* NAVIGATION ROW */}
    <Navigation.Row ariaLabel="Main navigation">
      <Navigation.Item href="#" label="Link" active onClick={(e) => e.preventDefault()} />
      <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
      <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
      <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
      <Navigation.Dropdown label="Dropdown">
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
      </Navigation.Dropdown>
    </Navigation.Row>

    {/* NAVIGATION ACTIONS */}
    <Navigation.Actions>
      {/* LANGUAGE SELECTOR */}
      <Navigation.LanguageSelector label="FI">
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} lang="fi" label="Suomeksi" />
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} lang="sv" label="På svenska" />
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} lang="en" label="In English" />
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} lang="fr" label="En français" />
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} lang="de" label="Auf deutsch" />
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} lang="ru" label="По-русски" />
      </Navigation.LanguageSelector>
    </Navigation.Actions>
  </Navigation>
);

export const ImageLeftOrRight = (args) => (
  <Hero koros={args.koros} theme={{ '--background-color': '#c2a251', '--color': '#000', ...args.theme }}>
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
    heroProps.koros = { type: 'pulse', forcedDirection: 'up' };
  } else if (args.heroType === 'blackAndWhite') {
    heroProps.theme = { '--background-color': '#000', '--color': '#fff' };
    defaultContentProps.buttonStyle = { '--background-color': '#fff', '--color': '#000', '--border-color': '#fff' };
  } else if (args.heroType === 'whiteWithoutKoros') {
    heroProps.koros = { hide: true };
    heroProps.theme = { '--background-color': '#fff', '--color': '#000' };
    defaultContentProps.buttonStyle = {};
  }
  heroProps.theme = { ...heroProps.theme, ...args.theme };
  heroProps.koros = { ...heroProps.koros, ...args.koros };
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
    description: 'Choose a preset hero type',
  },
};

export const WithBackgroundImage = (args) => {
  const heroProps: HeroProps = {};
  if (args.imagePosition === 'top') {
    heroProps.theme = { '--background-color': '#fff', ...args.theme };
  } else if (args.imagePosition === 'right') {
    heroProps.theme = { '--background-color': '#f5a3c7', '--color': '#000', ...args.theme };
  }

  heroProps.theme = { ...heroProps.theme, ...args.theme };
  heroProps.koros = { ...args.koros };

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

export const BottomWideImage = (args) => (
  <Hero koros={args.koros} theme={{ '--background-color': '#fff', '--image-position': 'bottom left', ...args.theme }}>
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

export const XtraStyling = (args) => (
  <div>
    <style>
      {`
        .hero {
          margin: 20px 0;
          padding: 50px;
          border: 4px solid rgba(10,147,175,1);
          background: linear-gradient(291deg, rgba(2,0,36,1) 0%, rgba(15,170,203,1) 60%, rgba(10,147,175,1) 100%);
          --image-position: top left;
          --background-color: rgba(10,147,175,1);
        }
        #hero{
          --bottom-koros-color: rgba(2,0,36,1);
          
        }
        .hero-card {
          border: 2px solid rgba(15,170,203,1);
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          
        }
        .hero-card h1,
        .hero-card p,
        .hero-card button {
          color: #fff;
          font-weight: 600;
          border-color: #fff !important;
          max-width:500px;
          
        }
      `}
    </style>
    <Hero id="hero" className="hero" koros={args.koros} theme={args.theme}>
      <Hero.Card id="hero-card" className="hero-card">
        <DefaultCardContent />
      </Hero.Card>
      <Hero.WideImage id="hero-image" src={imageFile} />
    </Hero>
  </div>
);

export const PlaygroundForKoros = (args) => {
  const heroProps: HeroProps = {
    koros: {
      type: args.type,
      dense: !!args.dense,
      hide: !!args.hide,
      forcedDirection: args.forcedDirection || undefined,
      ...args.koros,
    },
    theme: {
      '--background-color': '#9fc9eb',
      '--koros-color': args.color || '#9fc9eb',
      ...args.theme,
    },
  };

  return (
    <Hero {...heroProps}>
      <Hero.Image src={imageFile} />
      <Hero.Card>
        <DefaultCardContent />
      </Hero.Card>
    </Hero>
  );
};

PlaygroundForKoros.argTypes = {
  type: {
    defaultValue: 'basic',
    control: {
      type: 'select',
      options: ['basic', 'beat', 'pulse', 'storm', 'wave', 'calm'],
    },
  },
  color: { control: { type: 'color' } },
  dense: {
    control: 'boolean',
  },
  hide: {
    control: 'boolean',
  },
  forcedDirection: {
    defaultValue: 'none',
    control: {
      type: 'select',
      options: ['up', 'down', 'none'],
    },
  },
};

export const PlaygroundForImage = (args) => {
  const { imagePosition } = args;
  const heroProps: HeroProps = {
    theme: {
      '--background-color': '#9fc9eb',
      ...(imagePosition && { '--image-position': imagePosition }),
      ...args.theme,
    },
  };

  return (
    <Hero koros={args.koros} {...heroProps}>
      <Hero.BackgroundImage src={imageFile} />
      <Hero.Card>
        <DefaultCardContent />
      </Hero.Card>
    </Hero>
  );
};

PlaygroundForImage.argTypes = {
  imagePosition: {
    control: {
      type: 'select',
      options: [
        'top left',
        'top center',
        'top right',
        'center left',
        'center center',
        'center right',
        'bottom left',
        'bottom center',
        'bottom right',
        'none',
      ],
    },
  },
};

const componentTypes = {
  imageOnSide: 'image on side',
  backgroundImage: 'background image',
  withoutImage: 'without image',
  wideImage: 'wide image',
  xtraStyling: 'extra nice styling',
};

export const EmbeddedToPage = (args) => {
  const { componentType, variant } = args;
  const { imageOnSide, backgroundImage, withoutImage, xtraStyling: customStyling, wideImage } = componentTypes;
  const BasicImageVersion = () => {
    const imagePosition = variant === '1' ? 'left' : 'right';
    return <ImageLeftOrRight imagePosition={imagePosition} />;
  };
  const BackgroundImageVersion = () => {
    const imagePosition = variant === '1' ? 'top' : 'right';
    const theme = imagePosition === 'top' ? { '--bottom-koros-color': 'var(--color-fog)' } : {};
    return <WithBackgroundImage imagePosition={imagePosition} theme={theme} />;
  };
  const NoImage = () => {
    const heroTypes = ['blueAndGreen', 'whiteWithoutKoros', 'blackAndWhite'];
    return <WithoutImage heroType={heroTypes[parseInt(variant, 10) - 1]} />;
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavigationComponent />
      {componentType === imageOnSide && <BasicImageVersion />}
      {componentType === backgroundImage && <BackgroundImageVersion />}
      {componentType === withoutImage && <NoImage />}
      {componentType === customStyling && <XtraStyling />}
      {componentType === wideImage && <BottomWideImage />}
      <Section color="secondary">
        <h1 className="heading-xl">Component after hero</h1>
        This component shows padding after hero
      </Section>
    </div>
  );
};

EmbeddedToPage.argTypes = {
  koros: {
    description: '*** Koros is not passed the the components ***',
    control: false,
  },
  theme: {
    description: '*** Theme is not passed the the components ***',
    control: false,
  },
  componentType: {
    defaultValue: 'image on side',
    control: {
      type: 'select',
      options: Object.values(componentTypes),
    },
  },
  variant: {
    defaultValue: '1',
    control: {
      type: 'select',
      options: ['1', '2', '3'],
    },
    table: {
      type: { summary: 'Changes to another variant of the selected component.' },
    },
  },
};

export const PlaygroundForAngledKoros = (args) => (
  <div>
    <style>
      {`
        .hero {
          --angled-koros-inset: ${args.korosInset};
        }
        .hero-card h1{
          max-width: ${args.headingMaxWidth};
        }
        .hero-card p {
          padding-right: ${args.paragraphPadding};
        }
      `}
    </style>
    <Hero
      id="hero"
      koros={args.koros}
      className="hero"
      theme={{ '--background-color': '#f5a3c7', '--color': '#000', ...args.theme }}
    >
      <Hero.Card id="hero-card" className="hero-card">
        <DefaultCardContent />
      </Hero.Card>
      <Hero.BackgroundImage id="hero-image" src={imageFile} />
    </Hero>
    <p>This story demonstrates possibilities to fix content overflowing the image.</p>
  </div>
);

PlaygroundForAngledKoros.argTypes = {
  korosInset: {
    defaultValue: 'auto auto 40% -50%',
    control: 'text',
    description: 'Position of the koros',
  },
  headingMaxWidth: {
    defaultValue: '35vw',
    control: 'text',
    description: 'Max width of the heading',
  },
  paragraphPadding: {
    defaultValue: '42%',
    control: 'text',
    description: 'Padding of the p element',
  },
};
