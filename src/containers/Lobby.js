import React from 'react';
import Mayko from '../components/Mayko';
import Geraldo from '../components/Geraldo';
import {Col, Row} from 'antd';

class Dashboard extends React.Component {
  render() {
    document.title = "Mayko Rancoroso";
    return (
      <>
      <Row gutter={24} type="flex" justify="space-around" align="middle">
      <Col xs={{ span: 24 }} lg={{ span: 8 }}>
      <Mayko />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 8 }}>
      <h2>GERALDO FILHO DA PUTA</h2>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 8 }}>
      <Geraldo />
      </Col>
      </Row>
      </>

    )
  }
}

export default Dashboard
