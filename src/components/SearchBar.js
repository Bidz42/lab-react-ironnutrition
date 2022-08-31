import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({searchHandler}) {
  //state for characters in search
  const [character, setCharacter] = useState('');
  //handle search using target values passed onto argument given to search
  //and also the state update  
  const handleSearch = (event) => {
    setCharacter(event.target.value);
    searchHandler(event.target.value);
  };

  return (

    <div>
      
        <Divider>Search</Divider>
        <Input
          value={character}
          type="text"
          onChange={handleSearch}
          placeholder="Search for foods"
        />
    
    </div>
  );
}

export default Search;