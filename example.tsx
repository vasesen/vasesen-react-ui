//import Icon from "./lib/components/icon/icon"
//import Button from "./lib/components/button/button"
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Route, NavLink} from 'react-router-dom'
import './example.scss'

import LayoutExample from './lib/components/layout/layout.example'
import IconDemo from './lib/components/icon/demo/icon.demo'
import  { Layout,Sider,Header, Content, Footer } from "./lib/components/layout/layout"




ReactDOM.render((
    <Router>
        <Layout className='page'>
            <Header className='page-header'>
                <img src={require('./logo.png')} width="120" height="60" alt=''/>
            </Header>
            <Layout>
                <Sider className='page-sider'>
                    <h2>组件</h2>
                    <ul>
                        <li><NavLink to="./color">颜色</NavLink></li>
                        <li><NavLink to="./icon">icon</NavLink></li>
                        <li><NavLink to="./button">按钮</NavLink></li>
                        <li><NavLink to="./grid">Grid</NavLink></li>
                        <li><NavLink to="./layout">布局</NavLink></li>
                        <li><NavLink to="./form">表单</NavLink></li>
                        <li><NavLink to="./input">输入框</NavLink></li>
                        <li><NavLink to="./radio">单选框</NavLink></li>
                        <li><NavLink to="./switch">开关</NavLink></li>
                         <li><NavLink to="./tag">标签</NavLink></li>
                        <li><NavLink to="./select">选择器</NavLink></li>
                        <li><NavLink to="./carousel">走马灯</NavLink></li>
                        <li><NavLink to="./treeSelect">树选择器</NavLink></li>
                        <li><NavLink to="./tag">标签</NavLink></li>
                        <li><NavLink to="./tooltip">文字提示</NavLink></li>
                        <li><NavLink to="./tags">标签页</NavLink></li>
                        <li><NavLink to="./table">表格</NavLink></li>
                        <li><NavLink to="./message">提示</NavLink></li>
                        <li><NavLink to="./pagination">分页</NavLink></li>
                    </ul>
                </Sider>
                <Content className="page-main">
                    <Route path='/layout' component= {LayoutExample} />
                    <Route path='/icon' component= {IconDemo} />
                </Content>
            </Layout>
            
            <Footer className='page-footer'>
                footer
            </Footer>
        </Layout>
    </Router>
    
),document.querySelector('#root'))