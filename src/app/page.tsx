"use client"

import { QuestionItem } from '@/components/QuestionItem'
import { questions } from './data/questions'
import { useState } from 'react'
import { Results } from '@/components/Results'



export default function Home() {

const [showResult, setShowResult] = useState(Boolean)
const [answers, setAnswers] = useState<number[]>([]);
const [currentQuestion, setCurrentQuestion] = useState(0)
const title = 'Quiz de Culinária'
const loadNextQuestion = () => {
  if(questions[currentQuestion + 1]) {
    setCurrentQuestion(currentQuestion + 1)
  }else{
    setShowResult(true);
  }
}

const handleAnswered = (answer: number) => {
  setAnswers([...answers, answer]);
  loadNextQuestion()
}
const handleRestartButton = () => {
  setAnswers([]);
  setCurrentQuestion(0);
  setShowResult(false);
}

  return (
    <div className='h-screen w-full bg-blue-500 flex justify-center items-center'>
      <div className='w-full max-w-xl bg-white rounded-md shadow-md shadow-black'>
        <div className='p-2 font-bold text-3xl border border-gray-300'>
          {title}
        </div>
        <div className='p-3'>
        {!showResult &&

          <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />}
          {showResult &&
            <Results questions={questions} answers={answers}/>
          }

        </div>
        
        <div className='p-3 text-center border-t border-gray-300'>
          {!showResult && `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult && 
            <button onClick={handleRestartButton} className=' border border-blue-300 bg-blue-300 rounded-md mx-2 p-2 font-bold hover:bg-green-300 '>Reiniciar o Quiz</button>
          }
        </div>
      </div>
    </div>
  )
}
