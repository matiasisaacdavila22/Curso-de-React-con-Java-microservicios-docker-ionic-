import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Customer from './Customer';
import { removeCustomer, saveCustomer, searchCustomerById, searchCustomers } from './CustomerApi';


const CustomerEdit: React.FC = () => {

  const { name } = useParams<{ name: string }>();
  const routeMatch: any = useRouteMatch("/page/customers/:id");
  const id = routeMatch?.params?.id;
  const [customer, setCustomer] = useState<Customer>({});
  const history = useHistory();

  useEffect( () => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
      if(id === 'new'){
        setCustomer({});
      }else{
      let customer = await searchCustomerById(id);
      setCustomer(customer);
    }
  }

  const save = async () => {
    await saveCustomer(customer);
    history.push('/page/customers');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>CLIENTES</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonTitle>{id === 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='stacked'>Nombre</IonLabel>
                  <IonInput onIonChange={e => customer.firstname = String(e.detail.value)} value={customer.firstname}></IonInput>
               </IonItem>
              </IonCol>
              <IonCol>
                  <IonItem>
                    <IonLabel position='stacked'>Apellido</IonLabel>
                    <IonInput onIonChange={e => customer.lastname = String(e.detail.value)} value={customer.lastname}></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>  
                <IonCol>
                  <IonItem>
                    <IonLabel position='stacked'>Email</IonLabel>
                    <IonInput onIonChange={e => customer.email = String(e.detail.value)} value={customer.email}></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol>           
                  <IonItem>
                    <IonLabel position='stacked'>Address</IonLabel>
                    <IonInput onIonChange={e => customer.address = String(e.detail.value)} value={customer.address}></IonInput>
                  </IonItem>
                 </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position='stacked'>Telefono</IonLabel>
                      <IonInput onIonChange={e => customer.phone = String(e.detail.value)} value={customer.phone}></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
            <IonItem>
              <IonButton onClick={save} color="success" fill="solid" slot='end' size='default'>
                <IonIcon icon={checkmark} />
                Guardar
              </IonButton>
            </IonItem>


    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;
