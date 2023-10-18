import { Question } from "@/app/types/Questions";

type Props= {
  questions: Question[];
  answers: number[];
}

export const Results = ({questions, answers}: Props) => {
  return(
    <div>{questions.map((item, key) => (

      <div key={key} className="mb=3">
        <div className="font-bold">{key + 1}. {item.question}</div>
        <div>
          <span className="mx-1 font-bold">({item.answer === answers[key] ? 'Acerto' : 'Errou'})</span>
          {item.options[item.answer]}
        </div>
      </div>

    ))}
    </div>
  )
};