import React from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

// require('./Home.css');

class Image extends React.Component {
  constructor(props) {
    super(props);
  }


    componentWillMount() {
      const { steps } = this.props;
      console.log(this.props)
    }

    render() {
      return (
        <div>
          <img src={'http://www.stickpng.com/assets/images/58582c01f034562c582205ff.png'} className='rsc-ts-image sc-gzVnrw hLGSaN' style={{width: '130px', height: '100px'}}/>
        </div>
      );
    }
  }



export default Image;