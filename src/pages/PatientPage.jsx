import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import './PatientPage.css'
import Badge from '../../src/Badge.png'
import { NavLink } from "react-router-dom";
import AddComplaintModal from '../components/AddComplaintModal'
import AddExaminationModal from '../components/AddExaminationModal'
import AddVaccinationModal from '../components/AddVaccinationModal'
import {BsTrash} from 'react-icons/bs'
import {HiOutlinePlus}  from 'react-icons/hi'


const PatientPage = () => {
    const params = useParams()
    const [modalActive, setModalActive] = useState(false)
    const [complaintModalActive, setComplaintModalActive] = useState(false)
    const [vacModalActive, setVacModalActive] = useState(false)
    // const [examinationModalActive, setExaminationModalActive] = useState(false)
    const [patient,setPatient] = useState([])
    const [complaint, setComplaint] = useState([])
    const [examinations, setExaminations] = useState([])
    const [lifeAnamnesis, setLifeAnamnesis] = useState([])
    const [diseaseAnamnesis, setDiseaseAnamnesis] = useState([])
    const [vaccinations, setVaccinations] = useState([])
    const [treatments, setTreatments] = useState([])

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
    const getLifeAnamnesis = async () => {
        const fetchData = await fetch(`http://34.125.200.250/api/patients/12/life_anamnesis/2`)
        const jsonData = await fetchData.json()
        setLifeAnamnesis(jsonData)
    }    
    const getDiseaseAnamnesis = async () => {
        const fetchData = await fetch(`http://34.125.200.250/api/patients/12/disease_anamneses`)
        const jsonData = await fetchData.json()
        setDiseaseAnamnesis(jsonData)
        console.log(diseaseAnamnesis[0],'disease')
    } 
    const getVaccinations = async () => {
        const fetchData = await fetch(`http://34.125.200.250/api/diseases`)
        const jsonData = await fetchData.json()
        setVaccinations(jsonData)
        console.log(vaccinations,'vaccinations')
    }   
    useEffect(() => {
        getPatient()
        getLifeAnamnesis()
        getDiseaseAnamnesis()
    }, [ ])

    
    useEffect(() => {
        getExaminations()
    },[examinations])    

    useEffect(() => {
        getComplaint()
    },[complaint])

    useEffect(() => {
        getVaccinations()
    },[vaccinations])    

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
            <AddComplaintModal complaintModalActive={complaintModalActive} setComplaintModalActive={setComplaintModalActive}/>
            <AddExaminationModal modalActive={modalActive} setModalActive={setModalActive}/>
            <AddVaccinationModal vacModalActive={vacModalActive} setVacModalActive={setVacModalActive}/>
            

            <div className="tab-wrap">
                <input type="radio" id="tab1" name="tabGroup1" class="tab" defaultChecked/>
                <label htmlFor="tab1">Complaints</label>

                <input type="radio" id="tab2" name="tabGroup1" class="tab"/>
                <label for="tab2">Treatments</label>

                <input type="radio" id="tab3" name="tabGroup1" class="tab"/>
                <label for="tab3">Examinations</label>

                <input type="radio" id="tab4" name="tabGroup1" class="tab"/>
                <label for="tab4">Life Anamnesis</label>

                <input type="radio" id="tab5" name="tabGroup1" class="tab"/>
                <label for="tab5">Disease Anamnesis</label>

                <input type="radio" id="tab6" name="tabGroup1" class="tab"/>
                <label for="tab6">Vaccinations</label>

                <div class="tab__content">
                <div className='tabs'>
                    <p className='tab-item item-id'>???</p>
                    <p className='tab-item item-description'>Description</p>
                    <p className='tab-item item-duration'>Duration</p>
                    <p className='tab-item item-comments'>Comments</p>      
                    <button className='addComplaintBtn add-patient-btn' onClick = {() => setComplaintModalActive(true) }><HiOutlinePlus style={{fontSize:'23px', paddingRight:'8px', fontWeight: '200' }}/>Add complaint</button>
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
                <div className='tabs'>
                    <p className='tab-item exam-id'>???</p>
                    <p className='tab-item exam-name'>Name</p>
                    <p className='tab-item exam-name'>Start Date</p>
                    <p className='tab-item exam-name'>End Date</p>
                    <p className='tab-item exam-name'>Dosage</p>                    
                </div>
                        <div className='complaints'>
                            <p className='exam-id'>1.</p>
                            <p className='exam-name'>MedicationA</p>
                            <p className='exam-name'>14-04-2022</p>
                            <p className='exam-name'>16-04-2022</p>
                            <p className='exam-name'>3 times a day after meal</p>
                        </div>
                        <div className='complaints'>
                            <p className='exam-id'>2.</p>
                            <p className='exam-name'>MedicationB</p>
                            <p className='exam-name'>11-10-2022</p>
                            <p className='exam-name'>20-11-2022</p>
                            <p className='exam-name'>2 times a day after meal</p>
                        </div>
                        <div className='complaints'>
                            <p className='exam-id'>3.</p>
                            <p className='exam-name'>MedicationC</p>
                            <p className='exam-name'>24-04-2022</p>
                            <p className='exam-name'>26-04-2022</p>
                            <p className='exam-name'>1 times a day before bed</p>
                        </div>
                </div>           

                <div class="tab__content">
                <div className='tabs'>
                    <p className='tab-item exam-id'>???</p>
                    <p className='tab-item exam-name'>Name</p>
                    <p className='tab-item exam-type'>Type</p>
                    <button className='addComplaintBtn add-patient-btn' onClick = {() => setModalActive(true) }><HiOutlinePlus style={{fontSize:'23px', paddingRight:'8px', fontWeight: '200' }}/>Add examination</button>
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
                        <div className='complaints life-anamnesis'>
                            <div className='life-anamnesis-item'><span className='item-title'>ID:</span><p className='life-anamnesis-id'> {lifeAnamnesis?.id}</p></div>
                            <div className='life-anamnesis-item'><span className='item-title'>Birth order:</span><p className='life-anamnesis-birth-order'> {lifeAnamnesis?.birthOrder}</p></div>
                            <div className='life-anamnesis-item'><span className='item-title'>Comments: </span><p className='life-anamnesis-comments'>{lifeAnamnesis?.comments}</p></div>
                            <div className='life-anamnesis-item'><span className='item-title'>Labor:</span> <p className='life-anamnesis-labor'>{lifeAnamnesis?.labor}</p></div>
                            <div className='life-anamnesis-item'><span className='item-title'>Labor pathologies:</span><p className='life-anamnesis-laborPathologies'> {(lifeAnamnesis?.laborPathologies) ? 'Yes' : 'No'}</p></div>
                            <div className='life-anamnesis-item'><span className='item-title'>Mother pregnancy: </span><p className='life-anamnesis-motherPregnancy'>{lifeAnamnesis?.mothersPregnancy}</p></div>
                            <div className='life-anamnesis-item'><span className='item-title'>Pregnancy pathologies: </span><p className='life-anamnesis-pregnancyPathologies'>{(lifeAnamnesis?.pregnancyPathologies) ? 'Yes' : 'No'}</p></div>
                            <div className='life-anamnesis-item'><span className='item-title'>Week of birth:</span><p className='life-anamnesis-weekOfBirth'>{lifeAnamnesis?.weekOfBirth}</p> </div>
                        </div>
                </div>

                <div class="tab__content">
                <div className='complaints life-anamnesis'>
                            <div className='life-anamnesis-item disease-item'><span className='item-title'>ID:</span><p className='life-anamnesis-id'> {diseaseAnamnesis[0]?.id}</p></div>
                            <div className='life-anamnesis-item disease-item'><span className='item-title'>Cause:</span><p className='life-anamnesis-birth-order'> {diseaseAnamnesis[0]?.cause}</p></div>
                            <div className='life-anamnesis-item disease-item'><span className='item-title'>Comments: </span><p className='life-anamnesis-comments'>{diseaseAnamnesis[0]?.comments}</p></div>
                            <div className='life-anamnesis-item disease-item'><span className='item-title'>Development:</span> <p className='life-anamnesis-labor'>{diseaseAnamnesis[0]?.development}</p></div>
                            <div className='life-anamnesis-item disease-item'><span className='item-title'>Disease start:</span><p className='life-anamnesis-laborPathologies'> {diseaseAnamnesis[0]?.diseaseStart}</p></div>
                        </div>
                </div>

                <div class="tab__content">
                <div className='tabs'>
                    <p className='tab-item exam-id'>???</p>
                    <p className='tab-item exam-name'>Name</p>
                    <button className='addComplaintBtn add-patient-btn' onClick = {() => setVacModalActive(true) }><HiOutlinePlus style={{fontSize:'23px', paddingRight:'8px', fontWeight: '200' }}/>Add vaccination</button>

                </div>
                    {(vaccinations) ? vaccinations.map((item, index) => (
                        <div className='complaints'>
                            <p className='exam-id'>{index + 1}.</p>
                            <p className='exam-name'>{item.name}</p>
                        </div>
                    )) : null}
                </div>


            </div>
            
        </div>
    );
};

export default PatientPage;