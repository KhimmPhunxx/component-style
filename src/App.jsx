// src/App.jsx
import React from 'react';
import { Alert_Modal } from './components/alert-modal/Alert-Modal';
import { Alert_Modal_Input } from './components/alert-modal/Alert-Modal-Input';

function App() {
    return (
        <main className=' w-full h-screen m-auto'>
            <section className='flex'>
                <Alert_Modal />
            </section>

            <section className=' mt-5'>
                <Alert_Modal_Input />
            </section>

        </main>
    );
}

export default App