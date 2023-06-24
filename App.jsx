import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai'
import './App.css';

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(res.data.data[0].url);
  }
  return <div className="app-main">
    <h3>Generate an Image By Using OpenAI API</h3>
    <input className="app-input" 
    placeholder="Type the description for Image..."
    onChange={(e) => setPrompt(e.target.value)}/>
    <button onClick={generateImage}>Generate the Image Bitch</button>
    {result.length>0 ? <img className="result-image" src={result} alt="" /> : <></>}
  </div>;
  
}

export default App;
