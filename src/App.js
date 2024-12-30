import React from 'react'

const App = () => {
  const [data, setData] = React.useState([
    {name:"India",checked:false},
    {name:"USA",checked:false}, 
    {name:"UK",checked:false},
  ])

  const handleChange=(index)=>{
    data[index].checked = !data[index].checked;
    setData([...data])
  }
  const handleDelete=(index)=>{
    data.splice(index,1);
    setData([...data])
  }
  return (
    <div>
      {data.map((country,index)=>(
        <div key={index} className={{display:'flex',justifyContent:'space-between'}}>
          <input type='checkbox' onClick={()=>{
            handleChange(index);
          }}/>
          <span>{country.name}{" "}</span>
          {country.checked ? <span onClick={()=>handleDelete(index)}>X</span>:""}

        </div>

      ))}

    </div>

  )
}

export default App