import Entry from './entry.js'

const Form = ({ entries = [], total = '£0.00' }) => (
`
    <form id='budget-tracker' class='budget-tracker grid'>
        <header class='header grid-container mb-1'>
            <div class='heading'>Date</div>
            <div class='heading'>Description</div>
            <div class='heading'>Type</div>
            <div class='heading'>Amount</div>
        </header>
        <section class='entries grid'>
            ${entries.map(([uniqueId, props]) => Entry({ uniqueId, ...props })).join('\n')}
        </section>
        <footer class='footer'>
            <div class='controls grid-container'>
                <div class='cell aligned-right'>
                    <button type='button' class='new-entry'>New Entry</button>
                </div>
            </div>
            <div class='summary grid-container'>
                <div class='cell aligned-right'>
                    <strong>Total:</strong>
                    <span class='total'>${total}</span>
                </div>
            </div>
        </footer>
    </form>
`
)

export default Form
