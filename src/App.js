import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, _setQuestions] = useState(data)
  return ( 
  <main className='container'>
    <h3>Questions and answers about login</h3>
    {questions.map(question => {
      return <SingleQuestion key={question.id} question={question}/>
    })}
  </main>
  );
}

export default App;