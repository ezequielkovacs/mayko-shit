import React from 'react';
import { Layout, Menu, Breadcrumb, Col, Row } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {

  render() {
    return(
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
            <Link to="/home">Home</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
            <Link to="/">Home</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <>
          <Row gutter={24} type="flex" justify="space-around" align="middle">
          <Col span={24} style={{ padding: 24, minHeight: 280 }}>
        {this.props.children}
          </Col>
          </Row>
          </>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Mayko Rancoroso
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(CustomLayout)
