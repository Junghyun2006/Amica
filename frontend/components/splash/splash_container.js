import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash'

const hi = 'hi'
const msp = state => {
    return {
        test: {hi}
    } 
}

export default connect(msp, null)(Splash);