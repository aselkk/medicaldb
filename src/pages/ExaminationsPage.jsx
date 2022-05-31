import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './OrganizationsPage.css'



const ExaminationsPage = () => {

    return (
        <div className="organizations-wrapper">
            <h3 className='heading'>Examinations</h3>
            <div className="cards-wrapper">
            <Card sx={{ width: 385, background:'#e5e5e563'}}>
                <CardContent sx={{ height: 230}}  style={{padding: '7px 13px', display: 'flex', justifyContent:'center', flexDirection:'column', gap:'5px'}}>
                    <Typography variant="h6" component="div">
                    EEG
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Electroencephalography
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Test that measures electrical activity in the brain using small, metal discs (electrodes) attached to the scalp.
                    <br/>
                    </Typography>
                    <Typography variant="body1" color="text.primary" style={{textAlign:'center', marignTop: '15px', textDecoration:'underline'}}>
                    Usual (20 min.) 700 KGS <br/>
                    Monitoring (1 h.) 1500 KGS <br/>
                    Monitoring (3 h.) 4000 KGS <br/>
                    Holter (8 h.) 8000 KGS <br/>
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 385, background:'#e5e5e563'}}>
                <CardContent sx={{ height: 230}}  style={{ padding: '7px 13px ', display: 'flex', justifyContent:'center', flexDirection:'column', gap:'5px'}}>
                    <Typography variant="h6" component="div">
                    MRI
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Magnetic resonance imaging
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Medical imaging technique that uses a magnetic field and computer-generated radio waves to create detailed images of the organs and tissues in your body. <br/>
                    
                    </Typography>
                    <Typography variant="body1" color="text.primary" style={{textAlign:'center', marignTop: '15px', textDecoration:'underline'}}>
                    MRI (any part) 4200 KGS
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 385, background:'#e5e5e563'}}>
                <CardContent sx={{ height: 230}}  style={{ padding: '7px 13px', display: 'flex', justifyContent:'center', flexDirection:'column', gap:'5px'}}>
                    <Typography variant="h6" component="div">
                    REG
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Radioencephalography
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    The study of the passage of an injected tracer through the cerebral blood vessels as revealed by an external scintillation counter.                    <br/>
                    </Typography>
                    <Typography variant="body1" color="text.primary" style={{textAlign:'center', marignTop: '15px', textDecoration:'underline'}}>
                        Usualy 600 KGS
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 385, background:'#e5e5e563'}}>
                <CardContent sx={{ height: 230}}  style={{ padding: '7px 13px', display: 'flex', justifyContent:'center', flexDirection:'column', gap:'5px'}}>
                    <Typography variant="h6" component="div">
                    Neurologist
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Doctors: <br/>
                    Ivanova A. B.<br/>
                    Almazbekov K. R.<br/>
                    Mairambekova D. A.<br/>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Test that measures electrical activity in the brain using small, metal discs (electrodes) attached to the scalp.
                    <br/>
                    </Typography>
                    <Typography variant="h6" color="text.primary" style={{textAlign:'center', marignTop: '15px', textDecoration:'underline'}}>
                        600 KGS
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 385, background:'#e5e5e563'}}>
                <CardContent sx={{ height: 230}}  style={{ padding: '7px 13px', display: 'flex', justifyContent:'center', flexDirection:'column', gap:'5px'}}>
                    <Typography variant="h6" component="div">
                    Ophtalmologist
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Doctors:<br/>
                    Ikramova S. S.<br/>
                    Barsbekova L. A.<br/>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Test that measures electrical activity in the brain using small, metal discs (electrodes) attached to the scalp.
                    <br/>
                    </Typography>
                    <Typography variant="h6" color="text.primary" style={{textAlign:'center', marignTop: '15px', textDecoration:'underline'}}>
                        600 KGS
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
};

export default ExaminationsPage;