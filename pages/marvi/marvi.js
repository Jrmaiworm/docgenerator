import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: inputMessage,
      temperature: 0.5,
      max_tokens: 600,
      top_p: 0.3,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
    });
    const newMessage = {
      text: response.data.choices[0].text,
      author: "Jorge Sábio",
    };
    setMessages([...messages, newMessage]);
    setInputMessage("");
    if (messages.length >= 5) {
        setMessages(messages.slice(messages.length - 4, messages.length));
      }
    
  }

  function handleInputChange(event) {
    setInputMessage(event.target.value);
  }

  function handleClearChat() {
    setMessages([]);
  }

  return (
    <div style={{padding:'10px'}}>
        <h2>Faça uma pergunta</h2>
        <div>
        <ul style={{ whiteSpace: "pre-wrap" }}>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.author}: </strong>
            {message.text}
          </li>
        ))}
      </ul>
        </div>
     
      <form onSubmit={handleSubmit}>
        <div style={{padding:'10px'}}>
        <input type="text" value={inputMessage} onChange={handleInputChange} />
        <button style={{marginLeft:"10px"}} type="submit">Enviar</button>
       
        
        <button style={{marginLeft:"10px"}} type="button" onClick={handleClearChat}>Limpar</button>
        </div>
      
      </form>
    </div>
  );
}

export default Chatbot;