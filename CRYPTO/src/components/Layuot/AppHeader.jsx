import React, { useEffect, useState } from 'react'
import { Layout, Select, Space, Button, Modal, Drawer} from 'antd';
import { useCrypto } from '../../context/crypto-context';
import CoinInfoModal from '../CoinInfoModal';
import AddAssetForm from '../AddAssetForm';


  const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  
const AppHeader = () => {
  const [select, setSelect] = useState(false)
  const [modal, setModal] = useState(false)
  const [coin, setCoin] = useState(null)
  const [drawer, setDrawer] = useState(false);


  const { crypto } = useCrypto()

useEffect(() => {
  const keypress = (event) => {
    if (event.key === '/') {
      setSelect((prev) => !prev)
    }
  }
  document.addEventListener('keypress', keypress)
  return () => document.removeEventListener('keypress', keypress)
}, [])
  function handlerSelect(value) {
   setCoin(crypto.find(c => c.id === value))
    setModal(true)

  }
  return (
    <>
         <Layout.Header style={headerStyle}>
         <Select
   
    style={{
      width: 250,
    }}
    open={select}
    onSelect={handlerSelect}
    onClick={() => setSelect((prev) => !prev)}
    value={'press / to open'}
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
  <Button type="primary" onClick={() => setDrawer(true)}>Add assets</Button>
  <Modal open={modal} onOk={() => setModal(false)}  onCancel={() => setModal(false)} footer={null}>
    <CoinInfoModal coin={coin}/>
      </Modal>

      <Drawer width={550} title="Basic Drawer" onClose={() => setDrawer(false)} open={drawer} destroyOnClose>
       <AddAssetForm onClose={() => setDrawer(false)}/>
      </Drawer>
         </Layout.Header>
    </>
  )
}

export default AppHeader