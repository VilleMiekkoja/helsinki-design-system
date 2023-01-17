import React, { Children, cloneElement } from 'react';

// import core base styles
import 'hds-core';
import styles from './FooterNavigation.module.scss';
import classNames from '../../../utils/classNames';
import { getChildElementsEvenIfContainerInbetween } from '../../../utils/getChildren';
import { FCWithName } from '../../../common/types';
import { useMediaQueryLessThan } from '../../../hooks/useMediaQuery';
import { FooterVariant } from '../Footer.interface';

export type FooterNavigationProps = React.PropsWithChildren<{
  /**
   * The aria-label for the `<nav>` element. Describes the navigation to screen reader users.
   */
  navigationAriaLabel?: string;
}>;

export const FooterNavigation = ({ children, navigationAriaLabel }: FooterNavigationProps) => {
  const isSmallerThanLargeScreen = useMediaQueryLessThan('l');
  const groups = getChildElementsEvenIfContainerInbetween(children).filter(
    (child) => (child.type as FCWithName).componentName === 'FooterNavigationGroup',
  );
  const hasGroups = groups && groups.length > 0;

  return (
    <nav
      className={classNames(styles.navigation, hasGroups && !isSmallerThanLargeScreen && styles.sitemap)}
      aria-label={navigationAriaLabel}
    >
      {hasGroups && !isSmallerThanLargeScreen && (
        <div className={styles.groups}>
          {Children.map(groups, (child, index) => {
            return cloneElement(child, {
              key: index,
            });
          })}
        </div>
      )}
      {hasGroups &&
        isSmallerThanLargeScreen &&
        Children.map(groups, (group, index) => {
          return cloneElement(group.props.children[0], {
            key: index,
            variant: FooterVariant.Navigation,
          });
        })}
      {!hasGroups && children}
    </nav>
  );
};

FooterNavigation.componentName = 'FooterNavigation';
