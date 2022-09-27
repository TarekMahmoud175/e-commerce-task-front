import { useEffect, useState } from 'react';
import { ProductServices } from '../apis/Services/ProductsServices';

const UseGetProducts = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        ProductServices.getProducts().then(res => {
            setProducts(res?.products)
        }).catch(err => console.log(err))
    }, [])
    return Products
}

export default UseGetProducts;
