import { Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import withRouter from '~/hooks/withRouter.jsx';

import { Main } from '~/pages/main/index.jsx';
// import { Home } from '~/pages/home/index.jsx';
// import { Portfolio } from '~/components/portfolio/index.jsx';
// import { ContactUs } from '~/pages/contact/index.jsx';
// import { About } from '~/pages/about/index.jsx';

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames='page'
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path='/' element={<Main />} />
        {/* <Route exact path='/' element={<Home />} /> */}
        {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} /> */}
        {/* <Route path='/portfolio' element={<Portfolio />} /> */}
        <Route path='*' element={<Main />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className='s_c'>
      <AnimatedRoutes />
    </div>
  );
}

export default AppRoutes;
