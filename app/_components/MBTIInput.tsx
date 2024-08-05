'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function MBTIInput() {
  const [input, setInput] = useState<string>('')
  const router = useRouter()

  const getOutput = () => {
    if (input === 'ENFJ') router.push(`/mbti/result/ENFJ`)
  }

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => getOutput()}>Confirm</button>
    </>
  )
}
