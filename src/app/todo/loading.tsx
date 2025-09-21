import React from 'react'

type Props = {}

function loading({ }: Props) {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <span className="loading loading-spinner text-error loading-xl"></span>
        </div>
    )
}

export default loading