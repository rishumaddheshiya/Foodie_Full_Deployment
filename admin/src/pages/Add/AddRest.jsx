import React, { useState } from 'react'
import './AddRest.css'
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddRest = () => {


    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        offer: "",
        rating: "3.5",
        time: "10-20mins",
        menu:"",
        location:""
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Image not selected');
            return null;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("offer", data.offer);
        formData.append("rating", data.rating);
        formData.append("time", data.time);
        formData.append("menu", data.menu);
        formData.append("location", data.location);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/rest/addrest`, formData);
        if (response.data.success) {
            toast.success(response.data.message)
            setData({
                name: "",
                offer: "",
                rating:data.rating,
                time: data.time,
                menu:"",
                location:"",
            })
            setImage(false);
        }
        else {
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload Restaurant Image</p>
                    <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                </div>
                <div className='add-product-name flex-col'>
                    <p>Restaurant Name</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Restaurant Offer</p>
                    <input name='offer' onChange={onChangeHandler} value={data.offer} type="text" placeholder='Type here' required />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Delivery  Time</p>
                        <select name='time' onChange={onChangeHandler} >
                            <option value="10-20mins">10-20mins</option>
                            <option value="20-30mins">20-30mins</option>
                            <option value="30-40mins">30-40mins</option>
                            <option value="40-50mins">40-50mins</option>
                            <option value="50-60mins">50-60mins</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Restaurant Rating</p>
                         <select name='rating' onChange={onChangeHandler} >
                            <option value="3.5">3.5</option>
                            <option value="3.6">3.6</option>
                            <option value="3.7">3.7</option>
                            <option value="3.8">3.8</option>
                            <option value="3.9">3.9</option>
                            <option value="4.0">4.0</option>
                            <option value="4.1">4.1</option>
                            <option value="4.2">4.2</option>
                            <option value="4.3">4.3</option>
                            <option value="4.4">4.4</option>
                            <option value="4.5">4.5</option>
                        </select>
                    </div>
                </div>
                <div className='add-product-name flex-col'>
                    <p>Restaurant Menu</p>
                    <input name='menu' onChange={onChangeHandler} value={data.menu} type="text" placeholder='Type here' required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Restaurant Location</p>
                    <input name='location' onChange={onChangeHandler} value={data.location} type="text" placeholder='Type here' required />
                </div>
                <button type='submit' className='add-btn' >ADD RESTAURANT</button>
            </form>
        </div>
    )
}

export default AddRest
