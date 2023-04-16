import "../styles/ConsultCard.css";
import paticon from "../assets/pat-icon.png";
import React from 'react'
import axios from "axios";
import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
const web3Helper = new Web3Helper();  // using web3 

function DoctorCard(props) {

  function handleDelete (id) {

    return new Promise((resolve, reject) => {
      web3Helper.deployedContracts().then((EHRcontract) => {
        console.log(EHRcontract);
        web3Helper.connectedAccount().then((a) => {
          EHRcontract.methods
            .deleteDoctor(id)
            .send({ from: a })
            .on("confirmation", (r) => {
              resolve(r);
            })
            .on("error", (err) => {
              reject(err);
            });
        });
      });
    }).then(r => {
        console.log("Doctor has been deleted")
        window.location.reload()
      });

  }
  
  

  return (
    <>
      <div className='consultation-wrapper'>
        <div className='consultation-card'>

          <div className='patient-img'>
              <img className='pat-icon' src={paticon} alt="" />
          </div>

            <div className='consultation-body'>
                
                <div className='consultation-title'>
                  <h2 className='patient-name'>Doctor Name: {props.details.firstName} {props.details.lastName} </h2>
                </div>

                <div className='consultation-description'>
                  <p className='patient-id'>Doctor ID: {props.details.id}</p>
                  <p className='patient-phone'>Contact: {props.details.number}</p>
                  <p className='patient-email'>Email: {props.details.email}</p>
                </div>
            
            </div>

            <div className='record-btns'>
              <button className='add-rec' onClick ={ () => handleDelete(props.details.id)}>DELETE</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default DoctorCard;
