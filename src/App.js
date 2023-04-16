import { useEffect,useState } from "react";
import axios from "axios";
import Select from 'react-select'
import DialogModal from './Components/DialogModal';
function App() {
  const [fournisseurdata,setournisseurdata]=useState([])
  const [form,setForm] =useState({
    "ICE": "7777777777777777",
    "nom": "iam",
    "adreasse": "N263 RUE ghghg 5000",
    "tel": "0655585855555",
    "fix": "0655585855555",
    "email": "inwi@inwi.ma",}
)
  const getdata=()=>{
    axios.get(`http://127.0.0.1:8000/api/fournisseur/`).then(reponse=>setournisseurdata(reponse.data))
  }
  /* const postdata=()=>{

  } */
  useEffect( () => {
    getdata()
   console.log(fournisseurdata)
  }, []);
 

  const [confirming, setConfirming] = useState(false);

  const  addfournisseur=()=> {
   axios.post(`http://127.0.0.1:8000/api/fournisseur/`,form).then(function (response) {
      console.log(response);
     
    }) 
    
  }
  const  closeModal=()=> {
    setConfirming(false);
  }

  return (
    <div className="App">

      <Select options={fournisseurdata.map(e=> ({'value': e.id, 'label': e.nom}) )}
      onChange={opt=> console.log(opt)}
      />
       <button onClick={addfournisseur} 
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" >
            add
          </button> 
   
   <div className="mt-5">
       {/*  <button  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      onClick={confirming}>
          add
        </button> */}
      </div>

   <DialogModal isOpen={confirming} onClose={closeModal}>
        <DialogModal.Content title={'add'}>

          <div className="mt-4">

          </div>
        </DialogModal.Content>
        <DialogModal.Footer>
          {/* <button  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" 
          onClick={()=>closeModal()}>Cancel</button> */}

          
        </DialogModal.Footer>
      </DialogModal>

    </div>
  );
}

export default App;
