import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router, Switch} from 'react-router'

import {store, history} from 'app/store'


class Content extends React.Component<{}, {}> {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        dfghdfgh
                    </div>
                </Router>
            </Provider>
        )
    }
}

declare global {
    interface System {
        import (request: string): Promise<any>
    }
    const System: System
}

ReactDOM.render(
    <Content />,
    document.getElementById('content')
)
