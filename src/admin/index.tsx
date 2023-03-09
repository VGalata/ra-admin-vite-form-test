import {Admin, ListGuesser, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {ContentCreate} from "./ContentCreate";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="options" list={ContentCreate}/>
  </Admin>
);

export default App;
