import HeroSection from '@/components/modules/HeroSection';
import DiscoverGenSection from '@/components/modules/DiscoverGenSection';
import AppSection from '@/components/modules/AppSection';
import Cities from '@/components/modules/Cities';
import CorePrinciples from '@/components/modules/CorePrinciples/CorePrinciples';
import LatestNews from '@/components/modules/LatestNews/LatestNews';
import DownloadApp from '@/components/modules/DownloadApp/DownloadApp';
import Footer from '@/components/modules/Footer/Footer';
import { i18nx } from '../../i18n';
import { useState, useEffect, useContext } from 'react';
import I18nContext from '@/context/i18nContext';

const LandingPage = () => {

  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])


  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language:LanguageSwitch, changeLanguage } = context;

  const [languageTranslate, setlanguageTranslate] = useState('');

  let language:string = '';
 
  console.log('language', language);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      language = localStorage.getItem('lang') || '';
      setlanguageTranslate(language);
     }
  },[])

  return (
    <div 
    dir={LanguageSwitch === 'ar' ? 'rtl' : 'ltr'}
    >
      <HeroSection 
     
      />
      <DiscoverGenSection />
      <AppSection />
      <Cities languageTranslate={languageTranslate}/>
      <CorePrinciples languageTranslate={languageTranslate}/>
      <LatestNews />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default LandingPage;
