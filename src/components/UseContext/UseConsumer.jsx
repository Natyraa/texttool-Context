import React , {useContext} from 'react'
import './style.css'
import { Context } from './UseCreateContext'
const UseConsumer = () => {
  const { txtValue , handleOnChange , handleUpperCase ,  handleLowerCase , handleCapitalize , handleReverseWords , handleReverseChars , handleClear , handleCopyText , handleCensure , oldWordVal , newWordVal ,  handleOldWordInput , handleNewWordInput , handleReplace ,  getRealTimeData , bgColor , textColor , handleBgColor , handleTextColor , textAreaRef } = useContext(Context)
  return (
    <div className='container' >
      <div className='left-section'>
        <button onClick={handleUpperCase}>UpperCase</button>
        <button onClick={handleLowerCase}>LowerCase</button>
        <button onClick={handleCapitalize}>Capitalize</button>
        <button onClick={handleReverseWords}>Reverse Words</button>
        <button onClick={handleReverseChars}>Reverse Chars</button>
        <button onClick={handleClear}>Clear Text</button>
        <button onClick={handleCopyText}>Copy Text</button>
        <button onClick={handleCensure}>Censure</button>
      </div>
      <div className='middle-section'>
      <div className='middle-upper-section'>
      <label>Bg :</label>
        <input type="color" value={bgColor} onChange={handleBgColor}></input>
        <label> Color :</label>
        <input type="color" value={textColor} onChange={handleTextColor}></input>
      </div>
      <div className='middle-middle-section'>
      <textarea cols={55} rows={11} value={txtValue} onChange={(e) => handleOnChange(e)} ref={textAreaRef} placeholder='Enter text here' style={{background: bgColor , color: textColor, fontSize: "14px"}}></textarea>
      </div>
      <div className='middle-bottom-section' >
        
          <input type="text" placeholder='Old Word' value={oldWordVal} onChange={(e) =>  handleOldWordInput(e)}></input>
          <span> to </span>
          <input type="text" placeholder='New-Word' value={newWordVal} onChange={(e) => handleNewWordInput(e)}></input>
          <button onClick={handleReplace}>Replace</button>
      </div>
   
      </div>
      <div className='right-section'>
         {getRealTimeData()}
      </div>
    </div>
  )
}

export default UseConsumer