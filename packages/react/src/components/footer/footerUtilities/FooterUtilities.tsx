import React, { Children, cloneElement } from 'react';

// import core base styles
import 'hds-core';
import styles from './FooterUtilities.module.scss';
import { getComponentFromChildren, getChildElementsEvenIfContainerInbetween } from '../../../utils/getChildren';
import { FCWithName } from '../../../common/types';

export type FooterUtilitiesProps = {
  /**
   * Description of the navigation links for screen readers.
   */
  ariaLabelledBy?: string;
  /**
   * Children elements to render.
   */
  children: React.ReactNode;
};

export const FooterUtilities = ({ ariaLabelledBy, children }: FooterUtilitiesProps) => {
  // filter out the SoMe group, so that other utils can be wrapped in a separate div
  const [soMeGroup, childrenWithoutSoMeGroup] = getComponentFromChildren(children, 'FooterSoMe');
  const groups = getChildElementsEvenIfContainerInbetween(childrenWithoutSoMeGroup).filter(
    (child) => (child.type as FCWithName).componentName === 'FooterUtilityGroup',
  );

  return (
    <div className={styles.utilities}>
      <hr className={styles.divider} aria-hidden />
      {groups && groups.length > 0 ? (
        <div className={styles.groups}>
          {Children.map(groups, (child, index) => {
            return cloneElement(child, {
              key: index,
            });
          })}
        </div>
      ) : (
        <nav role="navigation" aria-labelledby={ariaLabelledBy} className={styles.links}>
          {childrenWithoutSoMeGroup}
        </nav>
      )}
      {soMeGroup}
    </div>
  );
};
