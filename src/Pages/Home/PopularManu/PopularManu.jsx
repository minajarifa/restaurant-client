import { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import MenuItem from "../../Shared/ManuItem/MenuItem";


export default function PopularManu() {
    const [menu,setMenu]= useState([])
    useEffect(()=>{
        fetch(`menu.json`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            const poputarItem= data.filter (item=>item.category==='popular')
            setMenu(poputarItem)
        })
    },[])
    console.log(menu)
  return (
    <div>
        <Title heading={`From our manu`} subHeading={`Popular Items`}/>
        <div className="grid grid-cols-2 gap-4">
            {
                menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    </div>
  )
}
