import { connect } from "react-redux";
import { toggleEventModal, 
         createNewEvent, 
         updateEvent, 
         removeCurrentEvent,  
        } from "../../actions/events/events.actions";
import EventModal from "../../components/event-modal/EventModal.component";

const mapStateToProps = state => ({
    eventModalOpen: state.sharedReducer.eventModalOpen,
    authToken: state.authReducer.authToken,
    currentEvent: state.eventsReducer.currentEvent,
});

const mapDispatchToProps = dispatch => ({
    toggleEventModal: () => dispatch(toggleEventModal()),
    createNewEvent: (form, authToken) => dispatch(createNewEvent(form, authToken)),
    updateEvent: (form, authToken) => dispatch(updateEvent(form, authToken)),
    removeCurrentEvent: () => dispatch(removeCurrentEvent())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventModal);

