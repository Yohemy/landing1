import  { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import withRouter from '~/hooks/withRouter.jsx';
import AnimatedCursor from '~/hooks/AnimatedCursor.jsx';

import AppRoutes from './routes.jsx';
import Headermain from '~/header/index.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename='/'>
      <div className='cursor__dot'>
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color='255, 255 ,255'
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
