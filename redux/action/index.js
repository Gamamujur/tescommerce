// Add Item to Cart

export const addcart = (product) =>{
    return {
        type : "addcart",
        payload : product
    }
}

export const delcart = (product) =>{
    return {
        type : "delcart",
        payload : product
    }
}

export const plusitems = (product) => {
    return{
        type: "pluscart",
        payload: product
    }
}

export const minusitems = (product) => {
    return{
        type: "minuscart",
        payload: product
    }
}