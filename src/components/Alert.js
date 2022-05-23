import React from 'react'

function Alert(Props) {
  const capitilize=(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() +  lower.slice(1);
  }
  return (
    Props.alert && <div className={`alert alert-${Props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitilize(Props.alert.type)}</strong>:{Props.alert.message}
</div>
  )
}

export default Alert