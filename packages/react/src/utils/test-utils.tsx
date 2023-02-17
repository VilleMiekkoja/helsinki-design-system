import React, { PropsWithChildren } from 'react';

import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const NavigationWrapper = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <Navigation menuToggleAriaLabel="menu" skipTo="#content" skipToContentLabel="Skip to content" title="Foo">
    {children}
  </Navigation>
);

export const FooterWrapper = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <Footer title="Bar">{children}</Footer>
);

export const FooterNavigationWrapper = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <Footer title="Bar">
    <Footer.Navigation>{children}</Footer.Navigation>
  </Footer>
);

export const FooterNavigationGroupsWrapper = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <Footer title="Bar">
    <Footer.Navigation>
      <Footer.NavigationGroup>{children}</Footer.NavigationGroup>
    </Footer.Navigation>
  </Footer>
);

export const FooterUtilitiesWrapper = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <Footer title="Bar">
    <Footer.Utilities>{children}</Footer.Utilities>
  </Footer>
);

export const HeaderNavigationMenuWrapper = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <Header>
    <Header.NavigationMenu>{children}</Header.NavigationMenu>
  </Header>
);
