import React from "react";
import Card from './Card';
import contacts from '../contacts'

function App() {

  console.log(contacts);
  
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
        name= {contacts[0].name}
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone= "+123 456 789"
        email= "b@beyonce.com"
      />
      <Card 
        name= {contacts[1].name}
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone= "+123 456 789"
        email= "b@beyonce.com"
      />
       <Card 
        name= {contacts[2].name}
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone= "+123 456 789"
        email= "b@beyonce.com"
      />
    </div>
  );
}

export default App;
