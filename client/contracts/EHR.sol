// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Roles.sol";

contract EHR {
    using Roles for Roles.Role;

    Roles.Role private admin;
    Roles.Role private doctor_role;
    Roles.Role private patient_role;

    struct Doctor {
        address doctor_id;
        string doctor_ipfs_hash;
    }

    struct Patient {
        address patient_id;
        string patient_ipfs_hash;
    }

    // for a given address, it will return the struct for doctor or patient (mapping)
    mapping(address => Doctor) doctormap;
    mapping(address => Patient) patientmap;

    // whoever deploys the contracts is the admin
    constructor() {
        admin.add(msg.sender); //added admin
    }

    function checkAdmin() public view returns (bool) {
        return admin.has(msg.sender); // this checks whether the given account has admin role or not
    }

    // for adding doctor we need id and ipfs hash
    function addDoctor(address docId, string memory docHash) public {
        Doctor storage doc = doctormap[docId]; // creating a map for structure doctor
        // this will add doctor details for the structure Doctor
        doc.doctor_id = docId;
        doc.doctor_ipfs_hash = docHash;

        doctor_role.add(docId); // this will add doctor role
    }

    function addPatient(address patientId, string memory patientHash) public {
        Patient storage pat = patientmap[patientId]; // creating a map for structure patient
        // this will add patient details for the structure Patient
        pat.patient_id = patientId;
        pat.patient_ipfs_hash = patientHash;

        patient_role.add(patientId); // this will add patient role
    }
}
