import React from 'react';
import Logo from '../util/images/logo.png';

const intro = () => {
  return (
    <div className="container text-center">
      <img src={Logo} className="img-fluid" alt="Calificator" />
    </div>
  );
}

export default intro;