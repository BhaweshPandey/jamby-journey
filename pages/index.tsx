// import LandingPage from './landing/index';
import { useContext, useEffect, useState } from "react";
// import { useStores } from '@/models';
// import { observer } from 'mobx-react-lite';
// import Home from './landing';
// import LandingPageNew from './landing-page';
import I18nContext from "@/context/i18nContext";

import LandingPage8 from './landingPage8';
const HomePage = () => {
  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])


  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;

  // const { userStore, i18nStore } = useStores();
  // userStore.loginUser('admin@admin.com', 'admin@123').then((res) => {
  //   if (res.ok) {
  //     console.log('logged in successfully');
  //     userStore.getLoginUserData().then(() => {
  //       console.log(userStore?.loggedInUserData);
  //     });
  //   } else {
  //     console.log('failure');
  //     console.log(res);
  //   }
  // });
  // i18nStore.getCurrentLanguage();
  return (
    <div >
      {/* <LandingPage /> */}
      {isClient && <LandingPage8 />}
    </div>
  );
};
export default HomePage;
