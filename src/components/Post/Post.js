import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
// import static images from the image folder
import img1 from '../../images/winningTeam.jpg'

const Post = () => (
    <Card>
        <CardMedia>
            <img src={img1} alt="" />
        </CardMedia>
    </Card> 
);

export default Post;