const events = {};

function subscribe(eventType, eventHandler) {

    if (!events[eventType]) {
        events[eventType] = [];
    }

    events[eventType].push(eventHandler);
}


function publish(eventType, data) {

    if (events[eventType]) {
        events[eventType].forEach(handler => handler(data));
    }
}


module.exports = {
    subscribe,
    publish
}