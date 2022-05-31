
import React from 'react';
import './AddExaminationModal.css'
import { useFormik} from 'formik';
import {IoMdClose} from 'react-icons/io'

const AddVaccinationModal = ({vacModalActive, setVacModalActive}) => {

    const toggleModal = () => {
        setVacModalActive(!vacModalActive)
    }
    
    let handleSubmit = async (values) => {
        const { name, 
            // type 
        } = values;
        try {
        let res = await fetch("http://34.125.200.250/api/diseases", {
            method: "POST",
            body: JSON.stringify({
            name: name,    
            // type: type,
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
        let resJson = await res.json();
            console.log(resJson)
        if (res.status === 201) {
            console.log("vaccination added successfully");
            toggleModal()

        } 
        } catch (err) {
            console.log(err);
        }
                values.name=''
                // values.type=''
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            // type: '',
        },
            onSubmit: values => {
                handleSubmit(values)
                console.log(values)
            },
        })
    return (
        <div className={ vacModalActive ? 'modal active' : 'modal'} onClick={toggleModal}>
            <div className={ vacModalActive ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                    <div style={{paddingTop:'4px', display: 'flex', justifyContent: 'end', alignItems: 'center'}} className='close-modal-btn' onClick={toggleModal} alt="" > <IoMdClose/> </div>
                    <form className='modal-form' onSubmit={formik.handleSubmit}>
                        <div className='form-wrapper'>   
                        <label className='modal-label' htmlFor="name">Name</label>
                            <input
                                id="name"
                                className='modal-input'
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {/* <label className='modal-label' htmlFor="type">Type</label>
                            <input
                                id="type"
                                className='modal-input'
                                name="type"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.type}
                            /> */}
                        </div>
                        <button className='add-patient' type="submit">Add new vaccination</button>
                    </form>
            </div>
        </div>
    );
};

export default AddVaccinationModal;