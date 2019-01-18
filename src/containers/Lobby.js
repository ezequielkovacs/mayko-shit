import React from 'react';
import {Mayko, Geraldo, Lusca, LuscaBranco} from '../components/Mayko';
import {Col, Row} from 'antd';

class Dashboard extends React.Component {
  render() {
    document.title = "Mayko Rancoroso";
    return (
      <>
      <Row gutter={24} type="flex" justify="space-around" align="middle">
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
      <Mayko />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
      <Geraldo />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
      <Lusca />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
      <LuscaBranco />
      </Col>
      </Row>
      </>

    )
  }
}

export default Dashboard
