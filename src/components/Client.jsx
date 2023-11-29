import React from "react"
import App from "../App"



const Client = () => {
    const URL = "localhost:8080";
    const [DBItems, setDBItems] = React.useState([]);

    //Getting all Items using Fetch API
    const getItems = async () => {
        const response = await fetch(`${URL}/api/get-items`, {
            method: "GET",
            headers: {
                "content-Type": "application/json"
            }
        })
        const data = await response.json();
        setDBItems(data);
    }

    // Adding an item using Fetch API
    const addItems = async (item) => {
        const response = await fetch(`${URL}/api/add-items`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        const data = await response.json();
        setDBItems(DBItems.concat(data));
    }

    // Deleting an item using Fetch API
    const deleteItem = async (id) => {
        const response = await fetch(`${URL}/api/delete-item/${id}`, {
            method: "DELETE",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        })
        response.json()
        const newItems = DBItems.filter((item) => { return item._id !== id })
        setDBItems(newItems);
    }

    return (
        <DataContext.Provider value={getItems}>
        <App />
        </DataContext.Provider>
    )

}

export default Client