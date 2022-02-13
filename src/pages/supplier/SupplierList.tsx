import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Supplier from './Supplier';
import { removeSupplier, searchSuppliers } from './SupplierApi';


const SupplierList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Supplier[]>([]);
  const history = useHistory();

  useEffect( () => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let suppliers = await searchSuppliers();
      setClientes(suppliers);
  }

  const remove = (id:string) =>{
    removeSupplier(id);
    search();
  }

  const addSupplier = () => {
    history.push('/page/suppliers/new')
  }

  const editSupplier = (id:string) => {
    history.push('/page/suppliers/'+id)
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>PROVEEDORES</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonTitle>Gestion de Proveedores</IonTitle>

            <IonItem>
              <IonButton onClick={addSupplier} color="primary" fill="solid" slot='end' size='default'>
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


            {clientes.map((cliente:Supplier) =>
            <IonRow>
              <IonCol>{cliente.name}</IonCol>
              <IonCol>{cliente.email}</IonCol>
              <IonCol>{cliente.phone}</IonCol>
              <IonCol>{cliente.address}</IonCol>
              <IonCol>           
                  <IonButton onClick={() => editSupplier(String(cliente.id))} color="primary" fill="clear">
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

export default SupplierList;
