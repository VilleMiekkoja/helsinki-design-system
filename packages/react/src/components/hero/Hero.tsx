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
  backgroundChildIndex: number;
  backgroundImageSrc?: string;
  components: React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>[];
};

const pickChildProps = (children: React.ReactNode): ChildProps => {
  const childProps: ChildProps = {
    imageChildIndex: -1,
    cardChildIndex: -1,
    backgroundChildIndex: -1,
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
      case 'BackgroundImage': {
        childProps.backgroundChildIndex = index;
        childProps.backgroundImageSrc = child.props.src;
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

const BackgroundImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div className={styles.backgroundImage}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...props} />
    </div>
  );
};
BackgroundImage.componentName = 'BackgroundImage';

export const Hero = ({ children, theme, koros, imageAspectRatio }: HeroProps) => {
  const { components, imageChildIndex, backgroundChildIndex, backgroundImageSrc } = pickChildProps(children);
  const combinedTheme = imageAspectRatio
    ? { ...theme, '--image-aspect-ratio': imageAspectRatio.replace(/(\D)+/g, ' / ') }
    : theme;
  if (backgroundImageSrc) {
    combinedTheme['--background-image'] = `url(${backgroundImageSrc})`;
  }
  const customThemeClass = useTheme<HeroCustomTheme>(styles.hero, combinedTheme);
  const imageContainerClasses = imageAspectRatio
    ? classNames(styles.imageContainer, styles.fixedImageAspectRatio)
    : styles.imageContainer;

  const Content = () => (
    <>
      {components.map((c, index) => {
        if (index === imageChildIndex) {
          return <div className={imageContainerClasses}>{c}</div>;
        }
        if (index === backgroundChildIndex) {
          return null;
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

  if (backgroundChildIndex > -1) {
    const containerClasses = imageAspectRatio
      ? styles.backgroundContainer
      : classNames(styles.backgroundContainer, styles.noImageAspectRatio);
    const CommonKoros = ({ className }: { className: string }) => (
      <Koros
        {...koros}
        className={`${(koros && koros.className) || ''} ${className}`}
        style={{ fill: 'var(--background-color)' }}
      />
    );
    return (
      <div className={classNames(styles.hero, customThemeClass)}>
        <div className={containerClasses}>
          <div className={classNames(imageContainerClasses, styles.imageBelowKoros)}>
            <ImageClone />
          </div>
          <div className={styles.backgroundMobileSpacer} />
          <CommonKoros className={styles.topKoros} />
          <div className={classNames(styles.content, styles.singleColumn)}>
            <Content />
          </div>
        </div>
        <CommonKoros className={styles.bottomKoros} />
      </div>
    );
  }

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
Hero.BackgroundImage = BackgroundImage;
