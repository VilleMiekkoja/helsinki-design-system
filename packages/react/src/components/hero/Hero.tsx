import React from 'react';

// import core base styles
import 'hds-core';
import styles from './Hero.module.scss';
import classNames from '../../utils/classNames';

export type HeroProps = React.PropsWithChildren<Record<string, never>>;

const Card = ({ children }: React.PropsWithChildren<unknown>) => {
  return <div className={styles.card}>{children}</div>;
};

const ImageContainer = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    /* eslint-disable-next-line jsx-a11y/alt-text */
    <img className={styles.image} {...props} />
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className={classNames(styles.hero, styles.twoColumns)}>{children}</div>;
};

Hero.Card = Card;
Hero.Image = ImageContainer;
