import React from 'react';
import { connect } from 'react-redux';

import { babylonAction } from '../Action/Index';
import Babylon from '../Component/babylon';

function Main(props) {
  return <Babylon {...props} />;
}
//【container】 
export default connect(state => ({ show: state.show }), babylonAction)(Main); // 连接redux
