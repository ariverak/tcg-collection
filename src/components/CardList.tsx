/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Row, Col } from 'antd'
import Card from './Card'

const CardList = ({ cards }: { cards: any[] }) => {
  return (
    <Row gutter={[16, 16]} justify='center'>
      {cards.map((pokemon, index) => (
        <Col xs={24} sm={12} md={8} lg={5} key={index}>
          <Card frontImage={pokemon} flippedDelay={index * 50} />
        </Col>
      ))}
    </Row>
  )
}

export default CardList
