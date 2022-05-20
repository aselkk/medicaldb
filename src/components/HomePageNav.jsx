import React, {useState} from 'react';
import * as BiIcons from 'react-icons/bi'
import {HiOutlinePlus}  from 'react-icons/hi'
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './HomePageNav.css'
import AddPatientModal from './AddPatientModal'
import { Pagination } from '@mui/material';


const HomePageNav = ({selectedValue, setSelectedValue, pageNumber, setPageNumber, totalPatients}) => {

    const [modalActive, setModalActive] = useState(false)

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
            console.log(selectedValue)
    }

    // const filterInput = 'false'

    // const filterPatients = async () => {
    //     const fetchData = await fetch(`https://6241a2cf9b450ae27442e562.mockapi.io/clothes?filter=${filterInput}`)
    //     const jsonData = await fetchData.json()
    //     setFilteredPatients(jsonData)
    // }       

    // useEffect(() => {
    //     filterPatients()
    // }, [])

    const totalPages = Math.ceil(totalPatients / 2)

    const handleClick = (e, p) => {
        setPageNumber(p)
        console.log(totalPatients)
    }   

    return (
        <div className='nav-wrapper'>
            <div className='header'>
                <h1 className='heading'>Patients</h1>
                <Pagination 
                    count={totalPages} 
                    shape="rounded"
                    onChange={handleClick}
                    />
            </div>
            <div className='main-container'>
                <div className='tools'>
                    <div className='filter'>
                        <div className='search'>
                            <BiIcons.BiSearchAlt2 className='search-icon'/>
                            <input type="text" className='search-bar' placeholder='Find a patient...'/>
                        </div>
                        <div className='filter-bar'>
                            <p className='search-text'>Sort by: </p>
                            <div>
                            <FormControl fullWidth>
                                <NativeSelect
                                onChange={handleChange} 
                                defaultValue={10}
                                inputProps={{
                                    id: 'uncontrolled-native',
                                }}
                                style={{height: '1.1em', outline:'none', paddingLeft: '4px',
                                marginRight: '10px', fontSize:'14px',marginTop:'2px'}}
                                >
                                <option value={10}>Name</option>
                                <option value={20}>Birth Date</option>
                                <option value={30}>Gender</option>
                                </NativeSelect>
                            </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className='add-patient-btn' onClick={() => setModalActive(true)}> <HiOutlinePlus style={{fontSize:'23px', paddingRight:'8px', fontWeight: '200' }} />Add new patient</div>
                </div>
            </div>
            <AddPatientModal modalActive={modalActive} setModalActive={setModalActive}/>
        </div>
    );
};

export default HomePageNav;