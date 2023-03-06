import React from 'react';

// import core base styles
import 'hds-core';
import styles from './Footer.module.scss';
import { Koros, KorosType } from '../koros';
import classNames from '../../utils/classNames';
import { FooterNavigation } from './footerNavigation/FooterNavigation';
import { FooterNavigationGroup } from './footerNavigationGroup/FooterNavigationGroup';
import { FooterGroupHeading } from './footerGroupHeading/FooterGroupHeading';
import { FooterNavigationLink } from './footerNavigationLink/FooterNavigationLink';
import { FooterUtilities } from './footerUtilities/FooterUtilities';
import { FooterUtilityGroup } from './footerUtilityGroup/FooterUtilityGroup';
import { FooterBase } from './footerBase/FooterBase';
import { FooterCustom } from './footerCustom/FooterCustom';
import { FooterTheme } from './Footer.interface';
import { useTheme } from '../../hooks/useTheme';

export type FooterProps = React.PropsWithChildren<{
  /**
   * Additional class names to apply to the footer
   */
  className?: string;
  /**
   * Props that will be passed to the native `<footer>` element
   */
  footerProps?: React.ComponentPropsWithoutRef<'footer'>;
  /**
   * Koros type to use in the footer
   */
  korosType?: KorosType;
  /**
   * Defines the footer theme
   */
  theme?: FooterTheme;
  /**
   * The title of the service shown on top of the the footer
   */
  title?: React.ReactNode;
}>;

export const Footer = ({
  children,
  className,
  footerProps,
  korosType = 'basic',
  theme = 'light',
  title,
}: FooterProps) => {
  // custom theme class that is applied to the root element
  const customThemeClass = useTheme<FooterTheme>(styles.footer, theme);

  return (
    <footer
      {...footerProps}
      className={classNames(
        styles.footer,
        styles[`koros-${korosType}`],
        typeof theme === 'string' && styles[`theme-${theme}`],
        customThemeClass,
        className,
      )}
    >
      <Koros className={classNames(styles.koros, styles[korosType])} type={korosType} />
      <div className={styles.footerContent}>
        <div className={styles.footerSections}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {children}
        </div>
      </div>
    </footer>
  );
};

Footer.Navigation = FooterNavigation;
Footer.NavigationGroup = FooterNavigationGroup;
Footer.GroupHeading = FooterGroupHeading;
Footer.NavigationLink = FooterNavigationLink;
Footer.Utilities = FooterUtilities;
Footer.UtilityGroup = FooterUtilityGroup;
Footer.Base = FooterBase;
Footer.Custom = FooterCustom;
