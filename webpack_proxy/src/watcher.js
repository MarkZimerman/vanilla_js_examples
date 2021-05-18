export default function watchObj(node, callback) {
    // eslint-disable-next-line no-undef
    return new Proxy(node, {
        set(target, property, value) {
            console.log('Set for: ' + property);
            target[property] = value;
            callback(property, value);
            return true;
        },
        get(target, property) {
            switch (typeof target[property]) {
                case 'object':   return watchObj(target[property], callback);
                case 'function': return target[property].bind(target);
                default:         return target[property];
            }
        }
    });
}