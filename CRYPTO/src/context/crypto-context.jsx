import { createContext, useState, useEffect, useContext } from "react";
import { FakeFetchCrypto, FetchAssets } from "../api"
import {percentDifference,} from '../utils'


const  CrytpoContext = createContext({
    asserts: [],
    crypto: [],
    loading: false,
})
export function CryptoContextProvider({children}) {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  function mapAssets(assets, result) {
    return assets.map(asset => {
      const coin = result.find((c) => c.id === asset.id);
      return {
        grow: asset.price < coin.price,
        growPercent: percentDifference(asset.price, coin.price),
        totalAmount: asset.amount * coin.price,
        totalProfit: asset.amount * coin.price - asset.amount * asset.price,
        name: coin.name,
        ...asset
      };
    })
   
  }

  useEffect(() => {
    async function preload() {
      setLoading(true);
      const { result } = await FakeFetchCrypto();
      const assets = await FetchAssets();

      setAssets(
        mapAssets(assets, result)
      );
      setCrypto(result);
      setLoading(false);
    }
    preload();
  }, []);

  function addAsset(newAsset) {
    setAssets((prev) => mapAssets([...prev, newAsset], crypto ))
    
  }
  return <CrytpoContext.Provider value={{loading, crypto, assets, addAsset}}>{children}</CrytpoContext.Provider>
}


export default CrytpoContext


export function useCrypto(){
  return useContext(CrytpoContext)
}