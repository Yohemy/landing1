import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta } from '~/content_option';

import { Home } from '~/components/home';
import { About } from '~/components/about';
import { Portfolio } from '~/components/portfolio';
import { ContactUs } from '~/components/contact';

import './style.css';

export const Main = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet='utf-8' />
        <title> {meta.title}</title>
        <meta name='description' content={meta.description} />
      </Helmet>
      <Home />
      <About />
      <Portfolio />
      <ContactUs />
    </HelmetProvider>
  );
};
