import React from 'react'
export default function MoreInfo({id, type, handleItemClick}) {

    return (
        <button
        type="button"
        className="btn btn-secondary btn-lg mr-2 mt-4"
        onClick={()=> handleItemClick(`/${type}/${id}`)}
        >
            More info
        </button>
    )
}
