import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./layout/layout";

function App() {
  return (
      <HelmetProvider>
        <BrowserRouter>
          <Layout>

          </Layout>
        </BrowserRouter>
      </HelmetProvider>
  );
};

export default App;

/**
 * <Switch>
 <Route exact path={"/"}>
 <Home />
 </Route>
 <Route path={"/home"}>
 <Home />
 </Route>
 <Route path={"/search"}>
 <Search />
 </Route>
 <Route path={["/gene/:id/:site/:section","/gene/:id/:site","/gene/:id","/gene",]}>
 <Gene />
 </Route>
 <Route path={["/operon/:id/:site/:section","/operon/:id/:site","/operon/:id","/operon",]}>
 <Operon />
 </Route>
 <Route path={["/tu/:id","/tu",]}>
 <Operon />
 </Route>
 <Route path={["/started/:site","/started"]} >
 <Doc />
 </Route>
 <Route path={["/app/testing",]}>
 <Testing />
 </Route>
 <Route path="*">
 <Error />
 </Route>
 </Switch>
 * */