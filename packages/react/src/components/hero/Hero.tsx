import React from 'react';

// import core base styles
import 'hds-core';
import styles from './Hero.module.scss';
import classNames from '../../utils/classNames';
import { useTheme } from '../../hooks/useTheme';

export type HeroProps = React.PropsWithChildren<{
  theme?: HeroCustomTheme;
}>;

export interface HeroCustomTheme {
  '--background-color'?: string;
  '--color'?: string;
}

const Card = ({ children }: React.PropsWithChildren<unknown>) => {
  return <div className={styles.card}>{children}</div>;
};

const ImageContainer = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    /* eslint-disable-next-line jsx-a11y/alt-text */
    <img className={styles.image} {...props} />
  );
};

export const Hero = ({ children, theme }: HeroProps) => {
  const customThemeClass = useTheme<HeroCustomTheme>(styles.hero, theme);
  return <div className={classNames(styles.hero, styles.twoColumns, customThemeClass)}>{children}</div>;
};

Hero.Card = Card;
Hero.Image = ImageContainer;
