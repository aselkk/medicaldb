import React, {useState,useEffect} from 'react';
import './AddPatientModal.css'
import { useFormik} from 'formik';
import * as Yup from 'yup';
import {IoMdClose} from 'react-icons/io'

const AddPatientModal = ({modalActive, setModalActive}) => {

    const toggleModal = () => {
        setModalActive(!modalActive)
    }
    
    let handleSubmit = async (values) => {
        const { firstName, lastName, patronymic, birthDate, sex, phoneNumber, email, address } = values;
        try {
        let res = await fetch("http://34.125.200.250/api/patients", {
            method: "POST",
            body: JSON.stringify({
            firstName: firstName,    
            lastName: lastName,
            patronymic: patronymic,
            birthDate: birthDate,
            sex: sex,
            phoneNumber: phoneNumber,
            email: email, 
            address: address
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
        let resJson = await res.json();
            console.log(resJson)
        if (res.status === 201) {
            console.log("patient created successfully");
            toggleModal()

        } 
        } catch (err) {
            console.log(err);
        }
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            patronymic: '',
            birthDate: '',
            sex: true,
            phoneNumber: '',
            email: '', 
            address: ''
        },
            onSubmit: values => {
                handleSubmit(values)
                console.log(values)
            },
        })
    return (
        <div className={ modalActive ? 'modal active' : 'modal'} onClick={toggleModal}>
            <div className={ modalActive ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                    <div style={{paddingTop:'4px', display: 'flex', justifyContent: 'end', alignItems: 'center'}} className='close-modal-btn' onClick={toggleModal} alt="" > <IoMdClose/> </div>
                    <form className='modal-form' onSubmit={formik.handleSubmit}>
                        <div className='form-wrapper'>   
                            <label className='modal-label' htmlFor="firstName">Name</label>
                            <input
                            placeholder='Ivan'
                                className='modal-input'
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                            <label className='modal-label' htmlFor="lastName">Last Name</label>
                            <input
                            placeholder='Ivanov'
                                id="lastName"
                                className='modal-input'
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            <label className='modal-label' htmlFor="patronymic">Patronymic</label>
                            <input
                            placeholder='Ivanovich'
                                id="patronymic"
                                className='modal-input'
                                name="patronymic"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.patronymic}
                            />
                            <label className='modal-label' htmlFor="birthDate">Date of birth</label>
                            <input
                            placeholder='19/11/1999'
                                id="birthDate"
                                className='modal-input'
                                name="birthDate"
                                type="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.birthDate}
                            />
                        </div>
                        <div className='form-wrapper'>
                            <label className='modal-label' htmlFor="phoneNumber">Phone number</label>
                            <input
                                placeholder='+996(707)191199'
                                id="phoneNumber"
                                name="phoneNumber"
                                className='modal-input'
                                type="tel"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                            />
                            <label className='modal-label' htmlFor="email">Email</label>
                            <input
                                placeholder='example@mail.com'
                                id="email"
                                name="email"
                                className='modal-input'
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <label className='modal-label' htmlFor="address">Address</label>
                            <input
                                placeholder='Address'
                                id="address"
                                className='modal-input'
                                name="address"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                            />
                            <label className='modal-label' htmlFor="sex">Sex</label>
                            <div className='radio-wrapper'>
                                <input style={{margin: '0 4px 0 0'}} type="radio" id="male"
                                    name="sex" value={formik.values.sex}/>
                                <label className='modal-label' htmlFor="male">Male</label>
                                <input style={{margin: '0 4px 0 20px'}} type="radio" id="female"
                                    name="sex" value={formik.values.sex}/>
                                <label className='modal-label' htmlFor="female">Female</label>
                            </div>
                        </div>
                        <button className='add-patient' type="submit">Add new patient</button>
                    </form>
            </div>
        </div>
    );
};

export default AddPatientModal;