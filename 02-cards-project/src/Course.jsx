import React from 'react'

function Course({image, title, description}) {                   // Ilk olarak burada parametre props idi, sonradan destructure gibi degistirdik
  
  //console.log(props);
  /* const title = props.title
  const description = props.description */
  /* const {title, description} = props */                     //destructuring

  return ( 
    
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{title}</p>
      </div>
    </div>

    <div className="content">
      {description}
    </div>
  </div>
</div>
)
    {/* <div>
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{description}</div>
      
    </div> */}
   ;
}

export default Course;
