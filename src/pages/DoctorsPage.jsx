import React, {useState, useEffect} from 'react';
import './DoctorsPage.css';
import { Link } from "react-router-dom";
import HomePageNav from '../components/HomePageNav'


const DoctorsPage = () => {

    // const [doctors,setPatients] = useState([])
    // const [selectedValue, setSelectedValue] = useState('')
    // const [pageNumber, setPageNumber] = useState(1)
    const [totalDoctors, setTotalDoctors] = useState('')

    // const getPatients = async () => {
    //     const fetchData = await fetch(`http://34.125.200.250/api/doctors?pageNumber=${pageNumber}&pageSize=5`)
    //     const jsonData = await fetchData.json()
    //     setPatients(jsonData)
    // }  
    const getTotalDoctors = async () => {
        const fetchData = await fetch(`http://34.125.200.250/api/doctors`)
        const jsonData = await fetchData.json()
        setTotalDoctors(jsonData)
        console.log(totalDoctors);
    }       
    useEffect(() => {
        // getPatients()
        getTotalDoctors()
    }, [])


    return (
        <div className='home-page-wrapper'>
            <h3 class='heading'>Doctors</h3>
            {/* <HomePageNav 
            selectedValue={selectedValue} setSelectedValue={setSelectedValue} pageNumber={pageNumber} setPageNumber={setPageNumber} totalPatients={totalPatients}
            /> */}
            <div className='titles' style={{justifyContent: 'unset'}}>
                    <p className='title-item doctor-id'>№</p>
                    <p className='title-item doctor-fullname'>Full Name</p>
                    <p className='title-item doctor-number'>Phone</p>
                    <p className='title-item doctor-email'>Email</p>
                    <p className='title-item doctor-specialty'>Specialty</p>                    
                    <p className='title-item doctor-description'>Description</p>                    
            </div>
            {(totalDoctors) ? totalDoctors.map((item, index) => (
                <div>
                    <div key={index} className='patient' style={{justifyContent: 'unset'}}>
                        <p className="doctor-id">{index+=1}.</p>
                        <p className="doctor-fullname">{item.lastName} {item.firstName} {item.patronymic}</p>
                        <p className="doctor-number">{item.phoneNumber}</p>
                        <p className="doctor-email">{item.email}</p>
                        <p className='doctor-specialty'>Neurophysiologist</p>
                        <p className='doctor-decsription'>Doctor of the highest category <br/> Specialist in EEG examinations</p>
                    </div>
                    <div className='patient' style={{justifyContent: 'unset'}}>
                    <p className="doctor-id">2.</p>
                    <p className="doctor-fullname">Ashirov Ulan Mirbekovich</p>
                    <p className="doctor-number">+996(777)324664</p>
                    <p className="doctor-email">ulan.ashirov@gmail.com</p>
                    <p className='doctor-specialty'>Neurosurgeon</p>
                    <p className='doctor-decsription'>Certified by the American Board of Neurological Surgery <br/> Specializes in trigeminal neuralgia and deep brain stimulation</p>
            </div>
            <div className='patient' style={{justifyContent: 'unset'}}>
                    <p className="doctor-id">3.</p>
                    <p className="doctor-fullname">Yusupov Osman Yusupovich</p>
                    <p className="doctor-number">+996(703)335754</p>
                    <p className="doctor-email">yusupov.osman@gmail.com</p>
                    <p className='doctor-specialty'>Neurologist</p>
                    <p className='doctor-decsription'>Doctor consults with hospital inpatients who have neurological disorders, treating a variety of neurological conditions. </p>
            </div>
            <div className='patient' style={{justifyContent: 'unset'}}>
                    <p className="doctor-id">4.</p>
                    <p className="doctor-fullname">Adieva Fatima Asanbekovna</p>
                    <p className="doctor-number">+996(703)093572</p>
                    <p className="doctor-email">adieva.fatima@gmail.com</p>
                    <p className='doctor-specialty'>Neurosurgeon</p>
                    <p className='doctor-decsription'>Certified by the American Board of Neurological Surgery <br/> Specializes in trigeminal neuralgia and deep brain stimulation</p>
            </div>
            <div className='patient' style={{justifyContent: 'unset'}}>
                    <p className="doctor-id">5.</p>
                    <p className="doctor-fullname">Fazulina Tatiana Pavlovna</p>
                    <p className="doctor-number">+996(703)874957</p>
                    <p className="doctor-email">fazulina.tanya@gmail.com</p>
                    <p className='doctor-specialty'>Neurophysiologist</p>
                    <p className='doctor-decsription'>Doctor of the highest category <br/> Specialist in EEG examinations</p>
            </div>
                </div>
                
            )) : <p>null</p>}
            
            {/* {(totalDoctors) ? totalDoctors.map((el,index) => (
                <div key={el.id} className='patient'>
                    <p className="patient-id">{index+=1}</p>
                    
                    <div className="patient-fullname">
                        <Link style={{color:'#393939', textDecoration:'none'}} to={'/patient/' + el.id}>
                            {el.fullName}
                        </Link>
                    </div>
                    
                    <p className="patient-birthdate">{el.birthDate.split('').splice(0,10).join("")}</p>
                    
                    <p className="patient-gender">{el.sex ? 'M' : 'F'}</p>
                    
                    <p className="patient-number">{el.phoneNumber}</p>
                    
                    <p className="patient-email">{el.email}</p>
                    
                    <p className="patient-address">{el.address}</p>

                </div>
            )) : <p>empty</p>} */}
        </div>
    );
};

export default DoctorsPage;