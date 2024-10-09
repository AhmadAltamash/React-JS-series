import { useState } from 'react'
import './App.css'
import bgImage from './assets/bg.jpg';
import {InputBox} from './components/index';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  

  return (
    <>
      <div className='flex justify-center items-center h-screen w-full m-0 p-0 box-border font-sans bg-cover bg-no-repeat bg-center' style={{
        backgroundImage: `url('${bgImage}')`
      }}>

          <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                           label="From"
                           amount={amount}
                           currencyOptions={options}
                           onCurrencyChange={setFrom} // Set 'from' currency
                           selectCurrency={from}
                           onAmountChange={setAmount} // Set amount
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={setTo} // Set 'to' currency
                          selectCurrency={to} // Set 'to' value here instead of 'from'
                          amountDisable
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
            </div>
          </div>

      </div>
    </>
  )
}

export default App
