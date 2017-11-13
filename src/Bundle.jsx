import { Component } from 'react';//【component】
import PropTypes from 'prop-types';//【proptypes】

class Bundle extends Component {//【component state】
  constructor(props) {
    super(props);
    this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null,
    };
  }
  componentWillMount() {//【props】
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {//【nextprops】
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {//【setstate】
    this.setState({
      mod: null,
    });
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod,
      });
    });
  }

  render() {//【state.mod】
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

Bundle.propTypes = {//【load children】
  load: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};


export default Bundle;
