class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!(eventName in this.events)) this.events[eventName] = [];
    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (lst) => lst !== callback
        );
      },
    };
  }

  emit(eventName, args = []) {
    if (!(eventName in this.events)) return [];
    let res = [];
    this.events[eventName].forEach((lstn) => res.push(lstn(...args)));
    return res;
  }
}

let eventEmitter = new EventEmitter();
export default eventEmitter;
