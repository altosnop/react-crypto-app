import { cryptoAssets, cryptoData } from './data'

export const fetchCrypto = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 800)
  })
}

export const fetchAssets = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 800)
  })
}
