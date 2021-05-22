
export const addTodo = (input,toggle,newId) =>{
    return{
        type : 'Add-Todo',
        payload : {
            id : new Date().getTime().toString(),
            data : input,
            toggle: toggle,
            newid :  newId
            },
    }

}

export const removeTodo = (id) =>{
    return{
        type : 'remove-Todo',
        id,
    }

}

export const  removeAllTodo = () =>{
    return{
        type : 'remove-List',
    }

}

export const editTodo = (indx) =>{
    // console.log(input);
   return{
       type: 'Edit-Todo',
        index : indx,
    
   }
}

