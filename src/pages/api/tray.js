import { database } from "firebase-config"
import {getDocs, collection} from 'firebase/firestore'
export default  handler = (req,res) => {
      const valueCollection = collection(database,'values');
      const data = []
     if(req.method == 'GET'){
        try{
            getDocs(valueCollection).then((snapshot) => {
                snapshot.docs.map((doc) => {
                    data.push(doc.data().value);
                })
            }).then(() => {
                res.staus(200).json({
                    message : 'SUCCESS',
                    data : data
                })
            })
        }
        catch(error){
            res.staus(500).json({
                message:'FAILED'
            })
        }
     }
}  