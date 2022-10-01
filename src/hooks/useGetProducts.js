import { useEffect, useState } from 'react';
import { ProductServices } from '../apis/Services/ProductsServices';

const UseGetProducts = ({ reload } = {}) => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        ProductServices.getProducts().then(res => {
            setProducts(res?.products)
        }).catch(err => console.log(err))
    }, [reload])
    return Products
}

export default UseGetProducts;
