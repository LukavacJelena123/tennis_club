import {temperatureConverter} from '../src/js/weather'

describe('temperatureConverter',()=>{
    it('should return 0 when passing parameter is 273.15',()=>{
        expect(temperatureConverter('273.15')).toBe('0');
    })
})

