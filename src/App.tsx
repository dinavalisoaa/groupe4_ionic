import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './components/Login';
import GroupList from './GroupList';
import Appli from './Appli';
import DetailAvion from './DetailAvion';
import Logina from './pages/Logina';
import Example from './pages/Example';
import ListeAvion from './pages/ListeAvion';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/list" />
        </Route>

        <Route path="/list" exact={true}>
          <GroupList />
        </Route>

        <Route path="/app" exact={true}>
          <Appli />
        </Route>
        <Route path="/home" exact={true}>
          <Login />
        </Route>
        <Route path="/trano" exact={true}>
          <Home />
        </Route>
     
        <Route path="/avions/:id">
           <DetailAvion bool={false} />
        </Route>
        <Route path="/logina">
           <Logina/>
        </Route>
        <Route path="/logins">
           <Example/>
        </Route>
        <Route path="/listeAvion">
           <ListeAvion/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
