import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Customer from './Customer';
import { removeCustomer, searchCustomers } from './CustomerApi';


const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Customer[]>([]);
  const history = useHistory();

  useEffect( () => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let customers = await searchCustomers();
      setClientes(customers);
  }

  const remove =async (id:string) =>{
   await removeCustomer(id);
    search();
  }

  const addCustomer =  () => {
    history.push('/page/customers/new')
  }

  const editCustomer = (id:string) => {
    history.push('/page/customers/'+id)
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
          <IonTitle>Gestion de Clientes</IonTitle>

            <IonItem>
              <IonButton onClick={addCustomer} color="primary" fill="solid" slot='end' size='default'>
                <IonIcon icon={add} />
                Agregar Cliente
              </IonButton>
            </IonItem>

          <IonGrid className='table'>
            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Telefono</IonCol>
              <IonCol>Direccion</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>


            {clientes.map((cliente:Customer) =>
            <IonRow>
              <IonCol>{cliente.firstname}{cliente.lastname}</IonCol>
              <IonCol>{cliente.email}</IonCol>
              <IonCol>{cliente.phone}</IonCol>
              <IonCol>{cliente.address}</IonCol>
              <IonCol>           
                  <IonButton onClick={() => editCustomer(String(cliente.id))} color="primary" fill="clear">
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton color="danger" fill="clear" onClick={() => remove(String(cliente.id))}>
                    <IonIcon icon={close} slot="icon-only" />
                  </IonButton>
              </IonCol>
            </IonRow>
            )}
         </IonGrid>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
