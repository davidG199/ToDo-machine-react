import React from "react";
// import {TiDeleteOutline} from "react-icons/ti"
import { MdOutlineDelete } from "react-icons/md";

const DeleteIcon = (props) => {
    const { className, onClick } = props
    return (
        <MdOutlineDelete
            className={className}
            onClick={onClick}
        />
    )
}

export { DeleteIcon };