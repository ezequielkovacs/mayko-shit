import React from 'react';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const Geraldo = () => {
  return (
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
  )
}


  export default Geraldo
