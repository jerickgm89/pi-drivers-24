import { servicesApi } from '../../services';
import { starLoadingDrivers, setDrivers } from './driverSlice';

export const getDrivers = ( page = 0) => {
    return async (dispatch) => {
        dispatch( starLoadingDrivers() )

        const resp = await servicesApi.get(`/drivers?limit=9&offset=${page * 9}`);
        console.log(resp);
        
        dispatch( setDrivers({ drivers: resp.data, page: page + 1 }) );
    }
}
