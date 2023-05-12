import React from "react";
/*
    Ref ? reference의 약자
    자바스크립트에서 html요소를 선택해올때
    document.getElementById("아이디값");와 같은 선택함수와 같이 요소를 가져온 후 조작하였음

    React에서는 위 요소에 더해서 Ref를 통해 html요소를 참조하여 조작할 수 있도록 지원한다.
*/

class ReactRef extends React.Component{
    constructor(props){
        super(props);
        this.InputRef = React.createRef(); // Ref변수 생성
    }

    RefFocus = () => {
        //요소에 대한 정보가 current에 할당되어있다
        this.InputRef.current.focus();
    }

    // 자바스크립트방식 요소선택
    javascriptFocus(){
        document.getElementById("id1").focus();
    }
    
    render(){
        return(
            <>
                {
                    /* input 요소에 ref속성을 추가하고 생성자 함수 내부에 선언한 InputRef변수 할당 시,
                        현재 input요소에 대한 정보를 InputRef를 통해 참조할 수 있다.*/
                }
                <input id="id1" type="text" ref={this.InputRef}/>

                <input type="button" value="REF" onClick={this.RefFocus}/>

                <input type="button" value="Javascript Focus" onClick={this.javascriptFocus}/>
            </>
        )
    }
}

export default ReactRef;