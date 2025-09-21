import React from 'react'

function loading() {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <span className="loading loading-spinner text-error loading-xl"></span>
        </div>
    )
}

export default loading