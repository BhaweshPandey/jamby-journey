import React, { forwardRef, useContext } from 'react';
import classes from './HeroSection.module.css';
import {
  Group,
  Button,
  Text,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  useMantineColorScheme,
  Flex,
  Image,
  BackgroundImage,
  Container,
  Tooltip,
} from '@mantine/core';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import { Images } from '@/public';
import { IconBrightnessDown } from '@tabler/icons-react';
// import { useStores } from '../../../models';
import { useRouter } from 'next/router';
import I18nContext from '@/context/i18nContext';
import { translate } from '@/i18n';

const HeroSection = (props: {
  // setlanguageTranslate: any; languageTranslate: string
}) => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const theme = useMantineTheme();
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  const { setColorScheme, clearColorScheme, toggleColorScheme } = useMantineColorScheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  let languageValue: string = '';
  if (typeof localStorage !== 'undefined') {
    languageValue = localStorage.getItem('lang') || '';
  }

  useHotkeys([['ctrl+J', () => toggleColorScheme()]]);

  const ToggleTheme = forwardRef<HTMLDivElement>((props, ref) => (
    <div ref={ref} {...props}>
      <Button
        variant="default"
        onClick={() => {
          toggleColorScheme();
        }}
        style={{ border: 'none', zIndex: 99 }}
      >
        <IconBrightnessDown style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        {dark ? <Text>{translate('landingPageEight.dark')}</Text> : <Text>{translate('landingPageEight.light')}</Text>}
      </Button>
    </div>
  ));

  const router = useRouter();

  return (
    <Box className={classes.outerWrapper}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Flex className={classes.logoStyle} align={'center'} gap={'25px'}>
            <Image src={Images.logoImage} height={'80px'} width={'40px'} alt={'logo-image'} />
            <Flex
              className={classes.languageSection}
              gap={'4px'}
              onClick={() => {
                changeLanguage();
              }}
              style={{ zIndex: 99 }}
            >
              <Image src={Images.flag} height={'21px'} width={'21px'} alt={'flag'} />
              {/* {languageValue === 'ar' ? (
                <Text c={theme.colors.white[0]}>ar</Text>
              ) : (
                <Text c={theme.colors.white[0]}>en</Text>
              )} */}
              {language == 'en' ? (
                <Flex style={{ color: 'white' }}>en</Flex>
              ) : (
                <Flex style={{ color: 'white' }}>لغة</Flex>
              )}
            </Flex>
          </Flex>

          <Group h="100%" gap={'10px'} visibleFrom="sm">
            <a href="#" className={classes.link}>
              <Text c={theme.colors.white[0]}>{translate('landingPageEight.aboutUs')}</Text>
            </a>
            <a href="#" className={classes.link}>
              <Text c={theme.colors.white[0]}>{translate('landingPageEight.whyLime')}</Text>
            </a>
            <a href="#" className={classes.link}>
              <Text c={theme.colors.white[0]}>{translate('landingPageEight.vehicles')}</Text>
            </a>
            <a href="#" className={classes.link}>
              <Text c={theme.colors.white[0]}>{translate('landingPageEight.locations')}</Text>
            </a>
            <a href="#" className={classes.link}>
              <Text color={theme.colors.white[0]}>{translate('landingPageEight.advertise')}</Text>
            </a>
            <a href="#" className={classes.link}>
              <Text color={theme.colors.white[0]}>{translate('landingPageEight.blog')}</Text>
            </a>
            <a href="#" className={classes.link}>
              <Text color={theme.colors.white[0]}>{translate('landingPageEight.help')}</Text>
            </a>
            <Tooltip label={'Ctrl+J to Toggle Themes'} withArrow>
              <ToggleTheme />
            </Tooltip>

            <Button
              variant="filled"
              bg={theme.colors.limeGreen[0]}
              c={theme.colors.black[0]}
              h={'48px'}
              radius={'40px'}
            >
              {translate('landingPageEight.downloadApp')}
            </Button>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            aria-label="menu"
            color="white"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <a href="#" className={classes.link}>
            {translate('landingPageEight.aboutUs')}
          </a>
          <a href="#" className={classes.link}>
            {translate('landingPageEight.whyLime')}
          </a>
          <a href="#" className={classes.link}>
            {translate('landingPageEight.vehicles')}
          </a>
          <a href="#" className={classes.link}>
            {translate('landingPageEight.locations')}
          </a>
          <a href="#" className={classes.link}>
            {translate('landingPageEight.advertise')}
          </a>
          <a href="#" className={classes.link}>
            {translate('landingPageEight.blog')}
          </a>
          <a href="#" className={classes.link}>
            {translate('landingPageEight.help')}
          </a>
        </ScrollArea>
      </Drawer>

      <div>
        <img
          fetchPriority="high"
          decoding="async"
          loading="eager"
          src={isMobileScreen ? Images.heroSectionSmallImage : Images.heroSection}
          alt="Competitors"
          width="100%"
          height="651px"
          style={{ zIndex: 2 }}
        />
        <Center
          p="md"
          className={classes.heroSectionTextWrapper}
          style={{ position: 'absolute', top: 0, zIndex: 3 }}
        >
          <Flex className={classes.greenTextOuterContainer}>
            <Text className={classes.rideGreenText} c={theme.colors.white[0]}>
              {translate('landingPageEight.rideGreen')}
            </Text>
            <Flex gap={'10px'}>
              <Button variant="outline" h={'48px'} radius={'40px'} color={theme.colors.white[0]}>
              {translate('landingPageEight.ourCities')}
              </Button>
              <Button
                variant="filled"
                bg={theme.colors.limeGreen[0]}
                c={theme.colors.black[0]}
                h={'48px'}
                radius={'40px'}
              >
                {translate('landingPageEight.downloadApp')}
              </Button>
            </Flex>
          </Flex>
        </Center>
      </div>
    </Box>
  );
};

export default HeroSection;
