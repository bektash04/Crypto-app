import React, { useRef, useState } from 'react'
import {Select, Space,Typography , Flex, Divider, Form, Button, InputNumber,  DatePicker, Result } from 'antd'
import { useCrypto } from '../context/crypto-context'
import CoinInfo from './CoinInfo';


const validateMessages = {
  required: "${label} is required!",
  types: {
    number: '${label} is no valid number'
  },
  number: {
    range: '${label} must me between ${min} and ${max}'
  }

}

const AddAssetForm = ({onClose}) => {
  const [form] = Form.useForm()
  const { crypto, addAsset } = useCrypto()
  const [coin, setCoin] = useState(null)
  const [sumbitted, setSumbitted] = useState(false)
  const assetRef = useRef()

  if(sumbitted){
    return (
      <Result
    status="success"
    title="New asset added"
    subTitle={`Addad ${assetRef.current.amount} of ${coin.name} by rice ${assetRef.current.price}`}
    extra={[
      <Button type="primary" key="console" onClick={onClose}>
        close
      </Button>
    ]}
  />
    )
  }

  if(!coin){
return (
  <Select
  style={{
    width:'100%'
  }}
   onSelect={(v) => setCoin(crypto.find(c => c.id === v))}
   placeholder={'select coin'}
   options={crypto.map(coin => ({
     lable: coin.name,
     value: coin.id,
     icon: coin.icon,
   }))}
   optionRender={(option) => (
     <Space>
       <img width={25} src={option.data.icon} alt={option.data.lable}/>{option.data.lable}
     </Space>
   )}
 />
)
  }
  function onFinish(values) {
    const newAsset = {
      id: coin.id,
      amount: values.amount,
      price: values.price,
      date: values.date ?.$d ?? new Date(),
    }

    assetRef.current = newAsset
    setSumbitted(true)
    addAsset(newAsset)

  }

  function handleamountChange(value) {
    const price = form.getFieldValue('price')

    form.setFieldsValue({
      total: +(value * price).toFixed(2),
    }) 
  }
  function handlePriceChange(value) {
    const amount = form.getFieldValue('amount')
    form.setFieldsValue({
      total: +(amount * value).toFixed(2),
    }) 
  }

  return (
    <Form
    form={form}
    name="basic"
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 10,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
     price: +coin.price.toFixed(2)
    }}
    onFinish={onFinish}
    validateMessages={validateMessages}
  >
    <CoinInfo coin={coin}/>
      <Divider/>
      <Form.Item
      label="amount"
      name="amount"
      rules={[
        {
          required: true,
          type: 'number',
          min: 0,
        },
      ]}
    >
      <InputNumber placeholder='Enter coin amount' 
      onChange={handleamountChange}
      style={{width: '100%'}}
  />
    </Form.Item>

    <Form.Item label="price" name="price">
      <InputNumber onChange={ handlePriceChange} style={{width: '100%'}} />
    </Form.Item>

    <Form.Item label="Date & Time" name="date">
    <DatePicker showTime/>
    </Form.Item>

    <Form.Item label="total" name="total">
      <InputNumber disabled style={{width: '100%'}} />
    </Form.Item>


    <Form.Item>
      <Button type="primary" htmlType="submit">
        Add Asset
      </Button>
    </Form.Item>
  </Form>
  

  )
}

export default AddAssetForm