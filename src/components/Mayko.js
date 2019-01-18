import React from 'react';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const Mayko = () => {
  return (
    <>
    <Row>
    <Col span={8}>
    <a href="https://www.instagram.com/bumpz_music/" >
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://instagram.faju2-1.fna.fbcdn.net/vp/6eda107eed83ca47e809afac0bcbecba/5CBE0042/t51.2885-15/e35/35616795_352566388603524_7125844068302585856_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
    >
      <Meta
        title="Mayko dedo de Pica"
        description="www.filhosdaputa.com"
      />
    </Card>
    </a>
    </Col>
    <Col span={8}>
    <h2>PAU NO CU DE GERALDO =></h2>
    </Col>
    <Col span={8}>
    <a href="https://www.instagram.com/gerld.neto/" >
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://instagram.faju2-1.fna.fbcdn.net/vp/e873dd443d6adfe0a196fd16adafb95d/5CFBA581/t51.2885-15/e35/39575481_457337251428521_3208226409881272320_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
    >
      <Meta
        title="Geraldo Rapper"
        description="www.jamorreu.com"
      />
    </Card>
    </a>
    </Col>
    </Row>
    </>
  )
}


  export default Mayko
