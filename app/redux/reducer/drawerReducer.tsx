const initialState = {
    isOpen: false,
};

const drawerReducer = (state = initialState, action:any) => {

    switch (action.type) {
      
        case 'OPEN_DRAWER':
            return{
                ...state,
                isOpen : true
            }
        case 'CLOSE_DRAWER':
            return{
                ...state,
                isOpen : false
            }
        default:
            return state; 
    }   
}

export default drawerReducer;