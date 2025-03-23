import React from 'react';

const OrderProdInfo = ({order}) => {
  const {address,email,name,order_id,order_status,phone_number,price,product_description,product_id,
  product_image,product_name,product_price,quantity,role,shop_address,shop_name,shop_type} = order
  return (
    <>
       
                        <tr key={order_id}>
                            <td>{order_id}</td>
                            <td>{product_name}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td>{shop_name}</td>
                            <td>{order_status}</td>
                        </tr>
      
    </>
  )
}

export default OrderProdInfo;