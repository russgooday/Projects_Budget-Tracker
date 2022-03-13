const Entry = ({ uniqueId, date, description = '', transaction = 1, amount = '' }) => (
`
    <fieldset class='grid-container entry' data-id='${uniqueId}'>
        <div class='cell'>
            <input type='date' name='date' class='input input-date' value='${date}'>
        </div>
        <div class='cell'>
            <input
                type='text'
                name='description'
                class='input input-description'
                placeholder='Add a Description (e.g. wages, bills, etc.)'
                value='${description}'
            >
        </div>
        <div class='cell'>
            <select name='transaction' class='input input-transaction'>
                <option value='1' ${transaction === '1' ? 'selected' : ''}>Income</option>
                <option value='-1' ${transaction === '-1' ? 'selected' : ''}>Expense</option>
            </select>
        </div>
        <div class='cell'>
            <input type='number' name='amount' class='input input-amount' value='${amount}'>
        </div>
        <div class='cell'>
            <button type='button' data-id='${uniqueId}' class='delete-entry'>&#10005;</button>
        </div>
    </fieldset>
`
)

export default Entry
