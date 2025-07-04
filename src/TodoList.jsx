
const TodoList = ({data, renderList, showHid}) => {

  return (
    <div key={data.id} className='w-[300px] grid justify-self-center p-[20px] grid-cols-2 grid-rows-7 bg-white rounded-[15px] h-[400px] shadow-2xl'>
        <div className='col-span-2 bg-white row-span-4'><img className='h-full justify-self-center' src={data.image} alt="" /></div>
        <p className='col-span-2 row-span-2 font-bold mt-[10px]'>{data.title}</p>
        <div className='place-content-center text-gray-700 font-semibold'>${data.price}</div>
        <button className='justify-self-end'><img src="/cart.png" onClick={()=>{renderList(data.id);showHid()}} width="20px"/></button>
    </div>
  )
}

export default TodoList