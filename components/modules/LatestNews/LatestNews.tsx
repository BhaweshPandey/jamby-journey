import { Flex, Text, useMantineTheme, Image, Button } from '@mantine/core';
import React from 'react';
import { Images } from '@/public';
import classes from './LatestNews.module.css';
import { translate } from '@/i18n';

const LatestNews = () => {
  const theme = useMantineTheme();

  const lime = [
    {
      title: `${translate('landingPageEight.title1')}`,
      description: `${translate('landingPageEight.description1')}`,
      authorAndDate: `${translate('landingPageEight.date1')}`,
      img: Images.scienceImage,
    },
    {
      title: '',
      description: `${translate('landingPageEight.description2')}`,
      authorAndDate: `${translate('landingPageEight.date2')}`,
      img: Images.heroOfTheMonth,
    },
    {
      title: '',
      description: `${translate('landingPageEight.description3')}`,
      authorAndDate: `${translate('landingPageEight.date3')}`,
      img: Images.limeRecaps,
    },
  ];

  return (
    <Flex
      bg={theme.colors.black[1]}
      direction={'column'}
      className={classes.ourVehiclesOuterContainer}
    >
      <Flex direction={'column'} className={classes.textWrapper}>
        <Text c={theme.colors.limeGreen[1]} className={classes.titleLimeTimes}>
        {translate('landingPageEight.limeTime')}
          </Text>
        <Text className={classes.textSize} c={theme.colors.white[0]}>
        {translate('landingPageEight.latestNews')}
        </Text>
      </Flex>
      <Flex gap={'20px'} className={classes.howToLimeContainer}>
        {lime.map((limeItem, index) => {
          return (
            <Flex direction={'column'} key={index} className={classes.limeItemContainer}>
              <Flex>
                <Image src={limeItem.img} className={classes.imageBorderRadius} 
                alt={limeItem.img}
                />
              </Flex>
              <Flex gap={'5px'} direction={'column'}>
                <Text className={classes.titleSize} c={theme.colors.limeGreen[0]}>
                  {limeItem.title}
                </Text>
                <Text className={classes.descriptionHeight} c={theme.colors.white[0]}>
                  {limeItem.description}
                </Text>
                <Text className={classes.authorAndDate} c={theme.colors.white[0]}>
                  {limeItem.authorAndDate}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex className={classes.viewMoreContainer}>
        <Button
          variant="filled"
          className={classes.viewMore}
          bg={theme.colors.limeGreen[0]}
          c={theme.colors.black[0]}
        >
          {translate('landingPageEight.viewMore')}
        </Button>
      </Flex>
    </Flex>
  );
};

export default LatestNews;
