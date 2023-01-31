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
  '--image-position'?: string;
}

export type ChildProps = {
  imageChildIndex: number;
  cardChildIndex: number;
  backgroundChildIndex: number;
  backgroundImageSrc?: string;
  wideImageChildIndex?: number;
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
      case 'WideImage': {
        childProps.wideImageChildIndex = index;
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

const WideImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <ImageContainer {...props} />;
};

WideImage.componentName = 'WideImage';

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
  const { components, imageChildIndex, backgroundChildIndex, backgroundImageSrc, wideImageChildIndex } = pickChildProps(
    children,
  );
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
        if (index === backgroundChildIndex || index === wideImageChildIndex) {
          return null;
        }
        return c;
      })}
    </>
  );

  const ImageClone = () => {
    const imageIndex = wideImageChildIndex > -1 ? wideImageChildIndex : imageChildIndex;
    console.log('imageIndex', imageIndex);
    if (imageIndex === -1) {
      return null;
    }
    const imageComponent = components[imageIndex];
    return React.cloneElement(imageComponent, imageComponent.props);
  };

  // if background is first, then the Hero version is the one where card is floating over background image
  if (backgroundChildIndex === 0) {
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
  // if background is last, then the Hero version is the one with angled Koros
  if (backgroundChildIndex > 0) {
    return (
      <div className={classNames(styles.hero, customThemeClass)}>
        <div className={styles.angledKorosContainer}>
          <div className={styles.contentBox}>
            <Content />
            <div className={styles.backgroundArea}>
              <div className={styles.clippedBackground} />
              <div className={styles.korosContainer}>
                <Koros {...koros} flipHorizontal rotate="45deg" style={{ fill: 'var(--background-color)' }} />;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.hero, customThemeClass)}>
      <div className={classNames(styles.content, styles.twoColumns)}>
        <Content />
      </div>
      <Koros {...koros} flipHorizontal style={{ fill: 'var(--background-color)' }} />
      <div
        className={classNames(
          imageContainerClasses,
          wideImageChildIndex > -1 ? styles.wideImageContainer : styles.imageBelowKoros,
        )}
      >
        <ImageClone />
      </div>
    </div>
  );
};

Hero.Card = Card;
Hero.Image = ImageContainer;
Hero.BackgroundImage = BackgroundImage;
Hero.WideImage = WideImage;
