import React from "react";
import Childeren3 from './08-3_ContextChildren3'
// 부모 컴포넌트에서 전달한 Consumer를 사용하지 않을 예정

class ContextChildren extends React.Component{
    render(){
        return(
            // 데이터를 전달하지 않고, 후손 컴포넌트만 return
            <Childeren3/>
        )
    }
}

export default ContextChildren;