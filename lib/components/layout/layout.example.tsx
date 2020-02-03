import React from 'react'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'

export default function  () {
    return(
        <div>
            <div>
                <h1>第一种布局</h1>
                <Layout style={{height:300}}>
                    <Header  style={{height:50,background:'#999'}} >header</Header>
                    <Content style={{height:200,background:'#666'}}>content</Content>
                    <Footer style={{height:50,background:'#333'}}>footer</Footer>
                </Layout>
            </div>
            
            <div>
                <h1>第二种布局</h1>
                <Layout style={{height:300}}>
                    <Header  style={{height:50,background:'#999'}}>header</Header>
                    <Layout style={{height:200}}>
                        <Sider style={{width:200,background:'#333'}}>aside</Sider>
                        <Content style={{background:'#333'}}>content</Content>
                    </Layout>
                    <Footer style={{height:50,background:'#333'}}>footer</Footer>
                </Layout>
            </div>

            <div>
                <h1>第三种布局</h1>
                <Layout style={{height:300}}>
                    <Header  style={{height:50,background:'#999'}}>header</Header>
                    <Layout style={{height:200}}>
                        <Content style={{background:'#333'}}>content</Content>
                        <Sider style={{width:200,background:'#333'}}>aside</Sider>
                        
                    </Layout>
                    <Footer style={{height:50,background:'#333'}}>footer</Footer>
                </Layout>
            </div>

            <div>
                <h1>第四种布局</h1>
                <Layout style={{height:300}}>
                    <Sider style={{height:100}}>sider</Sider>
                    <Footer style={{height:50,background:'#333'}}>footer</Footer>
                </Layout>
            </div>
        </div>
    )
}