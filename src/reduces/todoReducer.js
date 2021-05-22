const initialData = {
    list: []
};

const todoReduce = (state = initialData, action) => {
    switch (action.type) {

        case 'Add-Todo':

            const { id, data, toggle, newid } = action.payload;
            if (toggle && data) {
                console.log("in if");
                return { ...state, list: [...state.list, { id: id, data: data, }] }
            } else if (!toggle) {
                console.log("in else", newid);
                const newList = state.list.map((elem) => {
                    console.log("elem", elem)
                    if (elem.id === newid) {
                        return { data: data }
                    }
                    return elem;
                }
                )

                console.log("new list")
                return {
                    ...state, list: newList
                }


                

                state.list.map((elem) => {
                    if (elem.id === newid) {
                        return { data: data }

                    }
                })


            } else { return { list: [...state.list] }; }





        case 'remove-Todo':
            const newList = state.list.filter((elem) => elem.id !== action.id);
            return {
                ...state,
                list: newList,
            };

        case 'remove-List':
            return {
                ...state,
                list: []
            }

        case 'Edit-Todo':

            let index = action.index;
            const editItem = state.list.find((elem) => { return elem.id === index });


            return {
                ...state,
                newId: editItem.id,
            }


        default: return state
    }
}
export default todoReduce;