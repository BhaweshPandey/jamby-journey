import {
  Flex,
  Text,
  useMantineTheme,
  Image,
  Container,
  useMantineColorScheme,
} from '@mantine/core';
import React, { useContext } from 'react';
import { Images } from '@/public';
import classes from './DiscoverGenSection.module.css';
import { translate } from '@/i18n';

const DiscoverGenSection = () => {

  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Flex direction={'column'} className={classes.discoverGenSection} gap={'64px'}>
      <Flex direction={'column'} className={classes.discoverGenInnerSection}>
        <Text className={classes.vehicleTextSection} c={theme.colors.limeGreen[1]}>
          {translate('landingPageEight.ourVehicles')}
        </Text>
        <Text
          className={classes.discoverGenTextSection}
          c={dark ? theme.colors.white[0] : theme.colors.black[0]}
        >
          {translate('landingPageEight.discoverGen4')}
        </Text>
      </Flex>
      <Flex gap={'20px'} className={classes.electricVehicleSection}>
        <Flex
          bg={dark ? theme.colors.black[0] : theme.colors.white[2]}
          className={classes.eScooterSection}
        >
          <Image
            src={Images.scooter}
            fit="contain"
            className={classes.scooterSize}
            alt={'scooter'}
          />
          <Text
            className={classes.eScooterText}
            c={dark ? theme.colors.white[0] : theme.colors.black[0]}
          >
          {translate('landingPageEight.eScooter')}
          </Text>
        </Flex>
        <Flex
          bg={dark ? theme.colors.black[0] : theme.colors.white[2]}
          className={classes.eBikeSection}
        >
          <Image src={Images.cycle} fit="contain" className={classes.eBikeSize} alt={'cycle'} />
          <Text
            className={classes.eBikeText}
            c={dark ? theme.colors.white[0] : theme.colors.black[0]}
          >
            {translate('landingPageEight.eBike')}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DiscoverGenSection;
