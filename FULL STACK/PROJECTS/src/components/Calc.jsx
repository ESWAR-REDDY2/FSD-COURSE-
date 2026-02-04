import { useState } from 'react'
import { evaluate } from 'mathjs'
import './Calc.css'

function Calc() {
  const [display, setDisplay] = useState('0')
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(evaluate(display).toString())
      } catch {
        setDisplay('Error')
      }
    } else if (value === 'C') {
      setDisplay('0')
    } else if (value === '+/-') {
      setDisplay((parseFloat(display) * -1).toString())
    } else if (value === '.') {
      if (!display.includes('.')) {
        setDisplay(display + '.')
      }
    } else {
      setDisplay(display === '0' ? value : display + value)
    }
  }

  return (
    <div className="app">
      <h2>Simple Calculator</h2>

      <div className={`calculator ${theme}`}>
        <div className="display">
          <span className="display-text">{display}</span>
          <button onClick={toggleTheme} className="theme-button">
            Dark Mode
          </button>
        </div>

        <div className="buttons">
          <button className="operator" onClick={() => handleButtonClick('C')}>C</button>
          <button className="operator" onClick={() => handleButtonClick('+/-')}>+/-</button>
          <button className="operator" onClick={() => handleButtonClick('%')}>%</button>
          <button className="operator" onClick={() => handleButtonClick('/')}>/</button>

          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button className="operator" onClick={() => handleButtonClick('*')}>*</button>

          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button className="operator" onClick={() => handleButtonClick('-')}>-</button>

          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button className="operator" onClick={() => handleButtonClick('+')}>+</button>

          <button className="zero" onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button className="equal" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calc;
