import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Addrole from "../add-role/addRole.component";
import { useDispatch } from "react-redux";
import Adduser from "../add-user/addUser.component";
import Editadminuser from "../edit-admin-user/editAdminUser.component";
import Requestuser from "../request-user/requestUser.component";
import Usershome from "../users-home/users-home.component";
import "./userDisplay.styles.scss";

const Userdisplay = () => {
  const dispatch = useDispatch();
  const components = useSelector((state) => state.user.component);
  const idForComponent = useSelector((state) => state.user.componentusers);
  const [isModalOpen, setIsModalOpen] = useState(3);
  const [isClickUser,setIsClickUser]=useState(0);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const ChangeComUser =()=>{
    if(idForComponent===1){
      setIsClickUser(idForComponent)
      console.log("idddd displ   "+idForComponent)
    }
  }
  const ChanegComponent = () => {
    components.map((component) => {
      {
        if (component.value === 1) {
          console.log("title   " + component.title);
          if (component.id === 1) {
            console.log("id   " + component.id);
            setIsModalOpen(component.id);
          }
          if (component.id === 2) {
            console.log("id   " + component.id);
            setIsModalOpen(component.id);
          }
          if (component.id === 3) {
            console.log("id   " + component.id);
            setIsModalOpen(component.id);
          }
          if (component.id === 4) {
            setIsModalOpen(<Usershome />);
          }
          if (component.id === 5) {
            setIsModalOpen(component.id);
          }
          if (component.id === 6) {
            setIsModalOpen(component.id);
          }
          if (component.id === 7) {
            setIsModalOpen(component.id);
          }
        }
      }
    });
  };
  useEffect(() => {
    ChanegComponent();
    ChangeComUser();
    console.log();
    
  }, [components,idForComponent,]);
  return (
    <>
      {components.map((component) => {
        {
          if (component.value === 1) {
            console.log("title   " + component.title);
            if (component.id === 1) {
              console.log("id   " + component.id);
              {/* {
                 setIsModalOpen(component.id); 
              } */}

              {
                return <Addrole />;
              }
            }
            if (component.id === 2) {
              console.log("id   " + component.id);
              {
                /* setIsModalOpen(component.id); */
              }
              return <Requestuser />;
            }
            if (component.id === 3) {
              console.log("id   " + component.id);
              console.log("idforcomponent   " + idForComponent);

              {
                /* setIsModalOpen(component.id); */
              }
              return <Usershome text={component.title} />;
            }
             if (component.id === 4) {
              
              return <Usershome text={component.title} />;
               {/* setIsModalOpen(<Usershome idUser={component.idUser} />); */}
             }
             if (component.id === 5) {
              
              return <Editadminuser />;
               {/* setIsModalOpen(<Usershome idUser={component.idUser} />); */}
             }
             if (component.id === 6) {
              
              return <Addrole />;
               {/* setIsModalOpen(<Usershome idUser={component.idUser} />); */}
             }
             if (component.id === 7) {
              
              return <Adduser />;
               {/* setIsModalOpen(<Usershome idUser={component.idUser} />); */}
             }
          }
        }
      })
      }
      {/* {if(idForComponent===1){
        console.log(idForComponent)
        return <Home/>
      }} */}
      {/* {isModalOpen === 1 && <Addrole />}
      {isModalOpen === 2 && <Adduser />}
      {isModalOpen === 3 && <Adduser />} */}
      {/* <Usershome/> */}
      {/* <Addrole /> */}
    </>
  );
};

export default Userdisplay;
