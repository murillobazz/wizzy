import Header from './components/Header'
import Welcome from './components/Welcome'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto p-3 max-w-screen-md flex flex-col justify-center">
        <Welcome username={'Murillo'} greetings={'Got your spellbook ready?'}/>
        <Card />
      </div>
    </div>
  )
}

export default App
