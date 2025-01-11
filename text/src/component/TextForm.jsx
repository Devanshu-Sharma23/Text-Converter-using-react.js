import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =() =>{
    console.log("you on clicked" + text);
         let newText =text.toUpperCase();
    setText(newText);
  }
  const handleLoClick =() =>{
    console.log("you on clicked" + text);
         let newText =text.toLowerCase();
    setText(newText);
  }
  const handleonchange= (event) =>{
    console.log("you on onchange "); 
    setText(event.target.value);
    
  
  }
  
  const handleClear =() =>{
         let newText =''
    setText(newText)
  }
  
  
  const [text,setText] = useState('');
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
<div className="mb-8">

  <textarea className="form-control" value={text}  onChange={handleonchange}  id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2"   onClick={handleUpClick}  type="submit">uppercase</button>
<button className="btn btn-primary mx-2"   onClick={handleLoClick}  type="submit">lowercase</button>
<button className="btn btn-primary mx-2"   onClick={handleClear}  type="submit">clear text</button>
    </div>
    <div className="conteiner">
      <h1>your text summary</h1>
      <p>{text.split("").length} word and {text.length} characters</p>
      <p>{0.008 *text.split("").length}  mintus read</p>
      <h3>preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
