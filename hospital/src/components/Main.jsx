import React from 'react'
import {Grid} from '@mui/material'
import AddHospital from './AddHospital'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Main = (props) => {

    const [hospitals, setHospitals] = useState([])

    const addHospital = (task) =>{ // {task:'description', priority: 'priority' }
      //setLoading(true)
      fetch('http://localhost:4000/hospitals',
      {
        method:'POST',
        headers:{ 
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({...task})
      })
        .then((data) => data.json())
        .then(data => {
          setHospitals(hospitals.concat(data))
          //setLoading(false)
        })
        .catch(e=> console.log(e))
       // Se queda con el objeto tal como viene y agregale una propiedad más
    }
  
    useEffect(()=>{
      fetch('http://localhost:4000/hospitals')
        .then((data) => data.json())
        .then(data => {
          setHospitals(data)
        }
        )
        .catch(e=> console.log(e))
    },[])
  
    const containerStyle = {
      width: '400px',
      height: '400px'
    };
    
  
    const center = {
      lat: -3.745,
      lng: -38.523
    };
    return (
        <Grid item xs={12} container spacing={2} className="container">
        <Grid container direction='column' item xs={8}>
          <AddHospital addHospital={addHospital}>

          </AddHospital>
          <Grid item>
            {
              hospitals.map(it =>
                <Card >
                  <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {it.name}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {it.description}
                  </Typography>
                  </CardContent>
                </Card> 
                )
            }
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <LoadScript
          googleMapsApiKey="AIzaSyBZBSGYIP2JmwTrd1YKDZTEaFNU3j3WH1I"
          >
            <GoogleMap 
                      mapContainerStyle={containerStyle}

              center={center}
              zoom={10}
            >
            </GoogleMap>
          </LoadScript>
        </Grid>
      </Grid>
    )
}

export default Main