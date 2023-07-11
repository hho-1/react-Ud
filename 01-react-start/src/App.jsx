import { useState } from 'react'
import './App.css'

function App() {

  const students = 43000;
  const nameSurname = "Muhittin Topalak"
  const isTrue = false
  const date = 'date';
  const url = "https://picsum.photos/250/250"

  return (
    
    
    <div className='cont' style= {{
      width: '600px',
      height: '600px',
      backgroundColor: 'antiquewhite',
      fontSize: '20px'
      }}>                              {/* <> </> Bunu basa ve sona koyarsan ayni div koymus gibi muamele eder. Yani kapsayici tek bir seye ihtiyacimiz oldugu icin */}
      <h2>Isim Soyisim: {nameSurname}</h2>
      <p>Muhittin</p>
      <p>number of students: {students}</p>               {/* Bu sekilde yazmazsan studentsi oldugu gibi yazdirir */}
      <input type="text" />
      <p>Dogru mu? {isTrue}</p>                  {/* {isTrue} degerinin true ya da false olmasi ekrana basilmaz */}

      {isTrue ? <p>Dogru</p> : <p>Yanlis</p>}

      <input type={date} />
      <img src={url} alt="" />
    </div>
    
  )
}

export default App
