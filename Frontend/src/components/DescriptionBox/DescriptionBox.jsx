import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sed neque, asperiores veniam molestiae ipsa
                exercitationem pariatur officia repudiandae, est
                vero libero. Facilis mollitia illo labore consectetur
                hic error culpa nemo!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sed neque, asperiores veniam molestiae ipsa
                exercitationem pariatur officia repudiandae, est
                vero libero. Facilis mollitia illo labore consectetur
                hic error culpa nemo!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox