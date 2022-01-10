export const initialState ={
    basket :[],
    user: null
};
//selector
export const getbaskettotal =(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0 )
const reducer =(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'add_to_basket':
            return {
                ...state, // <= bring the current state 
                basket :[...state.basket,action.item],
            };
            case"remove_from_basket":
            const index =state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
            );
            let newbasket =[...state.basket];
            if(index >=0){
                newbasket.splice(index,1);
            }else{
                console.warn(`cant remove(id:${action.id})as its not in basket!`)
            }
            return{
                ...state,
                basket:newbasket
            }
            case "set_user":
                return {
                    ...state,
                    user:action.user
                }
            default:
                return state;
    }
};
export default reducer;