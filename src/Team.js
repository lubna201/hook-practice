import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
// import { Button } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Team = (props) => {
    const { strTeam, strDescriptionEN, strTeamBadge } = props.team;
    // let history = useHistory();
    // const handleClick = (teamId) => {
    //     history.push(`/team/${teamId}`);
    // }
    console.log(props.team);
    return (
        <Grid item xs={12} sm={6}>
            {
                <Card className="j">
                <CardActionArea>
                <img src={strTeamBadge} alt="" className="im" style={{width:"100%"}}/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {strTeam}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {strDescriptionEN}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            }
        </Grid>
    );
};

export default Team;