import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.less';
import {Hovedside} from "./Hovedside/Hovedside";
import {basename} from "./utils/paths";
import Permittering from "./Hovedside/Permittering/Permittering";
import Omstilling from "./Hovedside/Omstilling/Omstilling";
import Oppsigelse from "./Hovedside/Oppsigelse/Oppsigelse";

export const App = () =>  {
  return (
    <div className="App">
        <BrowserRouter basename={basename}>
            <Switch>
                <Route
                    path="/permittering"
                    exact={true}
                    component={Permittering}
                />
                <Route
                    path="/omstilling"
                    exact={true}
                    component={Omstilling}
                />
                <Route
                    path="/oppsigelse"
                    exact={true}
                    component={Oppsigelse}
                />
                <Route path="/" exact={true} component={Hovedside} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
