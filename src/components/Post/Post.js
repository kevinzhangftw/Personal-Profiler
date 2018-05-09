import React from 'react'
import {Card, CardMedia, CardTitle} from 'material-ui/Card'

const Post = (props) => (
    <Card>
        <CardMedia>
            <img src={props.media} alt="" />
        </CardMedia>
    </Card>     
)

export default Post