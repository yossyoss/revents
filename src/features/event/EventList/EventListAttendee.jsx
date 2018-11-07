import React, { Component } from 'react'
import { Image, List } from "semantic-ui-react";
class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image as='a' size='mini' circular src='http://randomuser.me/api/portraits/women/42.jpg'/>
      </List.Item>
    )
  }
}
export default EventListAttendee