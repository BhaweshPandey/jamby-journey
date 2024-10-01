import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
// import { Notifications } from '@mantine/notifications';
// import { NavigationProgress } from '@mantine/nprogress';
import { Image } from '@mantine/core';
import { Images } from '@/public';
// import '@mantine/notifications/styles.css';
// import '@mantine/nprogress/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';

import { theme } from '../theme';

//setting up store
import { i18nx } from '../i18n';
// import { RootStore, RootStoreProvider, setupRootStore } from '@/models';
import { useEffect, useState } from 'react';
import { I18nProvider } from '../context/i18nContext';

import { HeroImageBackground } from '@/components/modules/Mantine/HeroImageBackground/HeroImageBackground';
import { HeaderMegaMenu } from '@/components/modules/Mantine/HeaderMegaMenu/HeaderMegaMenu';

const LCP = () => (
  <div>
    {/* <HeaderMegaMenu/>
  <HeroImageBackground/> */}
    <img src={Images.logoImage} alt="Icon" loading="eager" />
  </div>
);

export default function App({ Component, pageProps }: AppProps) {
  // const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  useEffect(() => {
    (async () => {
      // setupRootStore().then(setRootStore);
    })();
  }, []);

  // useEffect(() => {
  //   if (rootStore) {
  //     if (rootStore.i18nStore.appLanguage) i18nx.locale = rootStore.i18nStore.appLanguage;
  //     else {
  //       rootStore.i18nStore.setSystemDefault();
  //     }
  //     if (rootStore.i18nStore.appLanguage) i18nx.locale = rootStore.i18nStore.appLanguage;
  //     else {
  //       rootStore.i18nStore.setSystemDefault();
  //     }
  //   }

  //   return () => {};
  // }, [rootStore]);

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Jamby Journey</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="We're the well known mobile app development company in kuwait who have experience and skilled team members who delivers the projects on time."
        />
        <link rel="canonical" href="https://landing.highpolar.in/" />
        {/* <link rel="shortcut icon" href="/favicon.svg" /> */}
        {/* <link rel="preload" as="image" href="/image/banner.webp" /> */}
      </Head>
      {/* <Notifications />
      <NavigationProgress aria-label="navigation" /> */}
      <ModalsProvider>
        {/* {rootStore ?  */}
        {/* ( */}
        {/* <RootStoreProvider value={rootStore}> */}
        <div
        // dir={rootStore.i18nStore.isRTL ? 'rtl' : 'ltr'}
        >
          <I18nProvider>
            <Component {...pageProps} />
          </I18nProvider>
        </div>
        {/* </RootStoreProvider> */}
        {/* ) : ( */}
        {/* <LCP /> */}
        {/* ) */}
        {/* } */}
      </ModalsProvider>
    </MantineProvider>
  );
}
