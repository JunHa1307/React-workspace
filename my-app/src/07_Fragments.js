import React, { Component, PureComponent } from "react";

/*
    Fragments?
    return 되는 컴포넌트를 감싸는 틀

    컴포넌트 다누이로 요소를 return할 때 반드시 하나의 요소만 반환 할 수 있기 때문에 여러 개의 태그 요소를 반환하고 싶다면
    반드시 하나의 html 요소로 감싸줘야 한다.

    반환되는 값이 여러 개의 태그요소인 경우 에러가 발생할 수 있다.

    이 때, Fragment 태그를 활용하며 불필요한 html 요소를 없애고 여러개의 요소를 반환할 수 있다.
*/

class Fragments extends Component{
    render(){
        return(
            /* 에러를 해결하기 위해 div태그로 감싸는건 좋지 못한 방법이다. */
            // <div>
            //     <td>리액트 Fragment</td>
            //     <td>리액트 Fragment</td>
            // </div>
            // <React.Fragment>
            //     <td>리액트 Fragment</td>
            //     <td>리액트 Fragment</td>
            // </React.Fragment> 아래와 같음
            <>
                <td>리액트 Fragment</td>
                <td>리액트 Fragment</td>
            </>
        )
    }
}

export default Fragments;