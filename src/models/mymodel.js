import {getAllUser} from '../services/myservice'
export default {

    namespace: 'mymodel',
  
    state: {
        count:1,
        myname:"initial",
        userList:{
            data:[]
        }
    },
  
    effects: {
      *getAllUser({ payload }, { call, put }) {  // eslint-disable-line
        console.log("进入model的getAllUser方法")
        const response=yield call(getAllUser)
        console.log("调用getAllUser接口返回的内容")
        console.log(response)
        yield put({ type: 'showAllUser',payload:response });
      },
    },
  
    reducers: {
        showAllUser(state, action) {
            console.log("打印action.payload")
            console.log(action.payload)
        return { ...state, userList:action.payload ,myname:"xuxiaoxiao"};
        
      },
      add(state){
          console.log(state.count);
          
          return {...state,count:state.count+1}
      }
    },
  
  };