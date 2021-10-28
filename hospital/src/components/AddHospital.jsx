import React, {useState} from 'react'
import { TextField,Button } from '@mui/material'
import { Hospital } from '../domain/models/Hospital';
import {Grid} from '@mui/material'

const AddHospital = (props) => {
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');

    const addHospital = () =>{
        let hospital = new Hospital(name,description)
        props.addHospital(hospital)
    }


    return (
        <Grid item>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField id="outlined-basic" label="Description"
                value={description} onChange={(e) => setDescription(e.target.value)} 
                variant="outlined" />
            <Button variant="contained" onClick={addHospital}>Agregar</Button>
        </Grid>
    )
}

export default AddHospital