'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div style={{
        textAlign:"center"
    }}>
      <h1>please Check your Internet !</h1>
      <button style={{
        display:"block",
        padding:"10px"
      }}
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}