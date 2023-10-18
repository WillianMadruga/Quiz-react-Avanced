import { Question } from "@/app/types/Questions"
import { useState } from "react";

type Props = {
  question: Question,
  count: number,
  onAnswer: (answer: number) => void;
}


export const QuestionItem = ({question, count, onAnswer }: Props) => {

const [selectAnswer, setSelectAnswer] = useState<number | null>(null);

const checckQuestion = (key: number) => {
  if(selectAnswer === null){
    setSelectAnswer(key);

    setTimeout(() => {
      onAnswer(key)
      setSelectAnswer(null);
    }, 1000);
    
  }
};

  return (
    <div>
      <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
      <div className="">
        {question.options.map((item, key) => (
        
        <div
         key={key}
         onClick={() => checckQuestion(key)}
        className={`text-lg border border-blue-500 bg-blue-300 py-3 px-4 mb-4 rounded-md 
        
        ${selectAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
        ${selectAnswer !== null && selectAnswer === question.answer && selectAnswer === key && 'cursor-auto border-green,HYM-500 bg-green-500' }
        ${selectAnswer !== null && selectAnswer !== question.answer && selectAnswer === key && 'cursor-auto border-red-500 bg-red-500' }
        
        `}
        
        >{item}</div>
        
        ))}
      </div>

    </div>
  )
}