import React from 'react'

export const useDatasetTopRate = (initialState) => {
  const stores = {}
  const models = {}

  const setInitialState = () => {
    initialState.forEach(item => {
      if (item.storename in stores) {
        stores[item.storename] += item.stock
      } else {
        stores[item.storename] = item.stock
      }

      if (item.modelname in models) {
        models[item.modelname] += item.stock
      } else {
        models[item.modelname] = item.stock
      }
    });
  }

  const getStores = () => {
    return Object.keys(stores).map((key) => {
      return { label: key, rate: stores[key] }
    }).sort((a, b) => (a.rate > b.rate) ? -1 : 1);
  }

  const getModels = () => {
    return Object.keys(models).map((key) => {
      return { label: key, rate: models[key] }
    }).sort((a, b) => (a.rate > b.rate) ? -1 : 1);
  }

  setInitialState()

  return { getStores, getModels }
}