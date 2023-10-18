import Themetoggle from '~/components/themetoggle/index.jsx';

import './style.css';

const Headermain = () => {
  return (
    <>
      <header className='fixed-top site__header'>
        <Themetoggle />
      </header>
      <div className='br-top'></div>
      <div className='br-bottom'></div>
      <div className='br-left'></div>
      <div className='br-right'></div>
    </>
  );
};

export default Headermain;
