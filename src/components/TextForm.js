import React, {useState} from 'react'
 
export default function TextForm(props) {
    const handleUppercase = () =>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case","Success!","success");
    }
    const handleLowercase = () =>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case","Success!","success");
    }
    const handleClearcase = () =>{
        let newText=' ';
        setText(newText)
        props.showAlert("Text cleared","Success!","danger");
    }
    const handleCopycase = () =>{
        let newText=document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied ","Success!","primary");
    }
    const handleRemovespacecase = () =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("White space has checked","success","primary");
        
    }
    const handleOnChange = (event) =>{   
        setText(event.target.value);
    }
     // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState('');
  
  
    return (
        <>
        <div className='container py-5'>
  <div className="form-group">
    <h1>{props.heading}</h1>
    <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows="5"></textarea>
  </div>
  
  <button className="btn btn-primary mr-2"  onClick={handleUppercase}>Convert to Uppercase</button>
  <button className="btn btn-primary ml-2"  onClick={handleLowercase}>Convert to Lowercase</button>
  <button className="btn btn-primary ml-2"  onClick={handleClearcase}>Clear text</button>
  <button className="btn btn-primary ml-2"  onClick={handleCopycase}>Copy text</button>
  <button className="btn btn-primary ml-2"  onClick={handleRemovespacecase}>Remove Extra Space</button>
 
            
        </div>
        <div className='container'>
            <h1>Text Summary</h1>
            <p> {text.split(" ").length} words and {text.length} character</p>
            <p> {0.008* text.split(" ").length} Minutes to read for average reader</p>
            <h2>Preview</h2>
            <textarea className='form-control'  value={text} id='myBox' rows="5"></textarea>
        </div>
        </>
    )
}
