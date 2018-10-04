import {User} from '../models/user.model';
import {MyAction} from '../actions/index';

export interface UserState {
  profile: User;
  loading: boolean;
}

export const initialState: UserState = {
  profile: null,
  loading: false
};


export const userReducer = (currentState: UserState = initialState, action: MyAction): UserState => {
  console.log('appReducer called', currentState, action);
  switch (action.type) {
    case 'USER_ADD':
      return {...currentState, profile: action.payload};
    case 'USER_DELETE':
      return {...currentState, profile: null};
    default:
      return currentState;
  }
};


export const _getUser = (state: UserState) => state.profile;

// const Amit = 'Hello world';
// const name = 'I love Angular';
//
// // Values witout quotes are treated as variables, but keys even without quotes
// // ...are treated as strings.
// const student = {name: 'Amit', email: 'amit@gmail.com', age: 23};
// const teacher = {name: 'Rajnikant', department: 'CS', experience: '18yrs'};
//
// // const xyz = {student: student, teacher: teacher};
// const xyz = {student, teacher};
// // const xyz = {
// //   student: {name: 'Amit', email: 'amit@gmail.com', age: 23},
// //   teacher: {name: 'Rajnikant', department: 'CS', experience: '18yrs'},
// // };
//
// const xyz1 = {student};
// const xyz1 = {student: {name: 'Amit', email: 'amit@gmail.com', age: 23}};
//
// const age = 65;
// const xyz1 = {...student, teacher, age, name: 'Sachin'};
// const xyz1 = {name: 'Amit', email: 'amit@gmail.com', age: 23};
//
//
// const c = xyz;
// // c === xyz -> true
// // c.student === xyz.student -> true
//
//
//
// const a = {...xyz};
// // a === xyz -> false
// // a.student === xyz.student -> true
//
//
//
// const b = {student: {...xyz.student}, teacher: {...xyz.teacher}};
// // b === xyz -> false
// // b.student === xyz.student -> false
//
//
//
// xyz2.student.name = 'sumit';
//
// // {xyz, pqr, abc} means {xyz: xyz, pqr: pqr, abc: abc}
//
// const {email, age} = student;
// // const email = student.email;
// // const age = student.age;
//
// const {email: a1, age: a2} = student;
// // const a1 = student.email;
// // const a2 = student.age;
//
//
// const {email, ...rest} = student;








