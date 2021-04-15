import React from "react";
import {Layout} from 'antd';
import "./CustomLayout.scss";

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="custom-layout">
                <Header>
                    <h2 className="custom-layout_name-header">Git branch formatter</h2>
                </Header>
                <Content className="custom-layout_content">
                    {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Git branch formatter - 2018 - Created by Michal Malujdy</Footer>
            </Layout>
        );
    }
}

export default CustomLayout;