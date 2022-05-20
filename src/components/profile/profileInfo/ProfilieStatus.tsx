import React, {ChangeEvent, useState} from 'react';

const ProfilieStatus= (props:any)=> {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)


     const activateEditMode =()=>{
        setEditMode(true)
    }
    const deactivateEditMode =()=>{
        setEditMode(false)
        props.updateStatus(status)
    }

    const  onStatusChange =(e:ChangeEvent<HTMLInputElement>)=>{
       setStatus(e.currentTarget.value)
    }

        return (
                <div>{editMode?
                    <div><input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode}/></div>:
                    <div><span onDoubleClick={activateEditMode}>{status?status:"No status"}</span></div>
                }</div>
        );

};

export default ProfilieStatus;