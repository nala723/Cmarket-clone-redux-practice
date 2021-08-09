import React, { useEffect, useState } from 'react';

export default function Toast({text , dismissTime }){
    const [isFading, setIsFading] = useState(false)

//  useEffect(()=>{
//     let mounted = true
//     setTimeout(()=>{
//       if(mounted){
//           setIsFading(true) 
//       }
//     },dismissTime - 3000)
//    return () => {
//        mounted = false // 500ms? 후에 mounted가 falseㅗ디면 isFading도 더이상 true 가 아닌것인가? 한번더 확인
//    }
//  },[])

 return (

  <div className={`notification ${isFading ? 'fade-out' : ''}`}>
      {text}
  </div>

 )
}