import { getcategoryConstant } from "../actions/constants";


const initalState = {
    categories : [],
    error:null,
    loading:false,
}


const buildNewCategory = (parentId,categories,category)=>{

    let myCategory = [];

if(parentId == undefined){
    return [
        ...categories,{
            _id:category._id,
            name:category.name,
            slug:category.slug,
            parentId:category.parentId,
            children:category.children
        }

    ]
}

    for(let cat of categories){

        if(cat._id == parentId){
            myCategory.push({
                ...cat,
                children: cat.children ? buildNewCategory(parentId, [  ...cat.children, {
                    _id:category._id,
                    name:category.name,
                    slug:category.slug,
                    parentId:category.parentId,
                    children:category.children

                }], category) : []
            })
        }else{
            myCategory.push({
                ...cat,
                children: cat.children ? buildNewCategory(parentId,cat.children,category) : []
            })
        }
       

    }
return myCategory;
}

export default (state = initalState, action)=>{
    switch(action.type){
      
        case getcategoryConstant.GET_ALL_CATEGORY_SUCCESS : state = {
            ...state,
            loading:false,
            categories : action.payload.categories,
            
        }
        break;
       
  
        case getcategoryConstant.ADD_NEW_CATEGORY_REQUEST : state = {
            ...state,
            loading:true
        }
        break;

        case getcategoryConstant.ADD_NEW_CATEGORY_SUCCESS :
            //const category = action.payload.category;
            const updatedCategory = buildNewCategory(action.payload.category.parentId,state.categories, action.payload.category);
            console.log('updated category' , updatedCategory)      
        state = {
            ...state, 
            categories:updatedCategory,
            loading:false
        }
        break;

        case getcategoryConstant.ADD_NEW_CATEGORY_FAILURE : state = {
            ...state,
            loading:true
        }
        break;
    }
    return state
}