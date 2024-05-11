import React, {useId} from "react";
function Select({
    options,
    label,
    classname="",
    ...props
},ref) {
    const id = useId();
    return (
        <div className='w-full' >
           { label && <label htmlFor={id} className=""></label>}
           <select
           {...props}
           id={id}
           ref={ref}
           className={``}
           >
            {options?.map((option)=>{
            <options key={option} value={option}>
                    {option}
                </options>
            })}
           </select>
        </div>
    )
}
export default React.forwardRef(Select);