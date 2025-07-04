

const CartList = ({found, deleteList}) => {
    console.log(found.id);
  return (
    <div key={found.id} className='md:w-[400px] w-[250px] grid justify-self-center p-[20px] grid-cols-3 grid-rows-3 rounded-[15px] h-[200px] shadow-2xl gap-5 bg-white'>
              <div className='row-span-2 bg-white'><img className='h-full justify-self-center' src={found.image} alt="" /></div>
              <p className=' row-span-2 font-bold mt-[10px] md:text-[16px] text-[12px] col-span-2'>{found.title}</p>
              <div className='place-content-center text-gray-700 font-semibold'>${found.price}</div>
              <button className='justify-self-end col-span-2'><img src="/delete.png" width="20px" onClick={()=>{deleteList(found.id)}}/></button>
            </div>
)
}

export default CartList