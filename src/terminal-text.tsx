import { useEffect } from 'react'
import { useTypingEffect } from './typing-effect'
import './index.css';

interface TerminalTextProps {
  text: string
  speed?: number
  onComplete?: () => void
}

export function TerminalText({ text, speed = 50, onComplete }: TerminalTextProps) {
  const { displayedText, isComplete } = useTypingEffect(text, speed)

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete()
    }
  }, [isComplete, onComplete])

  return <div className="font-mono whitespace-pre-line text-inherit">{displayedText}</div>
}

