import React , {useState} from 'react'
import {Tour} from './Tour'
import {Data} from './Data'

export const Home = () => {
  const [current , update] = useState(Data)
  return (
    
    <div>
        <Tour Data={current}/>
        </div>
    
  )
}
