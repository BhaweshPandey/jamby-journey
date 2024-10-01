import { Flex, Image, Text, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { Carousel } from '@mantine/carousel';
import classes from './CorePrinciples.module.css';
import { Images } from '@/public';
import { translate } from '@/i18n';


const CorePrinciples = (
  props:{
    languageTranslate:string
  }
) => {
  const theme = useMantineTheme();

  // const carouselData = [
  //   {
  //     id: 1,
  //     img: Images.safety,
  //     slideName: 'Safety',
  //   },
  //   {
  //     id: 2,
  //     img: Images.sustainability,
  //     slideName: 'Sustainability',
  //   },
  //   {
  //     id: 3,
  //     img: Images.community,
  //     slideName: 'Community',
  //   },
  //   {
  //     id: 4,
  //     img: Images.newyork,
  //     slideName: 'Sustainability',
  //   },
  //   {
  //     id: 5,
  //     img: Images.sanfrancisco,
  //     slideName: 'San Francisco',
  //   },
  // ];

  const carouselData = [
    {
        id: 1,
        img: Images.safety,
        slideName: `${translate('landingPageEight.safety')}`,
    },
    {
        id: 2,
        img: Images.sustainability,
        slideName: `${translate('landingPageEight.sustainability1')}`,
    },
    {
        id: 3,
        img: Images.community,
        slideName: `${translate('landingPageEight.community')}`,
    },
    {
        id: 4,
        img: Images.newyork,
        slideName: `${translate('landingPageEight.sustainability2')}`,
    },
    {
        id: 5,
        img: Images.sanfrancisco,
        slideName: `${translate('landingPageEight.sanfrancisco')}`,
    },
];

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';


  return (
    <Flex className={classes.citiesCarousel}>
      <Flex direction={'column'} className={classes.textWrapper}>
        <Text c={theme.colors.limeGreen[1]} className={classes.whyLimeTitle}>
          {translate('landingPageEight.whyLime')}
        </Text>
        <Text className={classes.textSize} c={dark ? theme.colors.white[0] : theme.colors.black[0]}>
        {translate('landingPageEight.corePrinciples')}
        </Text>
      </Flex>
      <Carousel
        withIndicators
        height={470}
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        loop
        align="start"
        slidesToScroll={1}
        style={{ width: '100%', direction:'ltr' }}
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
                <Flex className={props.languageTranslate === 'en' ? classes.textSlideOuterContainer : classes.textSlideOuterContainerAr}>
                  <Text className={classes.slideName} c={dark ? theme.colors.white[0] : theme.colors.black[0]}>{carouselItem.slideName} </Text>
                </Flex>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Flex>
  );
};

export default CorePrinciples;
