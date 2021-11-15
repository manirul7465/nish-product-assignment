import './Review.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`https://immense-plains-77878.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('review proccess')
                    reset();
                }
            })

    };




    return (
        <div className="add-review">
            <h2 className="order"> Review here</h2>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true })} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <textarea placeholder="review here" defaultValue="" {...register("description")} />
                <input placeholder="give rating mark 1-5" defaultValue="" {...register("rating")} />
                <input className="submit" type="submit" />

            </form>
        </div>

    );
};

export default Review;