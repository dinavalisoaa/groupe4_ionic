import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonThumbnail,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import Login from './components/Login';
import './MessageListItem.css';

interface DetailAvionProps{
  bool: any;
}
const DetailAvion: React.FC<DetailAvionProps> = ({bool}) => {  
  
  const params = useParams<{ id: string }>();
const [list_,setList] = useState<any[]>([]);

const [detailo,setDetail] = useState<any[]>([]);
const [isAuth,setAuth]=useState(bool);
const [isExp,setExp]=useState(false)
const token =localStorage.getItem('token');
useEffect(() => {
  fetch('http://localhost:8080/vehicules/'+params.id)
    .then(data => data.json())
    .then(res => {
      setList(res.data);
      setDetail(res.data[1]);
      // console.log(res.data[1]);
    })
}, [])
var test;
useEffect(() => {
     fetch(`http://localhost:8080/checkTokens`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Access-Control-Allow-Origin':'*',
              'Content-Type': 'application/json',
              'login':`${token}`
            }
          })
          .then(response => response.json())
          .then(res => {
            test=res.datas;
            if(test.name==undefined){
              setExp(true)
            }
           
        });
}, [])
if(bool==false){
  return (
    <Login/>
  );
  
}
if(isExp==true){
  return (
    <Login/>
  );
  
}

const details =detailo.map(group => {
    return (
      <>
      <h3>Date:{group.daty}</h3>
      <ul>
    
      <li>debut:{group.debut}</li>
      <li>fin:{group.fin}</li>
      </ul>
      </>
    
  )})
const groupList = list_.map(group => {
    return (
      <div>
      <h1>Detail sur l'avion</h1>   
       
      <p>MODELE:{group.matricule}</p>
      <p>Pilote:{group.nomChauffeur}</p>

      <h1>Kilometrage de cet avion</h1>   
        {details}
       
      </div>
    
  )})
  
  return (
    <div>
    <Container>
    <IonList>
    
        
        <p>{groupList}</p>
       
 
    </IonList>
      </Container>
                       
      </div>
  );
}

export default DetailAvion;
