import { useEffect, useState } from 'react'
import { axiosEcommerce } from '../../utils/configAxios'

const ProductDetail = ({productId}) => {
    const [productData, setProductData] = useState()

    useEffect(() => {
        axiosEcommerce.get(`products/${productId}`)
          .then((res) => setProductData(res.data))
          .catch((err) => console.log(err))
        
    }, [])

    return (
        <section>
            <section>
                <div>
                    <img src={productData.images[0].url} alt="" />
                </div>
            </section>
            
        </section>
    )
}

export default ProductDetail
