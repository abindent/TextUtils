import React, {useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('')
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const handleUppercaseChange = ()=>{
        let uptext = text.toUpperCase()
        setText(uptext)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLowercaseChange = ()=>{
        let lowertext = text.toLowerCase()
        setText(lowertext)
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleClearText = ()=>{
        setText("")
        props.showAlert("Text cleared!", "success")
    }
    const handleExtraSpaceRemover = ()=>{
        let trimtext = text.replace(/\s+/g, " ");;
        setText(trimtext)        
        props.showAlert("Extra spaces removed", "success")
    }
      
    const handleCopyText = ()=>{
      /* Copy the text inside the text field */
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")
    }

    return (
        <div>
            <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea placeholder="Enter Your Text Here" value={text} onChange={handleOnchange} name="area" id="myBox" cols="12" rows="10" className="form-control" ></textarea>
            </div>
            <button className="btn btn-primary ms-2" onClick={handleUppercaseChange}>Change To Uppercase</button>
            <button className="btn btn-primary ms-2" onClick={handleLowercaseChange}>Change To Lowercase</button>
            <button className="btn btn-primary ms-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary ms-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary ms-2" onClick={handleExtraSpaceRemover}>Remove Extra Spaces</button>
            {/* <button className="btn btn-primary ms-2" onClick={ManageText}>Remove Digits</button> */}
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text in the textbox for the preview"}</p>
        </div>
        </div>
    )
}

export default TextForm

