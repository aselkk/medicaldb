import React, {useState, useEffect} from 'react';
import HomePageNav from '../components/HomePageNav'
import './HomePage.css'
import {RiDeleteBack2Line} from 'react-icons/ri'


const HomePage = () => {

    const [patients,setPatients] = useState([])
    const [filteredPatients,setFilteredPatients] = useState([])

    const getPatients = async () => {
        const fetchData = await fetch('http://34.125.200.250/api/patients')
        const jsonData = await fetchData.json()
        setPatients(jsonData)
    }       
    useEffect(() => {
        getPatients()
    }, [])


    const filterInput = 'false'

    const filterPatients = async () => {
        const fetchData = await fetch(`https://6241a2cf9b450ae27442e562.mockapi.io/clothes?filter=${filterInput}`)
        const jsonData = await fetchData.json()
        setFilteredPatients(jsonData)
    }       

    useEffect(() => {
        filterPatients()
    }, [])

    const deletePatient = async (id) => {
        try {
            let res = await fetch(`http://34.125.200.250/api/patients/${id}`, {
                method: "DELETE"
            });
            if (res.status === 204) {
                console.log("patient deleted successfully");    
                getPatients()
            } 
            } catch (err) {
                console.log(err);
            }
    }

    return (
        <div className='home-page-wrapper'>
            <HomePageNav/>
            <div className='titles'>
                    <p className='title-item patient-id'>ID</p>
                    <p className='title-item patient-fullname'>Full Name</p>
                    <p className='title-item patient-birthdate'>Date of birth</p>
                    <p className='title-item patient-gender'>Gender</p>
                    <p className='title-item patient-number'>Phone</p>
                    <p className='title-item patient-email'>Email</p>
                    <p className='title-item patient-address'>Adress</p>
                    <p className='title-item patient-delete'> </p>
                    
            </div>
            {(patients) ? patients.map((el) => (
                <div key={el.id} className='patient'>
                    <p className="patient-id">{el.id}</p>
                    
                    <p className="patient-fullname">{el.fullName}</p>
                    
                    <p className="patient-birthdate">{el.birthDate.split('').splice(0,10).join("")}</p>
                    
                    <p className="patient-gender">{el.sex ? 'M' : 'F'}</p>
                    
                    <p className="patient-number">{el.phoneNumber}</p>
                    
                    <p className="patient-email">{el.email}</p>
                    
                    <p className="patient-address">{el.address}</p>

                    <div className='patient-delete' onClick={() => deletePatient(el.id)}><RiDeleteBack2Line/></div>

                </div>
            )) : <p>empty</p>}
        </div>
    );
};

export default HomePage;