import React, { useState } from 'react';

import { Header } from './Header';
import { HeaderUniversalBar } from './components/headerUniversalBar/HeaderUniversalBar';
import { NavigationLink } from './components/navigationLink/NavigationLink';
import { HeaderNavigationMenu } from './components/headerNavigationMenu';
import { StoryWIPAlert } from '../../internal/storyWIPAlert/StoryWIPAlert';
import { DropdownDirection } from './components/navigationLink/types';
import { LanguageOption } from '../../context/languageContext';
import { IconUser } from '../../icons';
import { NavigationLanguageSelector } from './components/navigationLanguageSelector';
import { NavigationContext } from '../navigation/NavigationContext';
import { IconButton } from './components/headerActionBar/HeaderActionBarItem';

export default {
  component: Header,
  title: 'Components/Header',
  subcomponents: {
    HeaderUniversalBar,
    HeaderNavigationMenu,
    NavigationLink,
  },
  parameters: {
    controls: { expanded: true },
  },
  args: {},
};

const languages: LanguageOption[] = [
  { label: 'Suomeksi', value: 'fi' },
  { label: 'På svenska', value: 'sv' },
  { label: 'In English', value: 'en' },
];

export const Example = (args) => (
  <>
    <StoryWIPAlert />
    <Header {...args}>Header</Header>
  </>
);

export const WithFullFeatures = (args) => {
  return (
    <>
      <StoryWIPAlert />
      <Header {...args}>
        <Header.UniversalBar primaryLinkText="Helsingin kaupunki" primaryLinkHref="#">
          <Header.NavigationLink href="#" label="Link 1" />
          <Header.NavigationLink href="#" label="Link 2" />
          <Header.NavigationLink href="#" label="Link 3" />
        </Header.UniversalBar>

        <Header.ActionBar title="Helsingin kaupunki" titleAriaLabel="Helsingin kaupunki" titleUrl="https://hel.fi">
          <NavigationLanguageSelector languages={languages} />
        </Header.ActionBar>

        <Header.NavigationMenu>
          <Header.NavigationLink
            href="#"
            label="Link 1"
            onClick={(event) => event.preventDefault()}
            active
            dropdownLinks={[
              <Header.NavigationLink
                href="#"
                label="Test"
                dropdownDirection={DropdownDirection.Dynamic}
                active
                dropdownLinks={[
                  <Header.NavigationLink href="#" label="Nested" />,
                  <Header.NavigationLink href="#" label="Nested" />,
                  <Header.NavigationLink href="#" label="Nested" />,
                ]}
              />,
              <Header.NavigationLink
                href="#"
                label="Test"
                dropdownDirection={DropdownDirection.Dynamic}
                dropdownLinks={[
                  <Header.NavigationLink href="#" label="Nested" />,
                  <Header.NavigationLink href="#" label="Nested" />,
                ]}
              />,
            ]}
          />
          <Header.NavigationLink
            href="#"
            label="Link 2"
            dropdownLinks={[
              <Header.NavigationLink
                href="#"
                label="Test"
                dropdownDirection={DropdownDirection.Dynamic}
                active
                dropdownLinks={[
                  <Header.NavigationLink href="#" label="Nested" />,
                  <Header.NavigationLink href="#" label="Nested" />,
                  <Header.NavigationLink href="#" label="Nested" />,
                ]}
              />,
              <Header.NavigationLink
                href="#"
                label="Test"
                dropdownDirection={DropdownDirection.Dynamic}
                dropdownLinks={[
                  <Header.NavigationLink href="#" label="Nested" />,
                  <Header.NavigationLink href="#" label="Nested" />,
                ]}
              />,
            ]}
          />
          <Header.NavigationLink href="#" label="Link 3" />
          <Header.NavigationLink href="#" label="Link 3" />
          <Header.NavigationLink href="#" label="Link 3" />
          <Header.NavigationLink
            href="#"
            label="Link 2"
            dropdownLinks={[
              <Header.NavigationLink
                href="#"
                label="Test"
                dropdownDirection={DropdownDirection.Dynamic}
                active
                dropdownLinks={[
                  <Header.NavigationLink href="#" label="Nested" />,
                  <Header.NavigationLink href="#" label="Nested" />,
                  <Header.NavigationLink href="#" label="Nested" />,
                ]}
              />,
              <Header.NavigationLink
                href="#"
                label="Test"
                dropdownDirection={DropdownDirection.Dynamic}
                dropdownLinks={[
                  <Header.NavigationLink href="#" label="Nested" />,
                  <Header.NavigationLink href="#" label="Nested" />,
                ]}
              />,
            ]}
          />
        </Header.NavigationMenu>
      </Header>
    </>
  );
};

export const WithUniversalBar = (args) => (
  <>
    <StoryWIPAlert />
    <Header {...args}>
      <Header.UniversalBar primaryLinkText="Helsingin kaupunki" primaryLinkHref="#">
        <Header.NavigationLink href="#" label="Link 1" />
        <Header.NavigationLink href="#" label="Link 2" />
        <Header.NavigationLink href="#" label="Link 3" />
      </Header.UniversalBar>
    </Header>
  </>
);

export const WithNavigationMenu = (args) => (
  <>
    <StoryWIPAlert />
    <Header {...args}>
      <Header.NavigationMenu>
        <Header.NavigationLink
          href="#"
          label="Link 1"
          onClick={(event) => event.preventDefault()}
          active
          dropdownLinks={[
            <Header.NavigationLink
              href="#"
              label="Test"
              dropdownDirection={DropdownDirection.Dynamic}
              active
              dropdownLinks={[
                <Header.NavigationLink href="#" label="Nested" />,
                <Header.NavigationLink href="#" label="Nested" />,
                <Header.NavigationLink href="#" label="Nested" />,
              ]}
            />,
            <Header.NavigationLink
              href="#"
              label="Test"
              dropdownDirection={DropdownDirection.Dynamic}
              dropdownLinks={[
                <Header.NavigationLink href="#" label="Nested" />,
                <Header.NavigationLink href="#" label="Nested" />,
              ]}
            />,
          ]}
        />
        <Header.NavigationLink
          href="#"
          label="Link 2"
          dropdownLinks={[
            <Header.NavigationLink
              href="#"
              label="Test"
              dropdownDirection={DropdownDirection.Dynamic}
              active
              dropdownLinks={[
                <Header.NavigationLink href="#" label="Nested" />,
                <Header.NavigationLink href="#" label="Nested" />,
                <Header.NavigationLink href="#" label="Nested" />,
              ]}
            />,
            <Header.NavigationLink
              href="#"
              label="Test"
              dropdownDirection={DropdownDirection.Dynamic}
              dropdownLinks={[
                <Header.NavigationLink href="#" label="Nested" />,
                <Header.NavigationLink href="#" label="Nested" />,
              ]}
            />,
          ]}
        />
        <Header.NavigationLink href="#" label="Link 3" />
      </Header.NavigationMenu>
    </Header>
  </>
);

export const WithActionBar = (args) => {
  const [, setAuthenticated] = useState(false);
  const context = {
    setAuthenticated,
    // setNavigationVariant: () => {},
    isMobile: false,
  };

  return (
    <Header {...args}>
      <NavigationContext.Provider value={context}>
        <Header.ActionBar title="Helsingin kaupunki" titleAriaLabel="Helsingin kaupunki" titleUrl="https://hel.fi">
          <NavigationLanguageSelector languages={languages} />
          <IconButton label="Kirjaudu" icon={IconUser} style={{ order: 10 }} />
        </Header.ActionBar>
      </NavigationContext.Provider>
      <Header.NavigationMenu>
        <Header.NavigationLink href="#" label="Link 1" />
        <Header.NavigationLink href="#" label="Link 2" />
        <Header.NavigationLink href="#" label="Link 3" />
      </Header.NavigationMenu>
    </Header>
  );
};
