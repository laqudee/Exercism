import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  text: string
}

export const ClipboardButton = ({ text, children = 'Copy', ...rest }: Props) => {

  const handleClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('Copied!')
    } catch (e: any) {
      toast.error(`Error: ${e.message}`)
      throw e
    }
  }

  return (
    <>
      <Toaster />
      <button onClick={handleClickCopy} {...rest}>
        {children}
      </button>
    </>
  )
}
