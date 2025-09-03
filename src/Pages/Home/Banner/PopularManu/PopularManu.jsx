import { useEffect } from "react";
import Title from "../../../../Components/Title/Title";


export default function PopularManu() {
    useEffect(()=>{
        fetch(`menu.json`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[])
  return (
    <div>
        <Title heading={`From our manu`} subHeading={`Popular Items`}/>
    </div>
  )
}
