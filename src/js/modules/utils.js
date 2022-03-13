export const formatCurrency = (locale, currency) => (amount) => (
    amount.toLocaleString(locale, {
        style: 'currency',
        currency: currency
    })
)

export const getTotal = (() => {

    const sumOfEntry = (sum, [_id, { amount = 0, transaction = 1 }]) => sum + (amount * transaction)

    return (entries) => entries.reduce(sumOfEntry, 0)
})()

/**
 * getNamedProperties
 * @param {HTMLElements}
 * @returns {Object} name: value pairs taken from inputs
 */

export const getNamedProperties = (inputElements) => (
    Object.fromEntries(
      Array
        .from(inputElements)
        .flatMap(({name, value}) => (name) ? [[name, value]] : [])
    )
)

