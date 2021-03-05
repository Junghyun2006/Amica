export const requestSubscriptions = () => {
    return $.ajax({
        url: '/api/subscriptions'
    })
}

export const createSubscription = (subscription) => {
    return $.ajax({
        url: `/api/subscriptions`,
        method: 'POST',
        data: { subscription }
    })
}

export const deleteSubscription = (subscription) => {
    return $.ajax({
        url: `/api/subscriptions/1`,
        method: 'DELETE',
        data: {subscription}
    })
}