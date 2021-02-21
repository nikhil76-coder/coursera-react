import { LEADERS } from '../shared/leaders';

export const Leaders = (state = LEADERS, action) => {
    switch (action.type) {
        default:
          return state;
      }
};





// import * as ActionTypes from './ActionTypes';

// export const Leaders = (state = { errMess: null, leaders:[]}, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_LEADERS:
//       return {...state, errMess: null, comments: action.payload};

//     case ActionTypes.LEADERS_FAILED:
//       return {...state, errMess: action.payload};

//     // case ActionTypes.ADD_COMMENT:
//     //     var comment = action.payload;
       
//     //     return { ...state, comments: state.comments.concat(comment)};

//     default:
//       return state;
//   }
// };