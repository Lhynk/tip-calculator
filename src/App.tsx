import './App.css';

import { useEffect, useState } from 'react';

import { ReactComponent as Logo } from './assets/images/logo.svg';
import { Bill } from './components/Bill';
import { Persons } from './components/Persons';
import TipSelector from './components/TipSelector';
import { Total } from './components/Total';

function App() {
  const [tip, setTip] = useState<number>(0.1);
  const [bill, setBill] = useState<number>(0);
  const [persons, setPersons] = useState<number>(1);
  const [result, setResult] = useState({ totalPerPerson: 0, tipAmount: 0 });

  useEffect(() => {
    const tipAmount = (bill * tip) / persons;
    setResult({
      tipAmount,
      totalPerPerson: bill / persons + tipAmount,
    });
  }, [tip, bill, persons]);

  function reset() {
    setTip(0.1);
    setBill(0);
    setPersons(1);
  }

  return (
    <div className='calculator'>
      <Logo className='calculator__logo' />
      <div className='calculator__content'>
        <section className='calculator__section'>
          <Bill bill={bill} onChange={setBill} />
        </section>
        <section className='calculator__section'>
          <TipSelector tip={tip} onSelectTip={setTip} />
        </section>
        <section className='calculator__section'>
          <Persons persons={persons} onChange={setPersons} />
        </section>
        <section className='calculator__section'>
          <Total result={result} onReset={reset} />
        </section>
      </div>
    </div>
  );
}

export default App;
