import { Flex, Text, useMantineTheme, Image, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { Images } from '@/public';
import classes from './AppSection.module.css';
import { translate } from '@/i18n';

const AppSection = () => {
  const theme = useMantineTheme();

  const lime = [
    {
      title: `${translate('landingPageEight.locate')}`,
      description: `${translate('landingPageEight.downloadLimeApp')}`,
      img: Images.locate,
    },
    {
      title: `${translate('landingPageEight.scan')}`,
      description: `${translate('landingPageEight.scanQr')}`,
      img: Images.scan,
    },
    {
      title: `${translate('landingPageEight.ride')}`,
      description: `${translate('landingPageEight.followAll')}`,
      img: Images.ride,
    },
  ];

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Flex
      bg={dark ? theme.colors.black[3] : theme.colors.white[2]}
      direction={'column'}
      className={classes.ourVehiclesOuterContainer}
    >
      <Flex direction={'column'} className={classes.textWrapper}>
        <Text c={theme.colors.limeGreen[1]} className={classes.titleFontSize}>
        {translate('landingPageEight.theApp')}
        </Text>
        <Text className={classes.textSize} c={dark ? theme.colors.white[0] : theme.colors.black[0]}>
        {translate('landingPageEight.howToLime')}
        </Text>
      </Flex>
      <Flex gap={'20px'} className={classes.howToLimeContainer}>
        {lime.map((limeItem, index) => {
          return (
            <Flex direction={'column'} key={index} className={classes.limeItemContainer}>
              <Flex>
                <Image
                  src={limeItem.img}
                  className={classes.imageBorderRadius}
                  alt={limeItem.img}
                />
              </Flex>
              <Flex
                bg={dark ? theme.colors.black[0] : theme.colors.white[0]}
                gap={'30px'}
                className={classes.textSection}
              >
                <Text c={theme.colors.limeGreen[1]} className={classes.titleSection}>
                  {limeItem.title}
                </Text>
                <Text
                  className={classes.descriptionSection}
                  c={dark ? theme.colors.white[0] : theme.colors.black[0]}
                >
                  {limeItem.description}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default AppSection;
