import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './OrganizationsPage.css'
import  Cortex  from '../../src/cortex.png'
import  Vedanta  from '../../src/vedanta.png'
import  Ncomid  from '../../src/ncomid.png'
import  Malysh  from '../../src/malysh.png'
import  Slujba  from '../../src/slujba.png'



const OrganizationsPage = () => {

    return (
        <div className="organizations-wrapper">
            <h3 className='heading'>Organizations</h3>
            <div className="cards-wrapper">
            <Card sx={{ width: 385, background:'#e5e5e563'}}>
                <CardContent sx={{ height: 230}}  style={{ padding: '7px'}}>
                    <img src={Cortex} alt="" style={{width:'130px', marginBottom: '10px', marginLeft: '111px' }}/>
                    <Typography variant="h6" component="div">
                    "Cortex"
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Neurological center
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Address: Bishkek city, Akhunbaev st. 131/1
                    <br/>
                    Phone: 0 (312) 492 369
                    </Typography>
                </CardContent>
                <CardActions sx={{background:'#6DA4D7'  }}>
                    <Button size="small"><a href="https://cortex.kg/" target="_blank" style={{color:'#fff', textDecoration:'none'}}>Learn More</a></Button>
                </CardActions>
            </Card>
            <Card sx={{ width: 385, background:'#e5e5e563'  }}>
                <CardContent sx={{ height: 230}}  style={{ padding: '7px'}}>
                <img src={Vedanta} alt="" style={{width:'130px', marginBottom: '10px', marginLeft: '111px' }}/>
                    <Typography variant="h6" component="div">
                    "Vedanta"
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Clinic
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Address: Bishkek city,Fuchika st., 34
                    <br/>
                    Phone: 0 (707) 103 103 
                    </Typography>
                </CardContent>
                <CardActions sx={{background:'#6DA4D7'  }}>
                    <Button size="small"><a href="https://www.instagram.com/vedanta.clinic/" target="_blank" style={{color:'#fff', textDecoration:'none'}}>Learn More</a></Button>
                </CardActions>
            </Card>
            <Card sx={{ width: 385, background:'#e5e5e563'  }}>
                <CardContent sx={{ height: 230}}  style={{ padding: '7px'}}>
                <img src={Malysh} alt="" style={{width:'130px', marginBottom: '10px', marginLeft: '111px' }}/>

                    <Typography variant="h6" component="div">
                    “Malysh”
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Children’s Clinic
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Address: Bishkek city, Tugolbai-Ata st., 67
                    <br/>
                    Phone: 0 (312) 301 919
                    </Typography>
                </CardContent>
                <CardActions sx={{background:'#6DA4D7'  }}>
                    <Button size="small"><a href="https://www.instagram.com/malish/" target="_blank" style={{color:'#fff', textDecoration:'none'}}>Learn More</a></Button>
                </CardActions>
            </Card>
            <Card sx={{ width: 385, background:'#e5e5e563'  }}>
                <CardContent sx={{ height: 230}}  style={{ padding: '7px'}}>
                <img src={Slujba} alt="" style={{width:'130px', marginBottom: '10px', marginLeft: '111px' }}/>

                    <Typography variant="h6" component="div">
                    Pediatric Service 24/7
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Address: Bishkek city, Tokombaeva st., 9A
                    <br/>
                    Phone: 0 (705) 591 188
                    </Typography>
                </CardContent>
                <CardActions sx={{background:'#6DA4D7'  }}>
                    <Button size="small"><a href="https://www.instagram.com/pediatriya_slujba/" target="_blank" style={{color:'#fff', textDecoration:'none'}}>Learn More</a></Button>
                </CardActions>
            </Card>
            <Card sx={{ width: 385, background:'#e5e5e563'  }}>
                <CardContent sx={{ height: 230}} style={{ padding: '7px'}}>
                <img src={Ncomid} alt="" style={{width:'130px', marginBottom: '10px', marginLeft: '109px'}}/>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    </Typography>
                    <Typography variant="h7" component="div">
                    National Center of Maternity and Childhood Care
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    
                    </Typography>
                    <Typography variant="body2"  color="text.secondary">
                    Address: Bishkek city, Akhunbaev st. 190
                    <br/>
                    Phone: 0 (312) 571 268
                    </Typography>
                </CardContent>
                <CardActions  sx={{background:'#6DA4D7'  }}>
                    <Button size="small"><a href="https://medik.kg/clinic/ncomid/" target="_blank" style={{color:'#fff', textDecoration:'none'}}>Learn More</a></Button>
                </CardActions>
            </Card>
            </div>
        </div>
    );
};

export default OrganizationsPage;