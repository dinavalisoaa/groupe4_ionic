import React from 'react';
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import './Login.css';

function Example() {
  return (
    <>
    <div className='login'>
        <center><h1>Login</h1></center>
        <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput placeholder="Entrer votre email"></IonInput>
        </IonItem>

        <IonItem>
            <IonLabel position="floating">Mot de passe</IonLabel>
            <IonInput placeholder="Entrer votre mot de passe" type='password'></IonInput>
        </IonItem>
        <IonButton>Valider</IonButton>
    </div>
    </>
  );
}
export default Example;