import authReducer from '../../reducers/auth'

test('should login', () => {
    const uid = 'WDJLKDFDOOKLSQ';
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action)
    expect(state).toEqual({uid})
})

test('should logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({}, action)
    expect(state).toEqual({})
})