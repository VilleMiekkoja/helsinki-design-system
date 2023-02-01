import React, { HTMLAttributes } from 'react';
import { ArgsTable, Stories, Title } from '@storybook/addon-docs/blocks';

import { getShiftHeight, Koros, KorosProps, KorosShiftSpacer } from './Koros';
// @ts-ignore
import imageFile from '../../assets/img/placeholder_1920x1080.jpg';
import { Button } from '../button';
import { Card } from '../card/Card';

export default {
  component: Koros,
  title: 'Components/Koros',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      page: () => (
        <>
          <Title>Props</Title>
          <ArgsTable />
          <Stories title="Examples" includePrimary />
        </>
      ),
    },
  },
};

export const Basic = () => <Koros />;

export const Beat = () => <Koros type="beat" />;

export const Pulse = () => <Koros type="pulse" />;

export const Wave = () => <Koros type="wave" />;

export const Storm = () => <Koros type="storm" />;

export const Calm = () => <Koros type="calm" />;

export const Dense = () => (
  <>
    <Koros dense />
    <br />
    <Koros dense type="beat" />
    <br />
    <Koros dense type="pulse" />
    <br />
    <Koros dense type="wave" />
    <br />
    <Koros dense type="storm" />
  </>
);

export const Flipped = (args) => (
  <>
    <Koros flipHorizontal={args.flipHorizontal} />
    <br />
    <br />
    <Koros type="beat" flipHorizontal={args.flipHorizontal} />
    <br />
    <br />
    <Koros type="pulse" flipHorizontal={args.flipHorizontal} />
    <br />
    <br />
    <Koros type="wave" flipHorizontal={args.flipHorizontal} />
    <br />
    <br />
    <Koros type="storm" flipHorizontal={args.flipHorizontal} />
  </>
);

Flipped.args = {
  flipHorizontal: true,
};

export const Rotated = (args) => <Koros type={args.type} flipHorizontal={args.flipHorizontal} rotate={args.rotate} />;

Rotated.args = {
  type: 'basic',
  flipHorizontal: false,
  rotate: '45deg',
};

export const RotatedInContainer = () => {
  const rootStyle = { '--koros-height': '85px', '--hero-height': '300px', '--hero-width': '500px' };

  return (
    <div
      style={{
        ...rootStyle,
        backgroundColor: 'var(--color-silver-light)',
        height: 'var(--hero-height)',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        width: 'var(--hero-width)',
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--color-coat-of-arms)',
          clipPath: 'polygon(0 0, var(--hero-height) 0, 0 100%, 0% 100%)',
          height: '100%',
        }}
      />
      <Koros
        style={{
          fill: 'var(--color-coat-of-arms)',
          left: 'calc(-1 * var(--koros-height))',
          position: 'absolute',
          top: 'var(--koros-height)',
          transformOrigin: 'center',
          width: 'calc(2 * var(--hero-height))',
        }}
        rotate="135deg"
      />
    </div>
  );
};

export const CustomColor = () => <Koros style={{ fill: 'var(--color-coat-of-arms)' }} />;

export const Playground = (args) => (
  <Koros type={args.type} flipHorizontal={args.flipHorizontal} rotate={args.rotate} />
);

Playground.parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  docs: {
    disable: true,
  },
};

Playground.args = {
  type: 'basic',
  flipHorizontal: false,
  rotate: '',
};

Playground.argTypes = {
  type: {
    options: ['basic', 'beat', 'pulse', 'wave', 'storm'],
    control: { type: 'radio' },
  },
};

const ShiftDemo = ({
  type,
  bgColor,
  korosColor,
}: Pick<KorosProps, 'type' | 'dense'> & { bgColor?: string; korosColor: string }) => {
  const commonProps: KorosProps = {
    shift: true,
    type,
    style: { fill: korosColor },
  };
  const divStyle = { display: 'flex', flexDirection: 'column', background: bgColor || '#000' } as HTMLAttributes<
    HTMLDivElement
  >['style'];

  return (
    <div>
      <h2>Koros type: {type}, dense: false</h2>
      <div style={divStyle}>
        <Koros {...commonProps} flipHorizontal />
        <img src={imageFile} alt="Demo" />
        <Koros {...commonProps} />
      </div>
      <h2>Koros type: {type}, dense: true</h2>
      <div style={divStyle}>
        <Koros {...commonProps} flipHorizontal dense />
        <img src={imageFile} alt="Demo" />
        <Koros {...commonProps} dense />
      </div>
      <h2>Adjust padding{type} with a spacer</h2>
      <div style={{ ...divStyle, background: '#ccc' }}>
        <Card
          theme={{
            '--background-color': '#ccc',
            '--padding-horizontal': 'var(--spacing-l)',
            '--padding-vertical': '0',
          }}
        >
          <h3>Demo content </h3>
          <Button variant="secondary" role="link">
            Koros woud overflow here without spacer
          </Button>
        </Card>
        <KorosShiftSpacer {...commonProps} />
        <Koros {...commonProps} />
      </div>
      <h2>Adjust padding{type} with a theme and getShiftHeight()</h2>
      <div style={{ ...divStyle, background: '#ccc' }}>
        <Card
          theme={{
            '--background-color': '#ccc',
            '--padding-horizontal': 'var(--spacing-l)',
            '--padding-vertical': `${getShiftHeight(commonProps)}px`,
          }}
        >
          <h3>Demo content </h3>
          <Button variant="secondary" role="link">
            Koros woud overflow here without extra padding
          </Button>
        </Card>
        <Koros {...commonProps} />
      </div>
    </div>
  );
};

export const Shifted = (args) => {
  const { type, color } = args;
  const bgColor = color !== 'non-white' ? '#fff' : 'rgb(40 148 187)';
  return (
    <div>
      <h1>Examples for shifting koros over an element</h1>
      <ShiftDemo type={type} korosColor={bgColor} bgColor={bgColor} />
    </div>
  );
};

Shifted.args = {
  type: 'basic',
};

Shifted.argTypes = {
  type: {
    options: ['basic', 'beat', 'pulse', 'wave', 'storm'],
    control: { type: 'radio' },
  },
  color: {
    options: ['white', 'non-white'],
    control: { type: 'radio' },
  },
};
