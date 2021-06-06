import { useContext, useRef, useEffect } from 'react'
import { FormContext } from '../../contexts/Form'

export default function Input({ name }) {
  const inputRef = useRef()
  const { registerField } = useContext(FormContext)

  useEffect(() => {
    if (inputRef.current) {
      registerField(name, inputRef.current)
    }
  }, [name, registerField])

  return (
    <input name={name} ref={inputRef} />
  )
}
