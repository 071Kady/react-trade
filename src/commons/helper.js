export const formatPrice = cents =>{
    return (cents/100).toLocaleString('zh-TW',{
      style: "currency",
      currency: "TWD"
    })
  }
