
const initialState = {
  todo = []
}

export const todoReducers = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TODO': {
      console.log(state)
    }
    case 'REMOVE_TODO': {
      console.log(state)
    }
  }
}