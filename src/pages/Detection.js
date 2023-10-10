import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Detection() {
    const [ip, setIP] = React.useState('');
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/');
        setIP(res.data.IPv4);
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <h2>Your IPv4 Address is:</h2>
            {ip && (
               <h4>{ip}</h4>
            )}
            {!ip && (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            )}

        </>
    );
}