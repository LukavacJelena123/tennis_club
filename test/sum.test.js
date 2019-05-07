import {temperatureConverter} from '../src/js/weather'

describe('temperatureConverter',()=>{
    it('should return 0 when passing parameter is 273.15',()=>{
        expect(temperatureConverter('273.15')).toBe('0');
    })
    it('should return 12 when passing parameter is 285.15',()=>{
        expect(temperatureConverter('285.15')).toBe('12');
    })
})

