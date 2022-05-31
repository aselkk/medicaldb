import React, {useEffect, useState} from 'react';
import * as BiIcons from 'react-icons/bi'
import {HiOutlinePlus}  from 'react-icons/hi'
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './HomePageNav.css'
import AddPatientModal from './AddPatientModal'
import { Pagination } from '@mui/material';


const HomePageNav = ({getSortedPatients, totalPatients, searchValue, setSearchValue }) => {

    const [modalActive, setModalActive] = useState(false)
    const [ sortValue, setSortValue ] = useState('id')
    const [ currentPage, setCurrentPage ] = useState(1)
    
    const totalPages = Math.ceil(totalPatients / 10)

    const searchItem = async () => {
        getSortedPatients( sortValue, currentPage, searchValue)
    }

    const handleClick = (e, p) => {
        setCurrentPage(p)
        getSortedPatients( sortValue, p, searchValue)
        console.log(p)
    }   

    const getInputValue = (e) => {
        setSearchValue(e.target.value)
        searchItem()
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            searchItem()
        }  
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
                            <input 
                            type="text" 
                            className='search-bar' 
                            placeholder='Find a patient...'
                            onKeyUp={getInputValue}
                            onKeyPress={handleKeyPress}
                            />
                        </div>
                        <div className='filter-bar'>
                            <p className='search-text'>Sort by: </p>
                            <div>
                            <FormControl fullWidth >
                                <NativeSelect
                                onChange={(e)=> {
                                    setSortValue(e.target.value)
                                    getSortedPatients(e.target.value, currentPage, searchValue)
                                }} 
                                inputProps={{
                                    id: 'uncontrolled-native',
                                }}
                                style={{height: '1.1em', outline:'none', paddingLeft: '4px',
                                marginRight: '10px', fontSize:'14px',marginTop:'2px'}}
                                >
                                <option value={'id'}>ID</option>
                                <option value={'name'}>Name</option>
                                <option value={'birthDate'}>Birth Date</option>
                                <option value={40}>Gender</option>
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