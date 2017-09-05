/**
 * Created by zzmx on 2017年7月4日.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileIndex from './components/mobile_index';
import PCUserCenter from './components/pc_usercenter';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query='{min-device-width: 1224px}'>
                    <Router history={hasHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                        <Route path="/usercenter" component={PCUserCenter}></Route>
                    </Router>
                    <PCIndex />
                </MediaQuery>
                <MediaQuery query='{max-device-width: 1224px}'>
                    <MobileIndex />
                </MediaQuery>
            </div>
        );
    };
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'));