import React from 'react';
import {Grid,Icon} from 'antd-mobile';
import styles from './index.css';
import { connect } from 'dva';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
//import 'antd-mobile/dist/antd-mobile.css';

const data=Array.from(new Array(9)).map((_val,i)=>({
    icon:(<Icon type='icon-qiandao' />),  
    text:'name'+i
}));

const menus=[
    {icon:(<Icon type='icon-sousuo' />),text:'搜索'},
    {icon:(<Icon type='icon-qiandao' />),text:'签到'},
    {icon:(<Icon type='icon-youhuiquan' />),text:'优惠券'},
    {icon:(<Icon type='icon-xiaoxi' />),text:'消息'},
    {icon:(<Icon type='icon-yinle' />),text:'音乐'},
    {icon:(<Icon type='icon-ka1' />),text:'卡'},
]

const links=[
    '/sousuo','/qiandao','/youhuiquan',
    '/xiaoxi','/yinle','/ka1',
]




class MainPage extends React.Component{
    /*
    constructor(props){
        super(props)
        console.log("进入constructor函数")
        this.state={
            count:'初始值'
        }
        
    }*/


    componentDidMount(){
        /*
        const {dispatch}=this.props;
        console.log("index中发起dispatch")
        dispatch({
            type:'mymodel/getAllUser'
        })
        console.log("打印this.state")
        console.log(this.state)
        */
    }

    
    gridClick=(el,index)=>{
        console.log(el.text);
        console.log(index)
        this.props.history.push(links[index])
    }

    handleClick=()=>{
        const {dispatch}=this.props;
        dispatch({
            type:'mymodel/getAllUser'
        })
    }

    

    render(){
        const users=this.props.userList;
        console.log('打印users')
        console.log(users)
        
        const usersshow=users.map((item)=>
            <li>{item.userage}</li>
        );
        
        return(
            <div>
        <div className={styles.subtitle}>主菜单</div>
        <Grid data={menus} columnNum={3} onClick={this.gridClick }/>
        <Button onClick={this.handleClick}>default</Button>
        <Button>{this.props.myname}</Button>
        <div>{JSON.stringify(this.props.userList)}</div>
        <ul>{usersshow}</ul>
        
        
    </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('打印count'+JSON.stringify(state))
    return {
        myname: state.mymodel.myname,
        userList:state.mymodel.userList.data
    }   
  }



  export default connect(mapStateToProps)(MainPage);
  

  
//export default MainPage;
/*
  export default connect()(MainPage);
   */