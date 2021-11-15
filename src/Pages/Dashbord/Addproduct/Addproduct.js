import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addproduct.css';




const Addproduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://immense-plains-77878.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added succesfully');
                    reset();
                }
            })
    }


    return (
        <div className="add-service">
            <h1>ADD PRODUCT</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}
                    placeholder="name" />

                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("description")} placeholder="description" />
                <input {...register("img")} placeholder="img url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addproduct;