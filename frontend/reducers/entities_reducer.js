import {combineReducers} from "redux";
import serversReducer from "./servers_reducer";
// import usersReducer from "./users_reducer";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";
import friendsReducer from "./friends_reducer"

const entitiesReducer = combineReducers({
    // users: usersReducer,
    servers: serversReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    friends: friendsReducer
});

export default entitiesReducer;