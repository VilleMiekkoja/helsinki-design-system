import React from 'react';

// import core base styles
import 'hds-core';
import styles from './Hero.module.scss';
import classNames from '../../utils/classNames';
import { useTheme } from '../../hooks/useTheme';
import { Koros, KorosProps, KorosShiftSpacer } from '../koros';
import { getChildrenAsArray } from '../../utils/getChildren';
import { FCWithName } from '../../common/types';

type HTMLElementAttributes = React.HtmlHTMLAttributes<HTMLDivElement>;
type ImgElementAttributes = React.ImgHTMLAttributes<HTMLImageElement>;
export type HeroProps = React.PropsWithChildren<
  HTMLElementAttributes & {
    theme?: HeroCustomTheme;
    koros?: Exclude<KorosProps, 'flipHorizontal' | 'shift' | 'rotate'> & {
      forcedDirection?: 'up' | 'down';
      hide?: boolean;
    };
  }
>;

export interface HeroCustomTheme {
  '--background-color'?: string;
  '--color'?: string;
  '--image-position'?: string;
  '--koros-color'?: string;
  // used only with top bg image!
  '--bottom-koros-color'?: string;
  // used only with angled bg image!
  '--angled-koros-inset'?: string;
}

export type ChildProps = {
  imageChildIndex: number;
  cardChildIndex: number;
  backgroundChildIndex: number;
  wideImageChildIndex?: number;
  components: React.ReactElement[];
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
        break;
      }
      default: {
        break;
      }
    }
  });
  return childProps;
};

const Card = ({
  children,
  centered,
  className,
  ...elementAttributes
}: React.PropsWithChildren<HTMLElementAttributes & { centered?: boolean }>) => {
  const classNameList = centered
    ? classNames(styles.card, styles.centeredContent, className)
    : classNames(styles.card, className);
  return (
    <div {...elementAttributes} className={classNameList}>
      {children}
    </div>
  );
};

Card.componentName = 'Card';

const ImageContainer = (props: ImgElementAttributes) => {
  return (
    /* eslint-disable-next-line jsx-a11y/alt-text */
    <img className={styles.image} {...props} />
  );
};

ImageContainer.componentName = 'ImageContainer';

const WideImage = (props: ImgElementAttributes) => {
  return <ImageContainer {...props} />;
};

WideImage.componentName = 'WideImage';

const BackgroundImage = (props: ImgElementAttributes) => {
  return <ImageContainer {...props} />;
};
BackgroundImage.componentName = 'BackgroundImage';

export const Hero = ({ children, theme, koros, ...elementAttributes }: HeroProps) => {
  const { components, imageChildIndex, backgroundChildIndex, wideImageChildIndex, cardChildIndex } = pickChildProps(
    children,
  );
  const editableTheme = { ...theme };
  if (!editableTheme['--koros-color']) {
    editableTheme['--koros-color'] = 'var(--background-color)';
  }
  const customThemeClass = useTheme<HeroCustomTheme>(styles.hero, editableTheme);
  const korosStyle = { fill: 'var(--koros-color)' };
  const canKorosBeFlipped = koros?.forcedDirection !== 'up';
  const hideKoros = !!koros?.hide;
  const heroElementAttributes: HTMLElementAttributes = {
    ...elementAttributes,
    className: classNames(styles.hero, customThemeClass, (elementAttributes as HTMLElementAttributes).className),
  };

  const Content = () => (
    <>
      {components.map((c, index) => {
        if (index === imageChildIndex) {
          return (
            <div key="imageContainer" className={styles.imageContainer}>
              {c}
            </div>
          );
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
    if (imageIndex === -1) {
      return null;
    }
    const imageComponent = components[imageIndex];
    const clonedProps = { ...imageComponent.props };
    if (clonedProps.id) {
      clonedProps.id = `${clonedProps.id}-clone`;
    }
    return React.cloneElement(imageComponent, clonedProps);
  };

  const ImageAsBackground = () => {
    if (backgroundChildIndex === -1) {
      return null;
    }
    return <div className={classNames(styles.background)}>{components[backgroundChildIndex]}</div>;
  };

  // if background is first, then the Hero version is the one where card is floating over background image
  if (backgroundChildIndex === 0) {
    const CommonKoros = ({ top }: { top?: boolean }) => {
      const className = top ? styles.topKoros : styles.bottomKoros;
      const topKorosFillColor =
        !top && theme && theme['--bottom-koros-color'] ? theme['--bottom-koros-color'] : 'var(--koros-color)';
      return (
        <Koros
          {...koros}
          shift
          compact
          className={`${(koros && koros.className) || ''} ${className}`}
          style={{ fill: topKorosFillColor }}
        />
      );
    };

    return (
      <div {...heroElementAttributes}>
        <div className={styles.backgroundContainer}>
          <ImageAsBackground />
          <CommonKoros top />
          <div className={classNames(styles.content, styles.singleColumn)}>
            <Content />
          </div>
        </div>
        <CommonKoros />
      </div>
    );
  }
  // if background is last, then the Hero version is the one with angled Koros
  if (backgroundChildIndex > 0) {
    return (
      <div {...heroElementAttributes}>
        <div className={styles.angledKorosContainer}>
          <div className={styles.content}>
            <Content />
            <div className={styles.mobileKoros}>
              <Koros {...koros} flipHorizontal shift compact style={korosStyle} />
            </div>
          </div>
          <Koros {...koros} className={styles.angledKorosWithBg} style={korosStyle} />
          <ImageAsBackground />
        </div>
      </div>
    );
  }
  const columnStyle = imageChildIndex > -1 && cardChildIndex > -1 ? styles.twoColumns : styles.singleColumn;
  const hasBottomImage = imageChildIndex > -1 || wideImageChildIndex > -1;
  return (
    <div {...heroElementAttributes}>
      <div key="content" className={classNames(styles.content, columnStyle)}>
        <Content />
        {!hideKoros && !canKorosBeFlipped && <KorosShiftSpacer {...koros} />}
      </div>
      {!hideKoros && (
        <Koros {...koros} shift compact={canKorosBeFlipped} flipHorizontal={canKorosBeFlipped} style={korosStyle} />
      )}
      {hasBottomImage && (
        <div
          key="imageContainer"
          className={classNames(
            styles.imageContainer,
            wideImageChildIndex > -1 ? styles.wideImageContainer : styles.imageBelowKoros,
          )}
        >
          <ImageClone />
        </div>
      )}
    </div>
  );
};

Hero.Card = Card;
Hero.Image = ImageContainer;
Hero.BackgroundImage = BackgroundImage;
Hero.WideImage = WideImage;
