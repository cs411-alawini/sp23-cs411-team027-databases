import React from 'react';
import "./Profile.css";

import logo from '/Users/kaanyigit/Documents/sp23-cs411-team027-databases/frontend/src/logo.svg'; // Tell webpack this JS file uses this image


export default function Profile(props) {
    console.log(props)
    console.log(logo); // /logo.84287d09.png

    // <tbody>
    //   {items.map(item => <ObjectRow key={item.id} name={item.name} />)} 
    // </tbody>

    



    return (
      <div>
        <div className="container">
      <img src={logo} alt="Centered" style={{ transform: 'scale(0.5)' }}/>
    </div>
    <div className="kant">
        <h1>name Of the Game</h1>
      
    </div>
    <div className="kant">
        <h1>Rating: 4/5 </h1>
    </div>
    <div className="kant">
        <h1>Genre: Sci-Fi </h1>
    </div>
    <div className="paragraphy">
        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum sapien sit amet risus pretium, nec pulvinar tortor scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget nulla non mi fringilla volutpat. Donec in vestibulum erat. Maecenas non lorem id leo rutrum tempor. Sed vestibulum eros sit amet aliquam convallis.

</p1>
    </div>



        

      
      </div>
    )
}


