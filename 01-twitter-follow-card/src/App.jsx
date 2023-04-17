import data from "./data";
import Card from "./Card";

function App() {  

  return (
    <div className='container-app'>
      <div className="container-cards">
        {
          data.map(item => (
            <Card key={item.user} user={item.user} name={item.name} isFollow={item.isFollow}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
