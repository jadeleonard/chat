import React from 'react'
import { useState,useEffect } from 'react'
import supabase from './supabaseClient';
const Component = () => {
    const[message,setMessage] = useState('');
    const [error,setError] = useState(null);
    const handleSend = async (e) => {
        


        try{
            const {error,data} = await supabase.from('message').insert({
                message:message
            });
            if(error) throw error;
            window.location.reload();
            setMessage(data)
        } catch(error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex justify-center pt-20 items-center'>
    <div className=''>
        <input  onChange={(e) => setMessage(e.target.value)} className='border p-2 shadow-md bg-zinc-100'/>
        <button onClick={handleSend} className='bg-black p-2 rounded text-white'>Send</button>
    </div>
    </div>
  )
}

export default Component;
