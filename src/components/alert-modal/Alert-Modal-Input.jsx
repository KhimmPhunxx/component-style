import React from 'react'
import { IoClose } from "react-icons/io5";

export const Alert_Modal_Input = () => {
    const [showModal, setShowModal] = React.useState(true);

    return (
        <main className=' w-full h-screen'>
            <section>
                <button
                    onClick={() => setShowModal((curr) => !curr)}
                    className=' bg-gray-700 px-4 py-3 rounded text-white hover:bg-gray-600 duration-200'>Show Input Modal</button>
            </section>
            <section className={` ${showModal ? 'w-0' : 'w-full h-full'} bg-opacity-50 fixed bg-gray-800 top-0 flex justify-center items-center overflow-hidden`}>
                <div className={`${showModal ? 'w-0 h-0' : 'w-[450px] h-[325px]'} duration-75 bg-white rounded-lg overflow-hidden p-6`} >
                    <div className=' flex justify-between'>
                        <p className=' text-lg font-semibold'>Edit Profile</p>
                        <div>
                            <IoClose onClick={() => setShowModal(true)} className='text-xl hover:bg-gray-200 duration-200 rounded right-2 text-gray-500 cursor-pointer' />
                        </div>
                    </div>
                    <p className=' text-sm text-gray-600 mt-2'>Make changes to your profile here. Click save when you're done.</p>

                    <div className='mt-5 space-y-3'>
                        <div className=' flex justify-center items-center space-x-16'>
                            <label htmlFor="">Name</label>
                            <input type="text" className=' w-full border-2 border-gray-400 p-2 rounded mt-1' placeholder='name'/>
                        </div>
                        <div className=' flex justify-center items-center space-x-7'>
                            <label htmlFor="">Username</label>
                            <input type="text" className=' w-full border-2 border-gray-400 p-2 rounded mt-1' placeholder='username' />
                        </div>
                    </div>
                    {/* button Save Change */}
                    <div className='flex justify-end mt-8'>
                        <button onClick={() => setShowModal(true)} className='px-4 py-3 text-sm bg-gray-800 hover:bg-gray-700 duration-200 text-gray-100 rounded mr-2'>Save Changes</button>
                    </div>
                </div>
            </section>
        </main>
    )
}
