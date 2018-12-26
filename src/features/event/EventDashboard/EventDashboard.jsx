import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EvetForm/EventForm";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      // events: this.state.events.map(event => {
      //   if (event.id === updatedEvent.id) {
      //     return Object.assign({}, updatedEvent);
      //   } else {
      //     return event;
      //   }
      // }),
      isOpen: false,
      selectedEvent: null
    });
  };
  handleOpenEvent = eventToUOpen => () => {
    this.setState({
      selectedEvent: eventToUOpen,
      isOpen: true
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    // const updatedEvents = [...this.state.events, newEvent];
    this.props.createEvent(newEvent)
    this.setState({
      // events: updatedEvents,
      isOpen: false
    });
  };

  handleDeleteEvent = eventId => () => {
    // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updatedEvents
    // });
    this.props.deleteEvent(eventId);
  };
  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Craete Event"
          />
          {this.state.isOpen && (
            <EventForm
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              handleCancel={this.handleCancel}
              createEvent={this.handleCreateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
