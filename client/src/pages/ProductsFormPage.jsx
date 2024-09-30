import { useForm } from 'react-hook-form';
import { useProducts } from '../context/ProductsContext';
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { set } from 'mongoose';

function ProductsFormPage() {
    const {register, handleSubmit, setValue} = useForm(); //setValue es una función que permite modificar el valor de un input
    const {createProduct, getProduct, updateProduct} = useProducts()
    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        async function loadProduct() {
            if (params.id) {
                const product = await getProduct(params.id);
                setValue('name', product.name);
                setValue('description', product.description);
                setValue('price', product.price);
                setValue('category', product.category);
            }
        }
        loadProduct();
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id){
            data.price = parseFloat(data.price);
            updateProduct(params.id, data);
        }else{
            data.price = parseFloat(data.price);
            createProduct(data);
        }
        navigate('/products');

    })

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre"
                    {...register('name', {required: true})}
                    autoFocus
                />
                <textarea rows={3} placeholder="Descripcion" 
                    {...register('description', {required: true})}
                />
                <input type="text" placeholder="Precio"
                    {...register('price', {required: true})}
                />
                <input type="text" placeholder="Categoria"
                    {...register('category', {required: true})}
                />

                <button type="submit">Crear Producto</button>
            </form>
        </div>
    )
}

export default ProductsFormPage;