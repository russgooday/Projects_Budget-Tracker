export const add = (x, y) => (y !== undefined) ? x + y : (y) => x + y

export const multiply = (x, y) => (y !== undefined) ? x * y : (y) => x * y

export const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value)

export const tap = fn => x => (fn(x), x)

export const pick = (keys, obj) => {

    const fn = (sourceObj) => {
        return keys.reduce((obj, key) => {
            obj[key] = sourceObj[key]
            return obj
        }, {})
    }

    return (obj !== undefined) ? fn(obj) : fn
}