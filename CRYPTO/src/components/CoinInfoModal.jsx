import React from "react";
import { Divider, Flex, Tag, Typography } from "antd";
import CoinInfo from "./CoinInfo";

const CoinInfoModal = ({ coin, }) => {
  return (
    <>
      <CoinInfo coin={coin} widthSymbol/>
      <Divider/>
        <Typography.Paragraph>
          <Typography.Text strong>1 day: </Typography.Text>
          <Tag color={coin. priceChange1d > 0 ? "green" : "red"}>{coin. priceChange1d}%</Tag>

          <Typography.Text strong>1 week: </Typography.Text>
          <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>{coin.priceChange1w}%</Tag>

          <Typography.Text strong>1 hour: </Typography.Text>
          <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>{coin.priceChange1h}%</Tag>
        </Typography.Paragraph>


        <Typography.Paragraph>
          <Typography.Text strong>price: </Typography.Text>
          {coin.price.toFixed(2)}$
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text strong>price BTC </Typography.Text>
          {coin.priceBtc}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text strong>marketCap: </Typography.Text>
          {coin.marketCap}$
        </Typography.Paragraph>
      { coin.contractAddress && <Typography.Paragraph>
          <Typography.Text strong>contractAddress: </Typography.Text>
          {coin.contractAddress}
        </Typography.Paragraph>}
        <Typography.Paragraph>
          <Typography.Text strong>decimals: </Typography.Text>
          {coin.decimals}
        </Typography.Paragraph>
    </>
  );
};

export default CoinInfoModal;

// priceChange1h: 0.02,
// priceChange1d: -0.05,
// priceChange1w: -0.03,
