import React, { useState } from 'react';
import { Flex, useMantineTheme } from '@mantine/core';
import classes from './Footer.module.css';
import { Images } from '@/public';
import { Image } from '@mantine/core';
import { Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { translate } from '@/i18n';

const Footer = () => {
  const theme = useMantineTheme();
  const isMobileView = useMediaQuery('(max-width: 768px)');
  const [isShowJoinUsSubheading, setIsShowJoinUsSubheading] = useState(false);
  const [isShowAboutSubheading, setIsShowAboutSubheading] = useState(false);
  const [IsProgramsSubheading, setIsProgramsSubheading] = useState(false);

  return (
    <Flex bg={theme.colors.black[0]} direction={'column'}>
      <Flex className={classes.footerContainer}>
        <Flex className={classes.logoOuterContainer}>
          <Image src={Images.logoImage} className={classes.logoContainer} alt={'lime-logo'} />
        </Flex>
        <Flex className={classes.joinUsWrapper}>
          <Flex className={classes.joinUsInnerWrapper}>
            <Text
              c={theme.colors.white[0]}
              className={!isMobileView ? classes.footerTitleSize : classes.footerMobileTitleSize}
              h={'auto'}
            >
              {translate('landingPageEight.joinus')}
            </Text>
            {isMobileView ? (
              <Image
                src={Images.downArrowIcon}
                alt={'down-arrow-icon'}
                width={'14px'}
                height={'12px'}
                onClick={() => setIsShowJoinUsSubheading((prev) => !prev)}
              />
            ) : null}
          </Flex>
          {isShowJoinUsSubheading ? (
            <>
              <Text c={theme.colors.white[3]} className={classes.careers}>
                {translate('landingPageEight.careers')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.limeTimeBlog}>
                {translate('landingPageEight.limetimesblog')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.press}>
                {translate('landingPageEight.press')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.partners}>
                {translate('landingPageEight.partners')}
              </Text>
            </>
          ) : null}
          {!isMobileView ? (
            <>
              <Text c={theme.colors.white[3]} className={classes.careers}>
                {translate('landingPageEight.careers')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.limeTimeBlog}>
                {translate('landingPageEight.limetimesblog')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.press}>
                {translate('landingPageEight.press')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.partners}>
                {translate('landingPageEight.partners')}
              </Text>
            </>
          ) : null}
        </Flex>
        <Flex className={classes.aboutUsWrapper} gap={'20px'}>
          <Flex className={classes.aboutUsInnerWrapper}>
            <Text
              c={theme.colors.white[0]}
              className={!isMobileView ? classes.footerTitleSize : classes.footerMobileTitleSize}
            >
              {translate('landingPageEight.about')}
            </Text>
            {isMobileView ? (
              <Image
                src={Images.downArrowIcon}
                alt={'down-arrow-icon'}
                width={'14px'}
                height={'12px'}
                onClick={() => setIsShowAboutSubheading((prev) => !prev)}
              />
            ) : null}
          </Flex>

          {isShowAboutSubheading ? (
            <>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.community')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.ebike')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.escooter')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.sustainability')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.innovation')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.safety')}
              </Text>
            </>
          ) : null}
          {!isMobileView ? (
            <>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.community')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.ebike')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.escooter')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.sustainability')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.innovation')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
                {translate('landingPageEight.safety')}
              </Text>
            </>
          ) : null}
        </Flex>
        <Flex className={classes.programsWrapper} gap={'20px'}>
          <Flex className={classes.programsInnerWrapper}>
            <Text
              c={theme.colors.white[0]}
              className={!isMobileView ? classes.footerTitleSize : classes.footerMobileTitleSize}
            >
              {translate('landingPageEight.programs')}
            </Text>
            {isMobileView ? (
              <Image
                src={Images.downArrowIcon}
                alt={'down-arrow-icon'}
                width={'14px'}
                height={'12px'}
                onClick={() => setIsProgramsSubheading((prev) => !prev)}
              />
            ) : null}
          </Flex>

          {IsProgramsSubheading ? (
            <>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.advertise')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.limeaccess')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.limehero')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.limeassist')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.insurance')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.insurance')}
              </Text>
            </>
          ) : null}
          {!isMobileView ? (
            <>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.advertise')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.limeaccess')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.limehero')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.limeassist')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.insurance')}
              </Text>
              <Text c={theme.colors.white[3]} className={classes.footerFontSize}>
              {translate('landingPageEight.insurance')}
              </Text>
            </>
          ) : null}
        </Flex>
        <Flex className={classes.findLocation} gap={'32px'}>
          <Text
            c={theme.colors.white[3]}
            className={!isMobileView ? classes.footerTitleSize : classes.footerMobileTitleSize}
          >
            {translate('landingPageEight.findlocation')}
          </Text>
          <Text c={theme.colors.white[3]}>{translate('landingPageEight.gethelp')}</Text>
          <Text c={theme.colors.white[3]}>{translate('landingPageEight.sitemap')}</Text>
          <Flex style={{ width: 'fit-content' }} gap={'12px'}>
            <Image src={Images.twitterImage} width={'32px'} height={'32px'} alt={'twitter-image'} />
            <Image
              src={Images.facebookImage}
              width={'32px'}
              height={'32px'}
              alt={'facebook-image'}
            />
            <Image
              src={Images.linkedInImage}
              width={'32px'}
              height={'32px'}
              alt={'linkedIn-image'}
            />
            <Image src={Images.youtubeImage} width={'32px'} height={'32px'} alt={'youtube-image'} />
            <Image
              src={Images.instagramImage}
              width={'32px'}
              height={'32px'}
              alt={'instagram-image'}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex className={classes.copyrightNotice}>
        <Text c={theme.colors.white[0]}>{translate('landingPageEight.2024lime')}</Text>
        <Flex className={classes.footerSubheading}>
          <Text c={theme.colors.white[0]} className={classes.copyrightNoticeFontSize}>
            {translate('landingPageEight.useragreement')}
          </Text>
          <Text c={theme.colors.white[0]} className={classes.copyrightNoticeFontSize}>
          {translate('landingPageEight.privacynotice')}
          </Text>
          <Text c={theme.colors.white[0]} className={classes.copyrightNoticeFontSize}>
          {translate('landingPageEight.datarequest')}
          </Text>
          <Text c={theme.colors.white[0]} className={classes.copyrightNoticeFontSize}>
          {translate('landingPageEight.research')}
          </Text>
          <Text c={theme.colors.white[0]} className={classes.copyrightNoticeFontSize}>
          {translate('landingPageEight.legalbases')}
          </Text>
          <Text c={theme.colors.white[0]} className={classes.copyrightNoticeFontSize}>
          {translate('landingPageEight.myinformation')}
          </Text>
          <Text c={theme.colors.white[0]} className={classes.copyrightNoticeFontSize}>
          {translate('landingPageEight.imprint')}
          </Text>
          <Text>{translate('landingPageEight.imprint')}</Text>
        </Flex>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
