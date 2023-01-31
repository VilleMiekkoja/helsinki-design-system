import React from 'react';

// import core base styles
import 'hds-core';
import styles from './Hero.module.scss';
import classNames from '../../utils/classNames';
import { useTheme } from '../../hooks/useTheme';
import { Koros, KorosProps } from '../koros';
import { getChildrenAsArray } from '../../utils/getChildren';
import { FCWithName } from '../../common/types';

export type HeroProps = React.PropsWithChildren<{
  theme?: HeroCustomTheme;
  koros?: Exclude<KorosProps, 'flipHorizontal'>;
  imageAspectRatio?: string;
}>;

export interface HeroCustomTheme {
  '--background-color'?: string;
  '--color'?: string;
  '--image-aspect-ratio'?: string;
}

export type ChildProps = {
  imageChildIndex: number;
  cardChildIndex: number;
  components: React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>[];
};

const pickChildProps = (children: React.ReactNode): ChildProps => {
  const childProps: ChildProps = {
    imageChildIndex: -1,
    cardChildIndex: -1,
    components: [],
  };

  getChildrenAsArray(children).forEach((child, index) => {
    const { componentName } = (child.type as FCWithName) || {};
    childProps.components.push(child);
    switch (componentName) {
      case 'ImageContainer': {
        childProps.imageChildIndex = index;
        break;
      }
      case 'Card': {
        childProps.cardChildIndex = index;
        break;
      }
      default: {
        break;
      }
    }
  });
  return childProps;
};

const Card = ({ children }: React.PropsWithChildren<unknown>) => {
  return <div className={styles.card}>{children}</div>;
};

Card.componentName = 'Card';

const ImageContainer = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    /* eslint-disable-next-line jsx-a11y/alt-text */
    <img className={styles.image} {...props} />
  );
};

ImageContainer.componentName = 'ImageContainer';

export const Hero = ({ children, theme, koros, imageAspectRatio }: HeroProps) => {
  const combinedTheme = imageAspectRatio
    ? { ...theme, '--image-aspect-ratio': imageAspectRatio.replace(/(\D)+/g, ' / ') }
    : theme;
  const customThemeClass = useTheme<HeroCustomTheme>(styles.hero, combinedTheme);
  const { components, imageChildIndex } = pickChildProps(children);
  const imageContainerClasses = imageAspectRatio
    ? classNames(styles.imageContainer, styles.fixedImageAspectRatio)
    : styles.imageContainer;
  const Content = () => (
    <>
      {components.map((c, index) => {
        if (index === imageChildIndex) {
          return <div className={imageContainerClasses}>{c}</div>;
        }
        return c;
      })}
    </>
  );
  const ImageClone = () => {
    if (imageChildIndex === -1) {
      return null;
    }
    const imageComponent = components[imageChildIndex];
    return React.cloneElement(imageComponent, imageComponent.props);
  };
  return (
    <div className={classNames(styles.hero, customThemeClass)}>
      <div className={classNames(styles.content, styles.twoColumns)}>
        <Content />
      </div>
      <Koros {...koros} flipHorizontal style={{ fill: 'var(--background-color)' }} />
      <div className={classNames(imageContainerClasses, styles.imageBelowKoros)}>
        <ImageClone />
      </div>
    </div>
  );
};

Hero.Card = Card;
Hero.Image = ImageContainer;
