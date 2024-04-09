import React from 'react'
import {Flex, Typography } from 'antd'

const CoinInfo = ({coin, widthSymbol}) => {
  return (
    <Flex align="center">
        <img
          src={coin.icon}
          alt={coin.name}
          style={{ width: 40, marginRight: 10 }}
        />
        <Typography.Text level={2} style={{ margin: 0, fontWeight: 'bold', fontSize: '20px'}}>
        {widthSymbol && <span>({coin.symbol})</span>}  {coin.name}
        </Typography.Text>
      </Flex>
  )
}

export default CoinInfo