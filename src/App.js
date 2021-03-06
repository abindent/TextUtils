import React, {useState} from 'react';
import MetaTags from "react-meta-tags"
import { Header, Footer, TextForm, Alert } from "./components/index"
import "./dark-mode.css"

function App() {
    const [mode, setMode] = useState("light")
    const [btnText, setbtnText] = useState("Dark")
    const [alert, setAlert] = useState(null)

    const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      setbtnText("Light")
      document.body.classList.add("dark-mode")
      showAlert("Dark mode has been enabled", "success")
    }
    else{
        setMode("light")
        setbtnText("Dark")
        document.body.classList.remove("dark-mode")
        showAlert("Light mode has been enabled", "success")
    }
    }

    const showAlert = (message, type)=>{
      setAlert({
          msg: message,
          type: type
      })
      setTimeout(()=>{
          setAlert(null);
      }, 900)
    }
    return (
        <>
 
            <MetaTags>
                <title>Home - TextUtils</title>
                <meta id="meta-description" name="description" content="Some description." />
                <meta id="og-title" property="og:title" content="MyApp" />
                <meta id="og-image" property="og:image" content="path/to/image.jpg" />
                <link rel="icon" href="https://textanalyzerpy.herokuapp.com/static/favicon/favicon.png" type="image/png" />
            </MetaTags>
            <Header title={"TextUtils"} home={"Home"} HomeName="nav-link active"  mode={mode} toggleMode={toggleMode} btnText={btnText} /><br />
            <Alert alert={alert} />
            <div className="container my-3">
              <TextForm heading="Enter your text here to analyze" showAlert={showAlert}/>
            </div>
            <Footer/>
        </>
    );
}

export default App;