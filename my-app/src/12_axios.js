import { Component } from "react";
import axios from 'axios';

class AxiosGet extends Component{
    
    componentDidMount(){
        axios.get("http://date.jsontest.com/").then(Response => {alert("AxiosGet : " + Response.data.date)})
    }
    /*
        get() : get방식으로 http호출. url호출이 완료되면 then()함수가 실행됨
        then() : 호출결과로 response 데이터가 반환되며, response와 변수명 사이에 data를 붙이면 변수를 사용할 수 있다.
    */

    render(){
        return(
            <h1>Axios Get</h1>
        )
    }
}

class AxiosPost extends Component{
    
    componentDidMount(){
        axios.post(
            "http://date.jsontest.com/",
            {a:1, b:2}
        ).then(Response => {alert("AxiosPost : " + Response.data.date)})
    }
    /*
       post('호출url', json데이터) : get()과 사용방법이 거의 비슷하며 json데이터는 body영역에 담겨서 전송된다.
    */

    render(){
        return(
            <h1>Axios Post</h1>
        )
    }
}


export {AxiosGet , AxiosPost}