import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import styles from './MyInfo.module.css';

const USER_DATA = 'userData';

const MyInfo = () => {
    const { handleSubmit, register, setValue } = useForm();
    const [data, setData] = useState({});

    useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};

            setValue('name', userData?.name || '');
            setValue('email', userData?.email || '');
            setValue('age', userData?.age || '');
        } catch (error) {
            console.error(error);
        }
    }, [setValue]);

    const handleFormSubmit = (formData) => {
        try {
            localStorage.setItem(USER_DATA, JSON.stringify(formData));
            alert('Usuario actualizado');
        } catch (error) {
            alert('Ha ocurrido un error');
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit(() => handleFormSubmit(data))} className={styles.form}>
            <label className={styles.label}>
                Name
                <input {...register('name', { required: true, minLength: 1, maxLength: 120 })} className={styles.input} onChange={handleChange} />
            </label>
            <label className={styles.label}>
                Email
                <input {...register('email', { required: true })} className={styles.input} onChange={handleChange} />
            </label>
            <label className={styles.label}>
                Age
                <input {...register('age', { required: true, min: 1, max: 120, valueAsNumber: true })} className={styles.input} type="number" onChange={handleChange} />
            </label>
            <button type="submit" className={styles.submitButton}>
                Save
            </button>
        </form>
    );
};

export default MyInfo;
