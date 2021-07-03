
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React,{ useEffect, useState,useReducer } from 'react';
import Team from './Team';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function App() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
      fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
          .then(res => res.json())
          .then(data => setTeams(data.teams))
  }, [])
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);
  return (
      <Container>
        <Typography gutterBottom variant="h3" style={{textAlign:"center"}}>
                    useState , useEffect ,useReducer
                    </Typography>
                    {sum}
<br/>
      <Button variant="contained" color="primary" onClick={() => dispatch(100)}>
        Add 100
      </Button>
      <Grid container spacing={3}>
      {
                  teams.map(team => <Team team={team}></Team>)
              }
      </Grid>  
         
      </Container>
  );
}

export default App;
