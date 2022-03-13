import Entry from '../../views/entry.js'
import { getNamedProperties } from './utils.js'

// Note: importing npm uuid would be a better option
// This will suffice for this project
const generateUniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2)

/**
 * Handlers module
 * @param {Object} Stored entries
 * @returns {Object} handler methods
 */

const handlers = (entries) => {

    const entriesSection = document.querySelector('.entries')

    const addEntry = (event) => {

        const props = {
            uniqueId: generateUniqueId(),
            date: new Date().toISOString().replace(/T.*/, '')
        }

        // add to stored entries
        entries[props.uniqueId] = { date: props.date }

        // render entry
        entriesSection.insertAdjacentHTML('beforeend', Entry(props))
    }

    const deleteEntry = ({ target }) => {

        if (!target.matches('.delete-entry')) return

        // remove from stored entries
        delete entries[target.dataset.id]

        // remove entry from view
        target.closest('.entry').remove()
    }

    const updateEntry = ({ target }) => {

        const fieldSet = target.closest('.entry')
        const props = getNamedProperties(fieldSet.elements)

        // update stored entries
        entries[fieldSet.dataset.id] = props
    }

    return {
        addEntry,
        deleteEntry,
        updateEntry
    }
}

export { handlers }
