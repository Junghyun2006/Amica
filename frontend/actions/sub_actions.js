import * as SubAPIUtil from "../utils/sub_utils";

export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";

const receiveSubscriptions = (subscriptions) => {
    return {
        type: RECEIVE_SUBSCRIPTIONS,
        subscriptions
    }
}

const removeSubscription = (subscription) => {
    return {
        type: REMOVE_SUBSCRIPTION,
        subscription
    }
}

// THUNK

export const requestSubscriptions = () => {
    return dispatch => {
        return SubAPIUtil.requestSubscriptions().then(subscriptions => {
            dispatch(receiveSubscriptions(subscriptions))
        })
    }
}

export const deleteSubscription = (subscription) => {
    return dispatch => {
        return SubAPIUtil.deleteSubscription(subscription).then(subscription => {
            dispatch(removeSubscription(subscription))
        })
    }
}

// export const createSubscription = () => {
//     return dispatch => {
//         return SubAPIUtil.createSubscription(subscription)
//     }
// }