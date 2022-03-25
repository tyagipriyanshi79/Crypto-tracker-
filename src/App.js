import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import  Alert  from "./components/Alert";


function App() {

  const useStyles = makeStyles(()=> ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    }
  }));

  const classes = useStyles();


  return (
     <BrowserRouter>
    <div className={classes.App}>
      <Header/>

      <Route path ="/" component={HomePage} exact ></Route>
      <Route path = "/Coins/:id" component={CoinPage}/>
    </div>
    <Alert/>
    </BrowserRouter>
  );
}

export default App;
