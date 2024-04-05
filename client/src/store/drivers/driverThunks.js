import { servicesApi } from '../../services';
import { starLoadingDrivers, setDrivers } from './driverSlice';

export const getAllDrivers = () => {
    return async (dispatch) => {
        dispatch( starLoadingDrivers() )

        const resp = await servicesApi.get('/drivers');
        
        dispatch( setDrivers({ drivers: resp.data }) );
    }
}
