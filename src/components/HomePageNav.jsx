import React, {useState} from 'react';
import * as BiIcons from 'react-icons/bi'
import {HiOutlinePlus}  from 'react-icons/hi'
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './HomePageNav.css'
import AddPatientModal from './AddPatientModal'

const HomePageNav = () => {

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='nav-wrapper'>
            <div className='header'>
                <h1 className='heading'>Patients</h1>
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
                                defaultValue={30}
                                inputProps={{
                                    id: 'uncontrolled-native',
                                }}
                                style={{height: '1.1em', outline:'none', paddingLeft: '4px',
                                marginRight: '10px', fontSize:'14px',marginTop:'2px'}}
                                >
                                <option value={10}>Name</option>
                                <option value={20}>ID</option>
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