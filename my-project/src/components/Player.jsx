import spanishPlayers from "../players"



const Player = () => {
  // const name = spanishPlayers.map(player => player.name)
  // const club = spanishPlayers.map(player => player.clubTeam)
  // const number = spanishPlayers.map(player => player.jerseyNumber)
  // const age = spanishPlayers.map(player => player.age)


  
  return (
    <div className= 'flex gap-4 border-solid' >
        {spanishPlayers.map(player => (
        <div className='border-4 border-red-300 ml-4 text-center' key={player.name}> 
      
      {<img src={player.imageUrl} alt={`${player.name}'s Image`} />}
          
          <h2 className="font-bold">{player.name}</h2>

          <p>Club Team: {player.clubTeam}</p>
          
          <p>Jersey Number: {player.jerseyNumber}</p>
          
          <p>Age: {player.age}</p>
        </div>
      ))}
    </div>
  )
}

export default Player
