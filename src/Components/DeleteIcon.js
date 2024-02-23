import React from "react";
import {TiDeleteOutline} from "react-icons/ti"

const DeleteIcon = (props) => {
    const { className, onClick } = props
    return (
        <TiDeleteOutline
            className={className}
            onClick={onClick}
        />
    )
}

export { DeleteIcon };