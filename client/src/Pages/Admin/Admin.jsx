import { useNavigate } from "react-router-dom"

const Admin = () => {
    const navigate=useNavigate()
    return (
        <div className=" min-h-screen  mt-3 px-8">
            <div className='flex mt-2 justify-between  items-center  gap-10 '>
                <div className='text-3xl text-black font-semibold'>
                    Yoga Admin
                </div>  
                <button className='px-5 py-2 bg-primary rounded cursor-pointer active:scale-95 border border-gray-700 px-4 py-2 transition-all text-xl text-black' onClick={() => navigate("/")}>Logout</button>
            </div>

            {/* {portfolioData && (
                <div className=' text-xl pb-20 p-2 px-11 max-sm:px-5'>
                    <Tabs defaultActiveKey="1" items={items} />
                </div>
            )} */}  
        </div>
    )
}

export default Admin