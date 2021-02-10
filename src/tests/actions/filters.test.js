import moment from 'moment'
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters'

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set Text Filter action object with text', ()=>{
    const action = setTextFilter('bill')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    })
})

test('should generate set Text Filter action object without text', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate sort by amount action object', ()=>{
    const action = sortByAmount()  
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})


test('should generate sort by date action object', ()=>{
    const action = sortByDate()  
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})