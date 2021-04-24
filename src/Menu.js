import React from 'react';
 
function Menu(props) {
 
 
  return (
    <div className="menu-items">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.items.map(item => {
                        return (
                            <tr>
                                <td>{item.itemName}</td>
                                <td>{item.price} $</td>
                                <td><a href="#">Edit</a>&nbsp;&nbsp;&nbsp; <a href="#">Delete</a></td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        <br></br>
        <br></br>
        <div>
            <label>Item Name</label> <input />
        </div>
        <br></br>
        <div>
            <label>Price</label> <input />
        </div>
        <br></br>
        <button>Add Item</button>
    </div>
  );
}
 
export default Menu;