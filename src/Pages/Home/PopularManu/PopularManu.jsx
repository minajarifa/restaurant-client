
import Title from "../../../Components/Title/Title";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/ManuItem/MenuItem";


export default function PopularManu() {
    const [menu]=useMenu()
  
  return (
    <div className="py-8">
        <Title heading={`From our manu`} subHeading={`Popular Items`}/>
        <div className="grid grid-cols-2 gap-4">
            {
                menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    </div>
  )
}
