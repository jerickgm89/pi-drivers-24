import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllDrivers } from '../../store/drivers';

export const CardDrives = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getAllDrivers() )
    }, []);

    return (
            <h1>CardDrives</h1>
    );
}
