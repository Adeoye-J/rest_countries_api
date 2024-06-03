import React from 'react'

const Practice = () => {
    items = [
        {
            name: "Jeremiah",
            id: 1
        },
        {
            name: "Daniel",
            id: 2
        },
        {
            name: "Victor",
            id: 3
        },
        {
            name: "Peter",
            id: 4
        },
        {
            name: "Elisha",
            id: 5
        }
    ]
    
    // const [filteredItems, setFilteredItems] = useState(items)
  return (
    <div>
        <input type="text" />
        {
            items.map((item) => (
                <li id={item.id}>{item.name}</li>
            ))
        }
    </div>
  )
}

export default Practice