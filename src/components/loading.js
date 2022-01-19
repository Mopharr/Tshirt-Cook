import React, {useRef, useEffect} from 'react'
import '../style/loading.css'
import {gsap } from "gsap"
import ava from 'assets/flogo.png'




const Loading = () => {
     const imageName = useRef();
     const hide = useRef();
    // const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

    useEffect(() => {
        gsap.to(imageName.current, {y: '0%'}, 1.5)
        gsap.to(hide.current, {y: '-100%'}, 2)
    }, [])
    return (
      <div ref={hide} className='Lmain'>
        <div className='hide'>
          <img
            className='image'
            ref={imageName}
            src={ava}
            alt=''
          />
        </div>
      </div>
    );

 
}

export default Loading
