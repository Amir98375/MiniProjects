

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
export const Slider=()=>{
    return(
        <Carousel>
            
            <div className="Main">
                    <img className="image" src="https://images.unsplash.com/photo-1656387710405-5bcc236f5308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8QkpKTXR0ZURKQTR8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className="Main">
                    < img className="image" src="https://images.unsplash.com/photo-1656387752648-39f6d1f1af81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8QkpKTXR0ZURKQTR8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className="Main">
                    <img  className="image" src="https://images.unsplash.com/photo-1656387710416-82c30945984b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8QkpKTXR0ZURKQTR8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
           
               
            </Carousel>

    )
}