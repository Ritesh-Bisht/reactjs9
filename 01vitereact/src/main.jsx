import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MYAPP(){
  return(
    <div> 
      <h1> CUSTOM APP ! CHAI   </h1>
    </div>
  )
}
const anotherUser='car'

const reactElement= React.createElement(
  'a',
  {href:'http://localhost:5173/', target:'_blank'},
  'Click here to visit website',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).
render(

  reactElement
 
)
