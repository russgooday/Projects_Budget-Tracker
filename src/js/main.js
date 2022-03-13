import { loadFromStorage, updateLocalStorage, newProxy } from './modules/storage.js'
import { handlers } from './modules/handlers.js'
import { getTotal, formatCurrency } from './modules/utils.js'
import { pipe } from './modules/functional.js'
import { sampleBudgetEntries } from './modules/sample-data.js'

import Form from '../views/form.js'

((doc) => {

    const app = doc.querySelector('#app')
    const toSterling = formatCurrency('en-GB', 'GBP')

    // render inital form and any stored entries
    const renderForm = (entriesStore) => {
        // convert entriesStore to an Array
        const entries = Object.entries(entriesStore)

        app.insertAdjacentHTML(
            'afterbegin',
            Form({
                entries,
                total: toSterling(getTotal(entries))
            })
        )
    }

    // setup handlers - note make use of event delegation
    const setupHandlers = function (entriesStore) {

        // pass entries to the handlers module
        const { addEntry, deleteEntry, updateEntry } = handlers(entriesStore)

        const entriesSection = app.querySelector('.entries')

        entriesSection.addEventListener('change', updateEntry)
        entriesSection.addEventListener('click', deleteEntry)

        app.querySelector('.new-entry').addEventListener('click', addEntry)
    }

    const renderTotal = (value) => {
        app.querySelector('.total').textContent = toSterling(value)
    }

    // sequence to be performed on mutations to entriesStore
    const updateEntries = pipe(
        updateLocalStorage,
        Object.entries,
        getTotal,
        renderTotal
    )

    // Proxy wrapper for stored data
    const entriesStore = newProxy(
        loadFromStorage('budgetEntries') ?? sampleBudgetEntries,
        updateEntries /* callback */
    )

    renderForm(entriesStore)
    setupHandlers(entriesStore)

})(window.document)
