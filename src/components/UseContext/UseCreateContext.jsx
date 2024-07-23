import React , {createContext , useState , useEffect , useRef} from 'react'
export const Context = createContext()
const UseCreateContext = ({children}) => {
  const [txtValue , setTxtValue] = useState('')
  const [oldWordVal , setOldWordVal] = useState('');
  const [newWordVal , setNewWordVal] = useState('');
  const [bgColor , setBgColor] = useState('#ffffff')
  const [textColor , setTextColor] = useState('#000000')
  const textAreaRef = useRef(null)
  const handleOnChange = (e) => {
    setTxtValue(e.target.value)
  }
  const handleUpperCase = () => {
    setTxtValue(txtValue.toUpperCase())
    console.log(txtValue.toUpperCase());

  }
  const handleLowerCase = () => {
    setTxtValue(txtValue.toLowerCase())
  }
  const handleCapitalize = () => {
    setTxtValue(txtValue.split(' ').map((word) => word.slice(0 , 1).toUpperCase() + word.slice(1)).join(' '))
  }
  const handleReverseWords = () => {
    setTxtValue(txtValue.split(' ').reverse().join(' '))
  }
  const handleReverseChars = () => {
    setTxtValue(txtValue.split('').reverse().join(''))
  }
  const handleClear = () => setTxtValue('')
  const handleCopyText = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select()
      document.execCommand('copy')
      console.log('Text copied to clipboard');
    }
  }
  const handleCensure = () => {
    const censuredWords = ['javascript' , 'react' , 'html' , 'mississipi']
    setTxtValue(
      txtValue.split(' ').map((word) => {
        const lowerCaseWord = word.toLowerCase(); 
        return censuredWords.includes(lowerCaseWord)
          ? word.charAt(0) + '*'.repeat(word.length - 1) 
          : word; 
      }).join(' ')
    );
  }
  const handleNewWordInput = (e) => {
    setNewWordVal(e.target.value)
  }
  const handleOldWordInput = (e) => {
    setOldWordVal(e.target.value)
  }
  const handleReplace = () => {
    setTxtValue(txtValue.split(' ').map((word) => word.toLowerCase() === oldWordVal ? newWordVal : word).join(' '))
  }
  const getRealTimeData = () => {
    const lettersRegex = /[A-Za-z]/;
    const sentenceRegex =  /[A-Za-z][^.!?]*[.!?]/g;
    const specialCharRegex =  /[^A-Za-z0-9\s]/;
    const mostFrequentChar = () => {
      const charCount = {};
      const text = txtValue.toLowerCase();
      text.split('').forEach(char => {
        if (charCount[char]) {
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
      });
      let maxCount = 0;
      let mostFrequentChar = '';
      Object.keys(charCount).forEach(char => {
        if (charCount[char] > maxCount) {
          maxCount = charCount[char];
          mostFrequentChar = char;
        }
      });
  
      return mostFrequentChar;
    }
    const mostFrequentWord = () => {
      const wordCount = {};
      const text = txtValue.toLowerCase().trim();
      text.split(' ').forEach(word => {
        if (wordCount[word]) {
          wordCount[word]++;
        } else {
          wordCount[word] = 1;
        }
      });
      let maxCount = 0;
      let mostFrequentWord = '';
      Object.keys(wordCount).forEach(word => {
        if (wordCount[word] > maxCount) {
          maxCount = wordCount[word];
          mostFrequentWord = word;
        }
      });
  
      return mostFrequentWord;
    }
  
   
    return (  <div>
      <p>Words: {txtValue.trim().split(' ').length}</p>
      <p>Characters: {txtValue.split('').length}</p>
      <p>Numbers: {txtValue.split('').filter((c) => !isNaN(parseInt(c))).length}</p>
      <p>Letters: {txtValue.split('').filter((letter) => lettersRegex.test(letter.trim())).length}</p>
      <p>Sentences: {txtValue.match(sentenceRegex)?.length }</p>
      <p>Special Characters:  {txtValue.split('').filter((letter) => specialCharRegex.test(letter)).length}</p>
      <p>Most Frequent Char: {mostFrequentChar()}</p>
      <p>Most Frequent Word: {mostFrequentWord()}</p>
    </div>)
    
   }
 useEffect(() => {
    console.log('it is working');
   getRealTimeData()
 }, [txtValue])
  const handleBgColor = (e) => {
      setBgColor(e.target.value)
  }
  const handleTextColor = (e) => {
    setTextColor(e.target.value)
  }
  return (
    <Context.Provider value={{ txtValue,handleOnChange , handleUpperCase , handleLowerCase , handleCapitalize , handleReverseWords , handleReverseChars , handleClear , handleCopyText , handleCensure , oldWordVal ,newWordVal , handleOldWordInput , handleNewWordInput , handleReplace ,getRealTimeData , bgColor , textColor , handleBgColor , handleTextColor , textAreaRef }}>{children}</Context.Provider>
  )
}

export default UseCreateContext