
let initialState = [
    {id: 1, name: 'Robert'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Rebeca'},
]

const sidebarReducer = (state = initialState, action) => {
    let stateCopy = [...state]
    return stateCopy
}

export default sidebarReducer;