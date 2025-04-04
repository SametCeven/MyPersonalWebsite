import "./SliderCheckbox.css"

export default function SliderCheckbox({text,value,handleValue}){

    return(
        <div className="flex gap-1 items-center">
                <label className="switch flex items-center">
                    <input
                        type="checkbox"
                        onChange={handleValue}
                        className="checkbox"
                        checked={value ? true : false}
                    ></input>
                    <span className="slider"></span>
                    <h1 className="font-semibold"> {text} </h1>
                </label>
            </div>
    )
    
}