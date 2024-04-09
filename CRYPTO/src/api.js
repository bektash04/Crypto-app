import {cryptoData, cryptoAssets} from "./data.js"

export function FakeFetchCrypto () {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve(cryptoData)
    }, 2000)
    })
}

export function FetchAssets () {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve(cryptoAssets)
    }, 2000)
    })
}