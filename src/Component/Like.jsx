import React from 'react';
import PropTypes from 'prop-types';

function Main(props) {
  const { handleClick, like,handleNo } = props;
  const Like = like.like ? 'like' : 'don\'t like';
  return (
    <div className="App">
      <p onClick={handleClick}>
          you {Like} this;
        </p>
        <button onClick={handleNo}>no</button>
    </div>
  );
}

Main.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleNo: PropTypes.func.isRequired,
  like: PropTypes.object.isRequired,
};

export default Main; // 连接redux
