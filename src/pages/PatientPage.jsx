import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import './PatientPage.css'
import Badge from '../../src/Badge.png'
import AddComplaintModal from '../components/AddComplaintModal'
import { NavLink } from "react-router-dom";
import {BsTrash} from 'react-icons/bs'



const PatientPage = () => {
    const params = useParams()
    const [modalActive, setModalActive] = useState(false)
    const [patient,setPatient] = useState([])
    const [complaint, setComplaint] = useState([])
    const [examinations, setExaminations] = useState([])


    const getPatient = async () => {
        const fetchData = await fetch(`http://34.125.200.250/api/patients/${params.id}`)
        const jsonData = await fetchData.json()
        setPatient(jsonData)
    }       
    const getComplaint = async () => {
        const fetchData = await fetch(`http://34.125.200.250/api/patients/${params.id}/complains`)
        const jsonData = await fetchData.json()
        setComplaint(jsonData)
    }       
    const getExaminations = async () => {
        const fetchData = await fetch(`http://34.125.200.250/api/examinations`)
        const jsonData = await fetchData.json()
        setExaminations(jsonData)
    }       
    useEffect(() => {
        getPatient()
        getComplaint()
        getExaminations()
    }, [])



    console.log(examinations)

    console.log(patient.sex)


    const deletePatient = async () => {
        try {
            let res = await fetch(`http://34.125.200.250/api/patients/${patient.id}`, {
                method: "DELETE"
            });
            if (res.status === 204) {
                console.log("patient deleted successfully");    
                getPatient()
            } 
            } catch (err) {
                console.log(err);
            }
    }

    return (
        <div className='patient-page-wrapper'>
            <div className='patient-card'>
                <div className='patient-card-top'>
                        <img style={{marginRight:'1em'}} src={Badge} alt="" />
                        <div style={{ width: '32%', paddingTop:'10px'}}><p style={{ width: '10%', color:'#393939', fontSize:'15px'}}>{patient.fullName}</p></div>
                    <div style={{ width: '19%'}}>
                        <p className='card-title'>Full Name</p>
                        <p className='card-text'>{patient.fullName}</p>
                    </div>
                    <div style={{ width: '23%'}}>
                        <p className='card-title'>Date of Birth</p>
                        <p className='card-text'>{patient.birthDate?.split('').splice(0,10).join("")}</p>
                    </div>
                    <div >
                        <p className='card-title'>Gender</p>
                        <p className='card-text'>{patient.sex ? 'Male' : 'Female'}</p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='patient-card-bottom'>
                        <div style={{ width: '10%'}}>
                            <p className='card-title'>Height</p>
                            <p className='card-text'>175cm</p>
                        </div>
                        <div style={{ width: '10%'}}>
                            <p className='card-title'>Weight</p>
                            <p className='card-text'>55kg</p>
                        </div>
                        <div style={{ width: '20.4%'}}>
                            <p className='card-title'>Blood Type</p>
                            <p className='card-text'>A</p>
                        </div>
                    <div  style={{ width: '18.9%'}}>
                        <p className='card-title'>Phone Number</p>
                        <p className='card-text'>{patient.phoneNumber}</p>
                    </div>
                    <div style={{ width: '23.3%'}}>
                        <p className='card-title'>Email</p>
                        <p className='card-text'>{patient.email}</p>
                    </div>
                    <div style={{ width: '17.3%'}}>
                        <p className='card-title'>Address</p>
                        <p className='card-text'>{patient.address}</p>
                    </div>
                    <NavLink to='/home' onClick={deletePatient}><BsTrash style={{height: '25px',
    width: '38px',
    color:' indianred', right:'7px', bottom:'91px', position:'absolute'}}/></NavLink>
                </div>
            </div>

            <div class="tab-wrap">
                <input type="radio" id="tab1" name="tabGroup1" class="tab"/>
                <label for="tab1">Complaints</label>

                <input type="radio" id="tab2" name="tabGroup1" class="tab"/>
                <label for="tab2">Treatments</label>

                <input type="radio" id="tab3" name="tabGroup1" class="tab"/>
                <label for="tab3">Examinatios</label>

                <input type="radio" id="tab4" name="tabGroup1" class="tab"/>
                <label for="tab4">Life Anamnesys</label>

                <input type="radio" id="tab5" name="tabGroup1" class="tab"/>
                <label for="tab5">Disease Anamnesys</label>

                <div class="tab__content">
                <div className='tabs'>
                    <p className='tab-item item-id'>№</p>
                    <p className='tab-item item-description'>Description</p>
                    <p className='tab-item item-duration'>Duration</p>
                    <p className='tab-item item-comments'>Comments</p>      
                    {/* <div className='tab-item item-button' onClick={() => setModalActive(true)}>Add complaint</div> */}
                </div>
                    {complaint.map((item, index) => (
                        <div className='complaints'>
                            <p className='item-id'>{index + 1}.</p>
                            <p className='item-description'>{item.description}</p>
                            <p className='item-duration'>{item.duration}</p>
                            <p className='item-comments'>{item.comments} </p>
                        </div>
                    ))}
                </div>
                <div class="tab__content">
                    <h3 className='fornow fornow__header'>treatments</h3>
                    <p className='fornow'>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                </div>

                <div class="tab__content">
                <div className='tabs'>
                    <p className='tab-item exam-id'>№</p>
                    <p className='tab-item exam-name'>Name</p>
                    <p className='tab-item exam-type'>Type</p>
                    {/* <div className='tab-item item-button' onClick={() => setModalActive(true)}>Add complaint</div> */}
                </div>
                    {examinations.map((item, index) => (
                        <div className='complaints'>
                            <p className='exam-id'>{index + 1}.</p>
                            <p className='exam-name'>{item.name}</p>
                            <p className='exam-type'>{item.type}</p>
                        </div>
                    ))}
                </div>

                <div class="tab__content">
                    <h3 className='fornow fornow__header'>life anamnesys</h3>
                    <p className='fornow'>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                </div>

                <div class="tab__content">
                    <h3 className='fornow fornow__header'> disease anamnesys</h3>
                    <p className='fornow'>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                </div>


            </div>
            
        </div>
    );
};

export default PatientPage;