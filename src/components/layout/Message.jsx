import { useEffect } from 'react'
import { useState } from 'react'

export default function Message({ type, msg }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [msg])

  return <div className="text-green-400 bg-green-700 max-w-[200px] px-4">{visible && <span>{msg}</span>}</div>
}
