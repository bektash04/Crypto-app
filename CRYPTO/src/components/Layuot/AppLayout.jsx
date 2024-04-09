import React, { useContext } from 'react'
import { Layout, Spin } from "antd";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";
import CrytpoContext from '../../context/crypto-context';

const AppLayout = () => {
   const {loading} = useContext(CrytpoContext)

   if (loading) {
    return <Spin fullscreen />;
  }
  return (
    <div>
         <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
    </div>
  )
}

export default AppLayout

