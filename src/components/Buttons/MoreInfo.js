import React from 'react'
import {MdMovie} from 'react-icons/md'
export default function MoreInfo({id, type, handleItemClick}) {

    return (
        <button
        type="button"
        className="btn btn-secondary btn-lg mr-2 mt-4"
        onClick={()=> handleItemClick(`/${type}/${id}`)}
        >
            <h1>More info</h1>
        </button>
    )
}
