
import React from 'react';
import './AddComplaintModal.css'
import { useFormik} from 'formik';
import {IoMdClose} from 'react-icons/io'

const AddComplaintModal = ({complaintModalActive, setComplaintModalActive}) => {

    const toggleModal = () => {
        setComplaintModalActive(!complaintModalActive)
    }
    
    let handleSubmit = async (values) => {
        const { comments, duration, description } = values;
        try {
        let res = await fetch("http://34.125.200.250/api/patients/12/complains", {
            method: "POST",
            body: JSON.stringify({
            comments: comments,    
            duration: duration,
            description: description,
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
        let resJson = await res.json();
            console.log(resJson)
        if (res.status === 201) {
            console.log("complaint added successfully");
            toggleModal()

        } 
        } catch (err) {
            console.log(err);
        }
                values.comments=''
                values.duration=''
                values.description=''
    };

    const formik = useFormik({
        initialValues: {
            comments: '',
            duration: '',
            description: '',
        },
            onSubmit: values => {
                handleSubmit(values)
                console.log(values)
            },
        })
    return (
        <div className={ complaintModalActive ? 'modal active' : 'modal'} onClick={toggleModal}>
            <div className={ complaintModalActive ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                    <div style={{paddingTop:'4px', display: 'flex', justifyContent: 'end', alignItems: 'center'}} className='close-modal-btn' onClick={toggleModal} alt="" > <IoMdClose/> </div>
                    <form className='modal-form' onSubmit={formik.handleSubmit}>
                        <div className='form-wrapper'>   
                            <label className='modal-label' htmlFor="description">Description</label>
                            <input
                                className='modal-input'
                                id="description"
                                name="description"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                            />
                            <label className='modal-label' htmlFor="duration">Duration</label>
                            <input
                                id="duration"
                                className='modal-input'
                                name="duration"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.duration}
                            />
                            <label className='modal-label' htmlFor="comments">Comments</label>
                            <input
                                id="comments"
                                className='modal-input'
                                name="comments"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.comments}
                            />
                        </div>
                        <button className='add-patient' type="submit">Add new complaint</button>
                    </form>
            </div>
        </div>
    );
};

export default AddComplaintModal;