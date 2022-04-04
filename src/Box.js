
   
import React, { useState } from 'react';

export default function Box(props){

    const changeColor = () => {
    console.log("check")
    if (className === "box white") {
      setclassName("box black");
      props.setCount(props.count+1)
    //   setCount(2);
    } else {
      setclassName("box white");
      props.setCount(props.count-1)
    }
  }

    const [className, setclassName] = useState("box white");
    return <div className={className} onClick={changeColor}></div>
  }

  