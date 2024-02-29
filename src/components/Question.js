import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard'

function Question() {
    const questions = useOutletContext()

    const renderQuestion = questions.map((question) => <QuestionCard key={question.id} {...question} />)

    return(
        <div>
            <h1>Questions</h1>
            <div>
                {renderQuestion}
            </div>
        </div>
    )
}

export default Question