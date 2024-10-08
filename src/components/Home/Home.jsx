import React, {useContext, useEffect} from 'react'
import GameContext from '../../contexts/game/GameContext';
import Games from './GameList';

export const Home = () => {

  const { games, getGames } = useContext(GameContext);

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div>
      <div>
        <Games 
          games={games} 
        />
      </div>
    </div>
  );
}

export default Home;