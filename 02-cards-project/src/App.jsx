import 'bulma/css/bulma.css'
import './App.css'
import Course from './course'
import Angular from './assets/img/angular.jpg'
import Bootstrap from './assets/img/bootstrap5.jpeg'
import Frontend from './assets/img/frontend.png'
import KompleWeb from './assets/img/kompleweb.jpg'


function App() {

  return (
    <div className='App'>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            Kurslarim
          </p>
        </div>
      </section>
      <div className="container">
        <section className='section'>
        <div className="columns">
          <div className="column">
            <Course 
              image = {Angular}
              title = 'Angular' 
              description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sequi. Pariatur aspernatur voluptatum dolores qui nulla ea quam. Aspernatur, quam!" />
          </div>
          <div className="column">
            <Course 
              image = {Bootstrap}
              title = 'Bootstrap 5' 
              description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sequi. Pariatur aspernatur voluptatum dolores qui nulla ea quam. Aspernatur, quam!" />
          </div>
          <div className="column">
            <Course 
              image = {KompleWeb}
              title = 'Komple Web' 
              description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sequi. Pariatur aspernatur voluptatum dolores qui nulla ea quam. Aspernatur, quam!" />
          </div>
          <div className="column">
            <Course 
              image = {Frontend}
              title = 'Frontend' 
              description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sequi. Pariatur aspernatur voluptatum dolores qui nulla ea quam. Aspernatur, quam!" />
          </div>
        </div>

        </section>
        
      </div>
      
      
      
      
      
      
      
      
      
      
    </div>
  )
}


export default App
