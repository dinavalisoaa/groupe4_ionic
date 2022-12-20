import { IonButton, IonCol, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { render } from "@testing-library/react";
import { personCircle } from "ionicons/icons";
import { useState } from "react";

import DetailAvion from '../DetailAvion';
import GroupList from "../GroupList";
    //validate inputs code not shown

const Login =() => {
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const [redirect,setRedirect]=useState(false);
    var json;
    const log = async() =>{
        
        console.log(email);
        await fetch(`http://localhost:8080/login`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Access-Control-Allow-Origin':'*',
              'Content-Type': 'application/json',
              'logins':`${email}`,
              'pwds':`${pwd}`
            }
          })
          .then(response => response.json())
          .then(res => {
            json=res.datas;
            if(json.message == undefined){
              localStorage.setItem('token', json.name);
             setRedirect(true)
            }
            else{
              alert(json.message)
            }
        });
    };
    if(redirect){
      return(
        <DetailAvion bool={true}/>
      )
    }
    return (
                 <><IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader><IonRow>
                <IonCol>
                    <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={personCircle} />
                </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
                <IonItem>
                <IonLabel position="floating"> Email</IonLabel>
                <IonInput
                    type="email"
                    onIonChange={(e :any) => setEmail(e.target.value)}
                />
                </IonItem>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
                <IonItem>
                <IonLabel position="floating"> Password</IonLabel>
                <IonInput
                    type="password"
                    onIonChange={(e :any) => setPwd(e.target.value)}
                />
                </IonItem>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
                <IonButton expand="block" onClick={log}>
                Login
                </IonButton>
            </IonCol>
            </IonRow>
            
            </>
    );
    
   
    
};
export default Login;