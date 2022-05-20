import React, {useState, useEffect} from 'react';
import HomePageNav from '../components/HomePageNav'
import './HomePage.css'
import { Link } from "react-router-dom";



const HomePage = () => {

    const [patients,setPatients] = useState([])
    const [patientId, setPatientId] = useState('')
    const [filteredPatients,setFilteredPatients] = useState([])
    const [selectedValue, setSelectedValue] = useState('')
    const [pageNumber, setPageNumber] = useState(2)
    const [totalPatients, setTotalPatients] = useState('')





    const getPatients = async () => {
        const fetchData = await fetch(`http://34.125.200.250/api/patients?pageNumber=${pageNumber}&pageSize=2`)
        const jsonData = await fetchData.json()
        setPatients(jsonData)
    }  
    const getTotalPatients = async () => {
        const fetchData = await fetch(`http://34.125.200.250/api/patients`)
        const jsonData = await fetchData.json()
        setTotalPatients(jsonData.length)
    }       
    useEffect(() => {
        getPatients()
        getTotalPatients()
    }, [patients])





    return (
        <div className='home-page-wrapper'>
            <HomePageNav selectedValue={selectedValue} setSelectedValue={setSelectedValue} pageNumber={pageNumber} setPageNumber={setPageNumber} totalPatients={totalPatients}/>
            <div className='titles'>
                    <p className='title-item patient-id'>№</p>
                    <p className='title-item patient-fullname'>Full Name</p>
                    <p className='title-item patient-birthdate'>Date of birth</p>
                    <p className='title-item patient-gender'>Gender</p>
                    <p className='title-item patient-number'>Phone</p>
                    <p className='title-item patient-email'>Email</p>
                    <p className='title-item patient-address'>Adress</p>                    
            </div>
            {(patients) ? patients.map((el,index) => (
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
            )) : <p>empty</p>}
        </div>
    );
};

export default HomePage;