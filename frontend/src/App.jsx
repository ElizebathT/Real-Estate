import ReactDOM from "react-dom/client";
import Index from "./routes/Index";


export default function App() {

  
  return (
    <>
  
    <Index />
    
    </>

        
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);