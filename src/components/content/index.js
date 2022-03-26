import React from 'react';
import {
    Redirect,
    Route,
    Switch
  } from 'react-router-dom';
import routes from '../../routes/index';
import {Fade, Container} from 'reactstrap';
  
const Content = () => {
    return (
        <Container fluid>
            <Switch>
              {routes.map((route, idx) => {
                console.log(route.component);
                return route.component && (
                  <Route
                    key={idx}
                    exact={route.exact}
                    path={route.path}
                    name={route.name}
                    render={props => {
                      if(route.path==="/")
                        return <Redirect to="/home" />
                      return (
                        <Fade>
                          <route.component {...props} />
                        </Fade>
                      )}} />
                )
              })}
            </Switch>
        </Container>
    )
  }
  
export default React.memo(Content)