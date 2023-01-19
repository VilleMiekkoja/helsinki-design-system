import React, { Children, cloneElement, isValidElement, useEffect } from 'react';

// import core base styles
import 'hds-core';
import { useHeaderContext, useSetHeaderContext } from '../../HeaderContext';
import classNames from '../../../../utils/classNames';
import { getChildElementsEvenIfContainerInbetween } from '../../../../utils/getChildren';
import { HeaderNavigationMenuContextProvider } from './HeaderNavigationMenuContext';
import styles from './HeaderNavigationMenu.module.scss';

export type HeaderNavigationMenuProps = React.PropsWithChildren<{
  /**
   * aria-label for describing universal bar.
   */
  ariaLabel?: string;
  /**
   * Children are expected to be NavigationLink components or a container with NavigationLink components inside.
   */
  children?: React.ReactNode;
  /**
   * ID of the header element.
   */
  id?: string;
}>;

const activeLinkClassName = classNames(
  styles.headerNavigationMenuLinkContent,
  styles.headerNavigationMenuLinkContentActive,
);

const renderHeaderNavigationMenuItem = (child, index) => {
  const linkContainerClasses = child.props.active ? activeLinkClassName : styles.headerNavigationMenuLinkContent;
  const className = classNames(child.props.className, styles.headerNavigationMenuLink);
  const node = cloneElement(child as React.ReactElement, {
    className,
    index,
  });

  return (
    // eslint-disable-next-line react/no-array-index-key
    <li key={index} className={styles.headerNavigationMenuLinkContainer}>
      <span className={linkContainerClasses}>{node}</span>
    </li>
  );
};

const HeaderNavigationMenuContent = () => {
  const { navigationContent } = useHeaderContext();
  return (
    <>
      {Children.map(navigationContent, (child, index) => {
        if (!isValidElement(child)) return null;
        return renderHeaderNavigationMenuItem(child, index);
      })}
    </>
  );
};

export const HeaderNavigationMenu = ({ ariaLabel, children, id }: HeaderNavigationMenuProps) => {
  const { isSmallScreen } = useHeaderContext();
  const { setNavigationContent } = useSetHeaderContext();

  useEffect(() => {
    const navigationContent = getChildElementsEvenIfContainerInbetween(children);
    setNavigationContent(navigationContent);
  }, [children]);

  /* On small screen return null for now. Later when ActionBar's first version is done,
  we could see if this component with its contents (altered for small screens) could be
  sent to HeaderContext and used in ActionBar? */
  if (isSmallScreen) return null;

  return (
    <nav role="navigation" aria-label={ariaLabel} id={id} className={styles.headerNavigationMenu}>
      <ul className={styles.headerNavigationMenuList}>
        <HeaderNavigationMenuContextProvider>
          <HeaderNavigationMenuContent />
        </HeaderNavigationMenuContextProvider>
      </ul>
    </nav>
  );
};
