import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({ watchTime }) => {

    const [time, setTime] = useState(watchTime)
    const [breakTime, setBreakTime] = useState(0)
    useEffect(() => {
        const getWatchTime = localStorage.getItem('watchTime')
        setTime(getWatchTime);
        const getBreakTime = localStorage.getItem('breakTime')
        setBreakTime(getBreakTime)
    }, [watchTime])

    const handleBreakTime = (bt) => {
        localStorage.setItem('breakTime', bt)
        setBreakTime(bt)
    }

    const handleComplete = () => {
        toast("Wow so easy!");
    }

    return (
        <div>
            <h1 className='text-center mt-5'>My Cart</h1>
            <div className="mt-5 text-center">
                <p>Total Watch Time</p>
                <input type="text" value={time} disabled />
            </div>
            <h5 className='text-center mt-5'>Add Break Time</h5>
            <div className='text-center'>
                <button onClick={() => handleBreakTime(15)} className="btn btn-info w-25 m-1 btn-circle">15</button>
                <button onClick={() => handleBreakTime(20)} className="btn btn-warning w-25 btn-circle">20</button>
                <button onClick={() => handleBreakTime(25)} className="btn btn-danger w-25 m-1 btn-circle">25</button>
            </div>

            <div className='text-center'>
                <input className='p-2 mt-4' type="text" value={breakTime} disabled />
                <button onClick={handleComplete} className="btn btn-primary mt-5 w-100">Complete</button>
            </div>
        </div>
    );
};

export default SideCart;