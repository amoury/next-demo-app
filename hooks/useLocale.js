import { useRouter } from 'next/router';
import translate from '../utils/i18n/translate';

const useLocale = () => {
  const { locale, locales, defaultLocale } = useRouter();
  const [lang, region] = locale.split('-');

  const t = translate(lang);
  
  return { lang, region, defaultLocale, t };
}

export default useLocale;