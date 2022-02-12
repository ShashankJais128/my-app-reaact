import React, {useState} from 'react';


export default function TextForms(props) {
    const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toLocaleUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase.", "success");
    }

    const handleDownClick = () => {
        // console.log("uppercase was clicked");
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase.", "success");
        }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState(' ');  //text 
    // setText('new text');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to uppercase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleDownClick}>Convert to uppercase</button>
            </div>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(' ').length-1} words and {text.length} characters</p>
            <p>{0.008 * (text.split(' ').length-1)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text above in the text-box to preview it here."}</p>
        </div>
        </>
    )
}
