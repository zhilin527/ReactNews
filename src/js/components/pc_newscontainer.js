/**
 * Created by zzmx on 2017年7月11日.
 */
import React from 'react';
import { Row, Col } from 'antd';
import {Tabs} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product';

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
    render(){
        const settings = {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousel_1.jpg"/></div>
                                    <div><img src="./src/images/carousel_1.jpg"/></div>
                                    <div><img src="./src/images/carousel_1.jpg"/></div>
                                    <div><img src="./src/images/carousel_1.jpg"/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="400px" imageWidth="112px" cardTitle="国际头条"></PCNewsImageBlock>
                            // <PCNewsImageBlock count={6} type="yule" width="400px" imageWidth="112px" cardTitle="娱乐头条"></PCNewsImageBlock>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                        </Tabs>
                        <Tabs class="tabs_product">
                            <TabPane tab="ReactNews 产品" key="1">
                                <PCProduct></PCProduct>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={8} type="guonei" width="100%" imageWidth="132px" cardTitle="国内新闻"></PCNewsImageBlock>
                            <PCNewsImageBlock count={16} type="yule" width="100%" imageWidth="132px" cardTitle="娱乐新闻"></PCNewsImageBlock>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}