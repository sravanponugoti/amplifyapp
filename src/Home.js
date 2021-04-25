
import React, {useState, useEffect} from 'react';

import Menu from './Menu';
 
function Home() {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() =>
        // fetch("./menu.json", {
        //     headers : { 
        //       'Content-Type': 'application/json',
        //       'Accept': 'application/json'
        //      }
        //   })
        // .then(res => res.json())
        // .then(res => setMenuItems(res))

        fetch("https://ohczyuo4q4.execute-api.us-east-2.amazonaws.com/my-function", {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        .then(res => res.json())
        .then(res => console.log(res))
    , []);

    return (
        <div>
        Welcome to the Restaurant Page!

        <Menu items={menuItems}/>
        </div>
    );
}
 
export default Home;