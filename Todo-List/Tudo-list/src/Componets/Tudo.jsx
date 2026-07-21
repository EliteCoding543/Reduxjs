import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {AddTudo, deleteTudo} from '../Utlis/Store'
import { MdDeleteOutline } from "react-icons/md";

const Tudo = () => {
    // Set TextState
    const [text, setText] = useState("")
     const dispatch = useDispatch();

     const tudo = useSelector((state) => state.tudo);

    // BTN Click Handle fn 
    const handleAddClick = () => {
        if(text.trim() === "") return;

        dispatch(AddTudo(text));
        setText("");
    };

  return (
    <div className=' bg-white w-1/2 h-80 p-6 rounded-2xl'>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} className="px-2 border border-blue-800  h-10 w-full rounded-xl delay-200 focus:outline-none focus:ring-0" type="text" placeholder="Add text..." 
        />
        <div onClick={handleAddClick} className='flex justify-end m-3'>
            <button className='bg-linear-to-r from-violet-600 to-indigo-600 text-white font-bold px-6 py-2 rounded-xl '>Add</button>
        </div>
      </div>


      {/* Todo List */}

      <div>
        {
            tudo.length === 0 ? (
                <p className='text-red-500 text-center font-bold text-3xl p-2 animate-bounce text-shadow-lg/30'>No Tudo Found</p>
            )
            : (
                tudo.map((item) => (
                    <div className='flex justify-between items-center border p-2 rounded-xl mb-3'
                     key={item.id}>
                        <p>{item.text}</p>
                        <button
                            onClick={() => dispatch(deleteTudo(item.id))}
                            className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600"
                            >
                            <MdDeleteOutline size={20} />
                        </button>
                    </div>
                ))
            )
        }
      </div>
    </div>
  )
}

export default Tudo
