import React, { PureComponent } from 'react';
import {connect } from 'react-redux';
import Apply from './components/Apply';
import Distinct from './components/Distinct';
import Special from './components/Special';


class Header extends PureComponent {

    render(){
        return (
            <div>
               <Apply/>
                <Distinct />
                <Special/>
            </div>
        )
    }

}

export default connect(null,null)(Header);

