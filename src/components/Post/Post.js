import React from 'react'
import {Card, CardMedia, CardTitle, CardText, CardHeader, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const Post = (props) => 
    <Card>
        {/* <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      showExpandableButton={true}
        /> */}
        <CardMedia>
            <img src={props.media} alt="" />
        </CardMedia>
        <CardTitle title="Card title" showExpandableButton={true}/>
        <CardText expandable={true}>
            Yo here is some text 
        </CardText>
        {/* <CardActions>
            <FlatButton label="Give" />
        </CardActions> */}
    </Card>     


export default Post