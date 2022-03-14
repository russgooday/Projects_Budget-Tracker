<img src='rpg-digital.ico' width='50'/>

# Budget Tracker
At it's core this is quite a basic project, but as a learning and development exercise I wanted to explore some more advanced techniques.

Firstly I have experimented with proxies. The budget entries are wrapped in a proxy object, that on mutation (add, delete, update) invoke a callback passing in the mutated data — comparable to adding an eventListener to the budget entries object.

In this use case the callback updates and renders the new total and stores the updated entries in localStorage.

The advantage to this approach is that I don't have to code these tasks repeatedly into the individual add entry, delete entry and onchange handlers. Just updating the entries data, will trigger those tasks for me.

Secondly after toying with ejs, I opted to use vanilla template strings. By wrapping and returning those template string in a function, I can pass in a properties object which will then populate the string with values dynamically.

With the use of modules I can even use one template string function within another. Similar on a very basic level I would say to react components.
