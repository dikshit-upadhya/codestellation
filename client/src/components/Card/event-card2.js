import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function EventCard2(props) {
    return (
        <Card sx={{ maxWidth: 345 }} elevation={10}>
            <CardActionArea onClick={props.onClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.imageUrl}
                    alt={props.imageAlt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div">
                        {props.subHeader}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See Details</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}