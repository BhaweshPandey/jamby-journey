import { Flex, Image, Text, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import React, { useContext } from 'react';
import { Carousel } from '@mantine/carousel';
import classes from './Cities.module.css';
import { Images } from '@/public';
import I18nContext from '@/context/i18nContext';
import { translate } from '@/i18n';

const Cities = (props: { languageTranslate: string }) => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;

  const theme = useMantineTheme();

  const carouselData = [
    {
      id: 1,
      img: Images.newyork,
      slideName: `${translate('landingPageEight.newYork')}`,
    },
    {
      id: 2,
      img: Images.sanfrancisco,
      slideName: `${translate('landingPageEight.sanFrancisco')}`,
    },
    {
      id: 3,
      img: Images.washington,
      slideName: `${translate('landingPageEight.washingtonDC')}`,
    },
    {
      id: 4,
      img: Images.newyork,
      slideName: `${translate('landingPageEight.newYork')}`,
    },
    {
      id: 5,
      img: Images.sanfrancisco,
      slideName: `${translate('landingPageEight.sanFrancisco')}`,
    },
  ];
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <Flex className={classes.citiesCarousel}>
      <Flex direction={'column'} className={classes.textWrapper}>
        <Text c={theme.colors.limeGreen[1]} className={classes.citiesTitle}>
          {translate('landingPageEight.locations')}
        </Text>
        <Text className={classes.textSize} c={dark ? theme.colors.white[0] : theme.colors.black[0]}>
          {translate('landingPageEight.ourUsCities')}
        </Text>
      </Flex>
      <Carousel
        withIndicators
        height={470}
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        loop
        align="start"
        slidesToScroll={1}
        style={{ width: '100%', direction: 'ltr' }}
        classNames={classes}
      >
        {carouselData.map((carouselItem) => {
          return (
            <Carousel.Slide key={carouselItem.id} className={classes.outerContainerCarouselSlide}>
              <div className={classes.carouselContainerWidth}>
                <Image
                  src={carouselItem.img}
                  fit="contain"
                  width={'488px'}
                  height={'380px'}
                  alt={carouselItem.img}
                />
                <Flex
                  className={
                    props.languageTranslate == 'en'
                      ? classes.textSlideOuterContainer
                      : classes.textSlideOuterContainerAr
                  }
                >
                  <Text
                    className={classes.slideName}
                    c={dark ? theme.colors.white[0] : theme.colors.black[0]}
                  >
                    {carouselItem.slideName}{' '}
                  </Text>
                  <Image
                    src={Images.arrowRightIcon}
                    fit="contain"
                    width={'11.5px'}
                    height={'12px'}
                    alt={'arrow-right-icon'}
                  />
                </Flex>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Flex>
  );
};

export default Cities;
