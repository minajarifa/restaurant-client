

export default function MenuItem({item}) {
  return (
    <div className='flex space-x-4'>
        <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[120px]' src={item.image} alt="" />
        <div>
            <h3 className='uppercase'>{item.name}------</h3>
            <p>{item.recipe}</p>
        </div>
        <p className='text-yellow-500'>${item.price}</p>
    </div>
  )
}
