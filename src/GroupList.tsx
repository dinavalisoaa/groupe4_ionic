import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { groupEnd } from 'console';
import { IonApp, IonBadge, IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonNote, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { close, closeCircle, logOut } from "ionicons/icons";
import './MessageListItem.css';

const GroupList: React.FC = () => {
  const [id, setId] = useState(null);
  const [list_,setList] = useState<any[]>([]);
  const [list3mois,setList3mois] = useState<any[]>([]);
  const [list1mois,setList1mois] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);
  
  const [mo1s, setMo1s] = useState(false);
  const [tous, setTous] = useState(false);
  const [mo3s, setMo3s] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/vehicules')
    // fetch('http://localhost/Vehicule/index.php/Welcome/index')
      .then(data => data.json())
      .then(res => {
        // setId(res.nomChauffeur)
        setList(res.data);
        // alert(res.data)
        setLoading(false);
      })
        fetch('http://localhost:8080/vehicules')
    // fetch('http://localhost/Vehicule/index.php/Welcome/index')
      .then(data => data.json())
      .then(res => {
        // setId(res.nomChauffeur)
        setList(res.data);
        // alert(res.data)
        setLoading(false);
      })
      fetch('http://localhost:8080/vehicules/assurances/3')
      // fetch('http://localhost/Vehicule/index.php/Welcome/index')
        .then(data => data.json())
        .then(res => {
          // setId(res.nomChauffeur)
          setList3mois(res.data);
          // alert(res.data)
          setLoading(false);
        })
         fetch('http://localhost:8080/vehicules/assurances/1')
        // fetch('http://localhost/Vehicule/index.php/Welcome/index')
          .then(data => data.json())
          .then(res => {
            // setId(res.nomChauffeur)
            setList1mois(res.data);
            // alert(res.data)
            setLoading(false);
          })
  }, [])
  const voir1mois = async() =>{
   setMo1s(true)
   setMo3s(false)
};
   
const voir3mois = async() =>{
  setMo3s(true)
  setMo1s(false)
};
 
const voirtous = async() =>{
  setMo1s(false)
  setMo3s(false)
};
  
  /*  const remove = async (id: any) => {
      await fetch(`/avions/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(() => {
        let updatedGroups = [...groups].data.filter(i => i.id !== id);
        setGroups(updatedGroups);
      });
    }*/
  

    const groupList = list_.map(group => {
      return (<tr key={group.id}>
        <td style={{whiteSpace: 'nowrap'}}>{group.matricule}</td>
        <td style={{whiteSpace: 'nowrap'}}>{group.nomChauffeur}</td>
        <td>
        
          <ButtonGroup>
            <Button className="btn-primary" size="sm"  tag={Link} to={"/avions/" + group.id}>View details</Button>
          </ButtonGroup>
        </td>
      </tr>
    )})
    
    const groupList1mois = list1mois.map(group => {
      return (<tr key={group.id}>
        <td style={{whiteSpace: 'nowrap'}}>{group.matricule}</td>
        <td style={{whiteSpace: 'nowrap'}}>{group.jour_restant}J</td>
        <td>
          <ButtonGroup>
            <Button className="btn-primary" size="sm"  tag={Link} to={"/avions/" + group.id}>View details</Button>
          </ButtonGroup>
        </td>
      </tr>
    )})
    const groupList3mois = list3mois.map(group => {
      return (<tr key={group.id}>
        <td style={{whiteSpace: 'nowrap'}}>{group.matricule}</td>
        <td style={{whiteSpace: 'nowrap'}}>{group.jour_restant}J</td>
        <td>
          <ButtonGroup>
            <Button className="btn-primary" size="sm"  tag={Link} to={"/avions/" + group.id}>View details</Button>
          </ButtonGroup>
        </td>
      </tr>
    )})
    //const groupList = val;
  
if(mo1s){
  return(
    <div>
     
    <Container fluid>   
    <IonButton onClick={voir1mois} color="success">
       Expirer dans 1 mois
                    </IonButton>
                    <IonButton   onClick={voir3mois}color="success">
                        Expirer dans 3 mois
                    </IonButton> 
                     <IonButton  onClick={voirtous} color="success">
                        Tous les avions
                    </IonButton>
      <h3>Liste des avions expirer dans 1mois 
     

      </h3>
      <Table className="table" border={1}>
        <thead>
        <tr>
          <th >Modele</th>
          <th ></th>
        </tr>
        {groupList1mois}
        </thead>
        <tbody>
    
        </tbody>
      </Table>
    </Container>
                   
  </div>
  )
  }
  if(mo3s){
    return(
      <div>
     
      <Container fluid>      <IonButton onClick={voir1mois} color="success">
       Expirer dans 1 mois
                    </IonButton>
                    <IonButton   onClick={voir3mois}color="success">
                        Expirer dans 3 mois
                    </IonButton> 
                     <IonButton  onClick={voirtous} color="success">
                        Tous les avions
                    </IonButton>
        <h3>Liste des avions 
       
  
        </h3>
        <Table className="table" border={1}>
          <thead>
          <tr>
            <th >Modele</th>
            <th ></th>
          </tr>
          {groupList3mois}
          </thead>
          <tbody>
      
          </tbody>
        </Table>
      </Container>
                     
    </div>
      )
  }
  
    return (
      <div>
   
        <Container fluid>      <IonButton onClick={voir1mois} color="success">
       Expirer dans 1 mois
                    </IonButton>
                    <IonButton   onClick={voir3mois}color="success">
                        Expirer dans 3 mois
                    </IonButton> 
                     <IonButton  onClick={voirtous} color="success">
                        Tous les avions
                    </IonButton>
          <h3>Liste des avions 
         

          </h3>
          <Table className="table" border={1}>
            <thead>
            <tr>
              <th >Modele</th>
              <th ></th>
            </tr>
            {groupList}
            </thead>
            <tbody>
        
            </tbody>
          </Table>
        </Container>
                       
      </div>
      
    );
  };
  
  export default GroupList;
  