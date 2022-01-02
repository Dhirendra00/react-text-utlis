import React from 'react'

function Alert(props) {
    
    return (
        props.alert && <div class={`alert alert-${props.alert.color} alert-dismissible fade show text-center`} role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.msg}
      </div>
    )
}

export default Alert
