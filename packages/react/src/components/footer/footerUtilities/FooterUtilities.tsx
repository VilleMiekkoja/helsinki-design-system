import React, { Children, cloneElement } from 'react';

// import core base styles
import 'hds-core';
import styles from './FooterUtilities.module.scss';
import { getComponentFromChildren, getChildElementsEvenIfContainerInbetween } from '../../../utils/getChildren';
import { FCWithName } from '../../../common/types';
import classNames from '../../../utils/classNames';

export type FooterUtilitiesProps = {
  /**
   * Children elements to render.
   */
  children: React.ReactNode;
};

export const FooterUtilities = ({ children }: FooterUtilitiesProps) => {
  // filter out the SoMe group, so that other utils can be wrapped in a separate div
  const [soMeGroup, childrenWithoutSoMeGroup] = getComponentFromChildren(children, 'FooterSoMe');
  const groups = getChildElementsEvenIfContainerInbetween(childrenWithoutSoMeGroup).filter(
    (child) => (child.type as FCWithName).componentName === 'FooterNavigationGroup',
  );

  return (
    <div className={styles.utilities}>
      <hr className={styles.divider} aria-hidden />
      {groups && groups.length > 0 ? (
        <div className={styles.groups}>
          {Children.map(groups, (child, index) => {
            return cloneElement(child, {
              headingClassName: classNames(child.props.headingClassName, styles.utilityGroupHeading),
              key: index,
            });
          })}
        </div>
      ) : (
        <div className={styles.links}>{childrenWithoutSoMeGroup}</div>
      )}
      {soMeGroup}
    </div>
  );
};
