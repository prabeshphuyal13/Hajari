import { useState } from 'react'
import NewRound from './NewRound'
import InputScore from './InputScore'

function totalSum (list){
  return list.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function App() {

  const [players, setPlayers] = useState (([
    {name: "player1", score: [0]},
    {name: "player2", score: [0]},
    {name: "player3", score: [0]},
    {name: "player4", score: [0]},
  ]));
  
  const [rounds, setRounds] = useState([])
  const [newScore, setNewScore] = useState([0,0,0,0])
  
  const addRound = (newScore) => {
    
    setRounds([...rounds, rounds.length + 1]);
    setPlayers(prePlayers => 
      prePlayers.map((player, index)=>({
      ...player,
      score: [...player.score, newScore[index]?? 0]

    })))
    setNewScore([0,0,0,0])
  }

  const handleInput = (playerIndex, scoreValue) => {
    setNewScore(prevScore => {
        const updated = [...prevScore];
        updated[playerIndex] = scoreValue;
        return updated;
    });
  }

  const handleNameChange = (playerIndex, newName) => {
    setPlayers(prevPlayers => 
      prevPlayers.map((player, index) => 
        index === playerIndex ? { ...player, name: newName } : player
      )
    );
  }

  return (
    <div className='container'>
      <div className="title"><h1>HAJARI SCORE CARD</h1></div>
      <div className='heading-row row'>
        <input 
          type="text" 
          value={players[0].name} 
          onChange={(e) => handleNameChange(0, e.target.value)}
        />
        <input 
          type="text" 
          value={players[1].name} 
          onChange={(e) => handleNameChange(1, e.target.value)}
        />
        <input 
          type="text" 
          value={players[2].name} 
          onChange={(e) => handleNameChange(2, e.target.value)}
        />
        <input 
          type="text" 
          value={players[3].name} 
          onChange={(e) => handleNameChange(3, e.target.value)}
        />
      </div>

      <div className="mid-rows">
        {
          rounds.map((round)=>{
            return <NewRound key = {round} roundNo = {round} 
            p1 = {players[0].score[round]}
            p2 = {players[1].score[round]}
            p3 = {players[2].score[round]}
            p4 = {players[3].score[round]}
            />
          }) 
        }
      </div>
      
      <InputScore passScore={handleInput} scores={newScore}/>
      
      <div className="last-row row">
        <span>{totalSum(players[0].score)}</span>
        <span>{totalSum(players[1].score)}</span>
        <span>{totalSum(players[2].score)}</span>
        <span>{totalSum(players[3].score)}</span>
      </div>
      
      <button className="add-row" onClick={()=> addRound(newScore)} >Add Round</button>

    </div>
  )
}

export default App
