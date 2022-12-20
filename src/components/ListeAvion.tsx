import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonList,
  IonRouterOutlet,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { Redirect, Route } from 'react-router';
import Login from './Login';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);
  const input1 = useRef<HTMLIonInputElement>(null);
  const input2 = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    '...'
  );

  function confirm() {
    //modal.current?.dismiss(input1.current?.value, 'confirm');
    return (
        <IonPage>
          <IonRouterOutlet>
          <Redirect to="/home" />
          </IonRouterOutlet>
        </IonPage>
      );
    }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonList>
        <IonItem>
            <IonLabel>Boeing</IonLabel>
            <IonButton id="open-modal" expand="block">
                voir details
            </IonButton>
        
            <p>{message}</p>
            <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                </IonButtons>
                <IonTitle>Login</IonTitle>
                <IonButtons slot="end">
                    <IonButton strong={true} onClick={() => confirm()}>
                    Confirm
                    </IonButton>
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                <IonLabel position="stacked">Entrer votre email</IonLabel>
                <IonInput ref={input1} type="text" placeholder="Votre email" />
                </IonItem>
                <IonItem>
                <IonLabel position="stacked">Entrer votre mot de passe</IonLabel>
                <IonInput ref={input2} type="password" placeholder="Votre mot de passe" />
                </IonItem>
            </IonContent>
            </IonModal>
        </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Example;