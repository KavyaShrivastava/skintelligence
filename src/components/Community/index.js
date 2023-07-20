//import React, { useEffect, useState } from 'react';
import {Input, Button, Display, CommH1} from './CommunityElements'
import { json } from 'react-router-dom';
//import './Community.css';


import React, { useState } from 'react';

// export function Question(props) {
//   const [showAnswerForm, setShowAnswerForm] = useState(false);
//   const [answers, setAnswers] = useState([]);

//   function addAnswer(answer) {
//     setAnswers([...answers, answer]);
//   }
  
//   return (
//     <div>
//       <h3>{props.questionText}</h3>
//       <button onClick={() => setShowAnswerForm(true)}>Add answer</button>
//       {showAnswerForm && <AnswerForm onSubmit={addAnswer} />}
//       <div>
//         {answers.map((answer) => (
//           <div key={answer.id}>
//             <p>{answer.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export function AnswerForm(props) {
//   const [answerText, setAnswerText] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     const answer = {
//       id: Date.now(),
//       text: answerText,
//     };
//     props.onSubmit(answer);
//     setAnswerText('');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={answerText} onChange={(e) => setAnswerText(e.target.value)} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }


// const Question = () => {

//   const [post_content, setPostContent] = useState('');
//   const [posts, setPosts] = useState([]);

//   const [showAnswerForm, setShowAnswerForm] = useState(false);
//   const [answers, setAnswers] = useState([]);

//   const handleInputChange = (event) => {
//     setPostContent(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     const requestBody = JSON.stringify({post_content });
//     const response = await fetch('http://127.0.0.1:5000/add_post', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ post_content }),
//     });
//     console.log(JSON.stringify({ post_content }))
//     const data = await response.json();
//     console.log(JSON.stringify(data))
//     setPosts(data); 
//     setPostContent("");
//   };

//   useEffect(()=> {const getData = async () => {
//     const requestBody = JSON.stringify({post_content });
//     const response = await fetch('http://127.0.0.1:5000/add_post', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ post_content }),
//     });
//     const data = await response.json();
//     setPosts(data);}
//     getData();},[])

