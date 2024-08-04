const productReducer = (state, action) => {

    switch (action.type) {

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                singleProduct : action.payload
            }
        default: return state
    }

}

export default productReducer