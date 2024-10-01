import { Flex, useMantineTheme } from '@mantine/core';
import React from 'react';
import classes from './DownloadApp.module.css';
import { Images } from '@/public';
import { Image } from '@mantine/core';
import { Text } from '@mantine/core';
import { translate } from '@/i18n';


const DownloadApp = () => {
  const theme = useMantineTheme();

  return (
    <Flex className={classes.downloadAppOuterContainer} bg={theme.colors.black[2]}>
      {/* <Flex className={classes.imageContainer}>
        <Image src={Images.downloadApp} className={classes.downloadApp} alt={'download-app'} />
      </Flex> */}
      <Flex direction={'column'} gap={'32px'} c={theme.colors.white[0]}>
        <Text className={classes.downloadAppSize}>
        {translate('landingPageEight.downloadApp')}
          </Text>
        <Flex gap={'10px'}>
          <Image src={Images.appStore} className={classes.appStoreIcon} alt={'app-store'} />
          <Image src={Images.playStore} className={classes.playStoreIcon} alt={'play-store'} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DownloadApp;
