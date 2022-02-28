import { useState, useEffect } from 'react'

import Edit from './components/Edit'
import List from './components/List'
import './index.css'

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    //綁定事件
    return()=>{
//取消綁定
    }
  }, [data])

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  )
}

export default Home
