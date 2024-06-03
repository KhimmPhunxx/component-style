import React from 'react'

export const Alert_Modal = () => {

    const [showModal, setShowModal] = React.useState(true);

    return (
        <main>
            <section>
                <button
                    onClick={() => setShowModal((curr) => !curr)}
                    className=' bg-gray-700 px-4 py-3 rounded text-white hover:bg-gray-600 duration-200'>Show Modal</button>
            </section>
            <section className={` ${showModal ? 'w-0' : 'w-full h-full'} bg-opacity-50 bg-gray-800 fixed top-0 flex justify-center items-center overflow-hidden`}>
                <div className={`${showModal ? 'w-0 h-0' : 'w-[600px] h-52'} duration-75 bg-white rounded-lg overflow-hidden p-5`} >
                    <div className='p-4 space-y-4'>
                        <p className=' font-bold text-lg'>Are you sure you want to delete this?</p>
                        <p className=' text-gray-500 text-sm'>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
                        <div className='flex justify-end mt-4 space-x-1'>
                            <button onClick={() => setShowModal(true)} className='px-4 py-2 text-sm hover:bg-gray-400 duration-200 border-2 border-gray-400 text-gray-600 rounded mr-2'>Cancel</button>
                            <button onClick={() => setShowModal(true)} className='px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 duration-200 text-gray-100 rounded mr-2'>Continue</button>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
