import React from 'react';
import PropTypes from 'prop-types';

function Main(props) {
  const { handleBlock, show } = props;
  return (
    <div className="App">
      <p onClick={handleBlock}>
      hhh
      </p>
      <canvas></canvas>
    </div>
  );
}
Main.propTypes = {
  handleBlock: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired,
};

export default Main;