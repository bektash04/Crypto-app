import React, { useContext } from "react";
import { Layout, Card, Statistic, List, Typography, Tag } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { capitslize } from "../../utils.js";
import CrytpoContext from "../../context/crypto-context.jsx";

const siderStyle = {
  padding: "1rem"
};

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

const AppSider = () => {
  const { assets} = useContext(CrytpoContext)

  return (
    <>
      <Layout.Sider width="25%" style={siderStyle}>
        {assets.map((asset) => (
          <Card key={asset.id} style={{ marginBottom: "1rem" }}>
            <Statistic
              title={capitslize(asset.id)}
              value={asset.totalAmount}
              precision={2}
              valueStyle={{ color: asset.grow ? "#3f8600" : "#cf1322" }}
              prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="$"
            />
            <List
              size="small"
              dataSource={[
                {
                  title: "totoal Profit",
                  value: asset.totalProfit,
                  withTag: true
                },
                { title: "Asset Amout", value: asset.amount, isPlain: true },
                // {title: 'totoal Profit', value: asset.growPercent}
              ]}
              renderItem={(item) => (
                <List.Item
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{item.title}</span>
                  <span>
                    {item.withTag && (
                      <Tag color={asset.grow ? "green" : "red"}>
                        {asset.growPercent}%
                      </Tag>
                    )}
                    {item.isPlain && item.value}
                    {!item.isPlain && (
                      <Typography.Text type={asset.grow ? "success" : "danger"}>
                        {item.value.toFixed(2)}$
                      </Typography.Text>
                    )}
                  </span>
                </List.Item>
              )}
            />
          </Card>
        ))}
      </Layout.Sider>
    </>
  );
};

export default AppSider;
