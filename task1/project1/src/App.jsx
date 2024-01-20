
import './App.css'
import Card from './Component/card'

function App() {
  let data = [{
    cardtitle: "React vite",
    button: "Download",
    color:"red",
    id:0
  },
{
  cardtitle:"Hello JavaScript",
  button: 'Add to cart',
  color: "green",
  id:1
},
{
  cardtitle: "Phyton for Data Science and Machine Learing Bootcamp",
  button: 'Add to cart',
  color: "yellow",
  id:2
}]

  return (
    <div className='card_parent'>
      <>
    {
      data.map((item) => {
       return <Card cardtitle={item.cardtitle} button={item.button} color={item.color} key={item.id} />
        
      })
       
    }
    
    </>
    </div>
    
  )
}

export default App
