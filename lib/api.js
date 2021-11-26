export const getStorages = async () => {
  const response = await fetch('https://doblequeso8.ing.puc.cl/storages')
  return await response.json()
}

export const getStocks = async () => {
  const response = await fetch('https://doblequeso8.ing.puc.cl/stocks')
  return await response.json()
}
export const getStats = async () => {
  const response = await fetch('https://doblequeso8.ing.puc.cl/stats')
  return await response.json()
}
