import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import React, { useState } from 'react'

export default function Example() {
  const [inputText, setInputText] = useState('')
  const [copyToClipboard, copyResult] = useCopyToClipboard();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleClickCopy = () => {
    copyToClipboard(inputText)
  }
  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', display: 'flex' }}>
      <input style={{ width: '200px' }} type="text" value={inputText} onChange={handleChangeInput} />
      <button onClick={handleClickCopy}>Copy to clipboard</button>
      <div>
        {copyResult?.state === 'success' && <p>Copied successfully!</p>}
        {copyResult?.state === 'error' && <p>Error: {copyResult.message}</p>}
      </div>
    </div>
  )
}
