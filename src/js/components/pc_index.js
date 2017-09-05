/**
 * Created by zzmx on 2017年7月7日.
 */
import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontainer';

export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader />
                <PCNewsContainer></PCNewsContainer>
                <PCFooter />
            </div>
        );
    };
}