import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

export const LessonCard = () => {
  return (
    <Card
      sx={{
        width: 350,
      }}
    >
      <CardMedia
        height="150"
        component="img"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Başlığım
        </Typography>
        <Typography variant="body2" component="p">
          Başlığım Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minus consectetur voluptatibus nam architecto debitis repudiandae ipsa
          aperiam labore in deserunt eum enim, est non. Ipsa fuga ex
          consequuntur iure ut?
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">Temizle</Button>
        <Button>Kaydet</Button>
      </CardActions>
    </Card>
  );
};
