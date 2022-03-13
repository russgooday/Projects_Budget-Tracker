const updateLocalStorage = (entries) => {
    localStorage.setItem('budgetEntries', JSON.stringify(entries))
    return entries
}

const loadFromStorage = () => {
    const storedEntries = localStorage.getItem('budgetEntries')
    return JSON.parse(storedEntries)
}

/**
 * newProxy
 * @param {Object} target: Stored entries
 * @param {Function} callback: Will be called everytime the Stored entries are mutated
 * @returns {Object} new Proxy wrapper
 */

const newProxy = (target, callback) => {

    // e.g. ofType([]) -> '[object Array]'.slice(8, -1) -> Array
    const ofType = (obj) => ({}.toString.call(obj).slice(8, -1))
    const isObjectCollection = (obj) => /Object|Array/.test(ofType(obj))

    const handler = {

        get (target, property) {

            const value = Reflect.get(...arguments)
            console.log(value)
            // if property is an object or array wrap in a proxy and return
            return (isObjectCollection(value))
                ? new Proxy(value, handler)
                : value
        },

        set (target, property, value) {
            if (target[property] === value) return true

            const bool = Reflect.set(...arguments)
            if (bool) callback(target)
            return bool
        },

        deleteProperty (target, property) {
            const bool = Reflect.deleteProperty(...arguments)
            if (bool) callback(target)
            return bool
        }
    }

    return new Proxy(target, handler)
}

export { updateLocalStorage, loadFromStorage, newProxy }
