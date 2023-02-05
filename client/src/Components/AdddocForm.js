import React from 'react'
import "../styles/AddForm.css";

function AdddocForm() {

//   addUser = async (event) => {

//     event.preventDefault()
//     document.getElementById('lds').style.visibility = "visible"
//     document.getElementById('docContent').style.visibility = "hidden"

//     const fname = document.getElementById('fname').value
//     const lname = document.getElementById('lname').value
//     const email = document.getElementById('email').value
//     const dob = document.getElementById('dob').value
//     const mobile = document.getElementById('mob').value
//     const accId = document.getElementById('accid').value.trim()
//     const city = document.getElementById('city').value
//     const state = document.getElementById('state').value
//     const speciality = document.getElementById('spec').value

//     var DrInfo = {
//         "Fname":fname,
//         "Lname":lname,
//         "Email":email,
//         "Dob":dob,
//         "Mobile":mobile,
//         "Accid":accId,
//         "City":city,
//         "State":state,
//         "Speciality":speciality
//     }
//     console.log(DrInfo)
    
//     var InfoStr = JSON.stringify(DrInfo)
//     await ipfs.add(InfoStr).then(
//         hash => {
//             console.log(hash)
//            this.state.contract.methods.addDrInfo(accId,hash).send({from: this.state.account})
//            .on("confirmation", (r) => {
//                console.log("Doctor Added Successfully")
//                swal({
//                    title: "Success",
//                    text: "Doctor Registerd Successfully",
//                    icon: "success",
//                    button: "ok",
//                });
//                document.getElementById('lds').style.visibility = "hidden"
//                window.location.reload();
//            }).on("error",(er)=>{
//                swal({
//                    title: "Error",
//                    text: "1.Only Admin can Add Users\n2.This id Already have a role",
//                    icon: "error",
//                    button: "ok",
//                });
//                document.getElementById('lds').style.visibility = "hidden"
//                window.location.reload();
//            });
//         });
// }



  return (
    <>
      <div class="form-container">
      <form class="register-form">
        
        <input id="first-name" class="form-field" type="text" placeholder="First Name" name="firstName"/>
        
        <input id="last-name" class="form-field" type="text" placeholder="Last Name" name="lastName"/>
        
        <input id="email" class="form-field" type="text" placeholder="Email" name="email"/>

        <input id="number" class="form-field" type="text" placeholder="Number" name="number"/>

        <input id="doc-id" class="form-field" type="text" placeholder="ID" name="id"/>

        <input id="city" class="form-field" type="text" placeholder="City" name="city"/>

        <input id="country" class="form-field" type="text" placeholder="Country" name="country"/>

        
        <button class="form-field" type="submit" >
          Register Doctor
        </button>

      </form>
    </div>
    </>
  )
}

export default AdddocForm