import { useState } from 'react'
import './App.css'
import max from './assets/max.jpg'
import InputParameters from './components/InputParameters/InputParameters'
import { skipperModels } from './constants/skipper'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [sigmaB, setSigmaB] = useState("")
  const [sigmaF, setSigmaF] = useState("")
  const [bsigma, setBsigma] = useState("")
  const [sigma1, setSigma1] = useState("")
  const [mysigma, setMysigma] = useState("")
  const [tauB, setTauB] = useState("")
  const [tauF, setTauF] = useState("")
  const [btau, setBtau] = useState("")
  const [tau1, setTau1] = useState("")
  const [mytau, setMytau] = useState("")

  const [select, setSelect] = useState("modelMarin")


  return (
    <>
      <div>
        <a href="https://vk.com/idjetmax" target="_blank">
          <img src={max} className="logo react max" alt="React logo" />
        </a>
      </div>
      <h1>Программа</h1>
      <select name="select" value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="modelMarin" selected>Модель Марина</option>
        <option value="modelCrossland">Модель Кроссланда</option>
        <option value="modelCrossland+">Модель Кроссланда+</option>
        <option value="modelSains">Модель Сайнса</option>
        <option value="modelYancin">Модель Янкина</option>
      </select>
      <div className="inputcontainer">
        {skipperModels.get(select)?.sigmaB && <InputParameters value={sigmaB} setValue={setSigmaB} title='sigmaB' />}
        {skipperModels.get(select)?.sigmaF && <InputParameters value={sigmaF} setValue={setSigmaF} title='sigmaF' />}
        {skipperModels.get(select)?.bsigma && <InputParameters value={bsigma} setValue={setBsigma} title='bsigma' />}
        {skipperModels.get(select)?.sigma1 && <InputParameters value={sigma1} setValue={setSigma1} title='sigma1' />}
        {skipperModels.get(select)?.mysigma && <InputParameters value={mysigma} setValue={setMysigma} title='mysigma' />}
        {skipperModels.get(select)?.tauB && <InputParameters value={tauB} setValue={setTauB} title='tauB' />}
        {skipperModels.get(select)?.tauF && <InputParameters value={tauF} setValue={setTauF} title='tauF' />}
        {skipperModels.get(select)?.btau && <InputParameters value={btau} setValue={setBtau} title='btau' />}
        {skipperModels.get(select)?.tau1 && <InputParameters value={tau1} setValue={setTau1} title='tau1' />}
        {skipperModels.get(select)?.mytau && <InputParameters value={mytau} setValue={setMytau} title='mytau' />}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          {count1}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
