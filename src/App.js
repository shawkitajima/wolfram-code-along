import React, {useState, useEffect} from 'react';
import questionService from './utils/questionService';
import './App.css';

import Question from './components/Question/Question';

function App() {
  const [log, setLog] = useState([]);
  const [question, setQuestion] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    questionService.index().then(res => setLog(res.reverse()));
  }, []);

  const handleSubmit = () => {
    questionService.create(question).then(res => {
      if (res.error) {
        setError('there was an error with your question');
      } else {
        setLog([...[res], ...log]);
      }
      setQuestion('');
    });
  }

  return (
    <div className="App">
      <h1>The Wolfram Alpha Log of Questions!</h1>
      <h2>Feel free to add a question and see if Wolfram can answer</h2>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <div className="flexHori">
        <input value={question} onChange={(evt) => {
            setQuestion(evt.target.value)
            setError(null);
          }} />
        <div className="button" onClick={handleSubmit}>Ask!</div>
      </div>
      {log.map((question, idx) => <Question key={idx} question={question} />)}
    </div>
  );
}

export default App;
