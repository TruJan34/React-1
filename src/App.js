import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
        const characters = [{
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }];

            
// pass the data through to the child component (Table) with properties,
// kind of how you might pass data through using data- attributes. 
// We can call the property whatever we want, as long as it’s not a reserved keyword,
// so I’ll go with characterData.

// The data I’m passing through is the characters variable,
// and I’ll put curly braces around it as it’s a JavaScript expression.
        return (
            <div className="container">
                <Table characterData = {characters}/>
            </div>
        );
    }
}

export default App;