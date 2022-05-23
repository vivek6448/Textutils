import React, {useState} from 'react'

export default function TextForm(Props) {
    const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+ text);
    let newText= text.toUpperCase();
    setText(newText)
    Props.showAlert("Converted to uppercase", "success");
  }
  const handleLoClick = ()=>{
    console.log("lowercase was clicked"+ text);
    let newText= text.toLowerCase();
    setText(newText)
    Props.showAlert("Converted to lowercase", "success");
  }
    const handleClearClick = ()=>{
      console.log("Uppercase was clicked"+ text);
      let newText= '';
      setText(newText)
      Props.showAlert("Cleared text", "success");
  }

    const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  function handleCopyClick(){
    navigator.clipboard.writeText(text);
    
}
  const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))

}

  const [text, setText] = useState('');
  return (
    <>
    <div>
  <div className="mb-3" style={{color: Props.mode==='dark'? 'white':'#060617'}}>
        <h1>{Props.heading}</h1>
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: Props.mode==='dark'? 'grey':'white',color: Props.mode==='dark'? 'white':'#060617'}} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert into UpperCase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert into LowerCase</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopyClick} >Copy Text </button>
  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
  </div>
  <div className="container my-3" style={{color: Props.mode==='dark'? 'white':'#060617'}}>
    <h1>Summary</h1>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008*text.split(" ").length} Minutes</p>
    <h2>Preview</h2>
    <p>{text.length>0?text: "Enter the text into the textboc above to preview it here"}</p>
  </div>
</>
  )
}
