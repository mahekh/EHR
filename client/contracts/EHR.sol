// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Roles.sol";

contract EHR {
    using Roles for Roles.Role;

    //using the roles library define the three roles
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

    struct MedicalRecords {
        string medical_ipfs_hash;
    }

    // for a given address, it will return the struct for doctor or patient (mapping)
    //map address to their respective structs 
    mapping(address => Doctor) doctormap;
    mapping(address => Patient) patientmap;
    mapping(address => MedicalRecords) recordmap;

    address[] allDocList;
    address[] allPatList;

    // whoever deploys the contracts is the admin
    constructor() {
        admin.add(msg.sender); //added admin
    }

    function checkAdmin() public view returns (bool) {
        return admin.has(msg.sender); // this checks whether the given account has admin role or not
    }

    // for adding doctor we need id and ipfs hash
    function addDoctor(address docId, string memory docHash) public {
        require(admin.has(msg.sender), "only for admin");
        Doctor storage doc = doctormap[docId]; // creating a map for structure doctor
        // this will add doctor details for the structure Doctor
        doc.doctor_id = docId;
        doc.doctor_ipfs_hash = docHash;
        doctor_role.add(docId); // this will add doctor role
        allDocList.push(docId); // push doc id to array all doc list
    }

    function addPatient(address patientId, string memory patientHash) public {
        require(admin.has(msg.sender), "only for admin");
        Patient storage pat = patientmap[patientId]; // creating a map for structure patient
        // this will add patient details for the structure Patient
        pat.patient_id = patientId;
        pat.patient_ipfs_hash = patientHash;
        patient_role.add(patientId); // this will add patient role
        allPatList.push(patientId); // push pat id to array all pat list
    }

    function isDoctor(address d_id) public view returns (bool) {
        return doctor_role.has(d_id);
    }

    function isPatient(address p_id) public view returns (bool) {
        return patient_role.has(p_id);
    }

    // retrive the doctor ipfs hash for that given doctor id
    function getDocinfo(address id) public view returns (string memory) {
        return doctormap[id].doctor_ipfs_hash;
    }

    // retrive the patient ipfs hash for the given patient id
    function getPatinfo(address id) public view returns (string memory) {
        return patientmap[id].patient_ipfs_hash;
    }

    // retriving an array of doctor struct, meaning retriveing the doctor id and ipfs hash (the struct contains the id and hash)
    function getAllDoc() public view returns (Doctor[] memory) {
        Doctor[] memory allDocs = new Doctor[](allDocList.length); //creating temporary array

        uint256 i = 0;

        for (i = 0; i < allDocList.length; i++) {
            if (doctor_role.has(allDocList[i])) {
                allDocs[i] = doctormap[allDocList[i]]; //filling alldocs with the addresses in alldocslist
            }
        }

        return allDocs;
    }

    // retriving an array of patient struct, meaning retriveing the patient id and ipfs hash
    function getAllPat() public view returns (Patient[] memory) {
        Patient[] memory allPat = new Patient[](allPatList.length); //creating temporary array

        uint256 i = 0;

        for (i = 0; i < allPatList.length; i++) {
            if (patient_role.has(allPatList[i])) {
                allPat[i] = patientmap[allPatList[i]]; //filling allpat with the addresses in allpatlist
            }
        }

        return allPat;
    }

    // adding in the medical record struct which is mapped with patient id
    function addMedicalRecord(address patid, string memory pathash) public {
        require(doctor_role.has(msg.sender), "Only doctors can add records");

        MedicalRecords storage medrecord = recordmap[patid];
        medrecord.medical_ipfs_hash = pathash;
    }

    // viewing the medical record which is mapped with patient id, returns the medical record ipfs hash
    function viewMedicalRecord(address patid) public view returns (string memory)
    {
        return recordmap[patid].medical_ipfs_hash;
    }


    //removing the doctor role 
    function deleteDoc(address docid) public {
        require(admin.has(msg.sender), "only for admin");
        doctor_role.remove(docid);
        address[] memory temp;

        uint256 j = 0;

        for (uint256 i = 0; i < allDocList.length; i++) {
            if (allDocList[i] != docid) {
                temp[j++] = allDocList[i];
            }
        }
        allDocList = temp;
    }


    //removing the patient role 
    function deletePat(address patid) public {
        require(admin.has(msg.sender), "only for admin");
        patient_role.remove(patid);

        address[] memory temp;

        uint256 j = 0;

        for (uint256 i = 0; i < allPatList.length; i++) {
            if (allPatList[i] != patid) {
                temp[j++] = allDocList[i];
            }
        }
        allPatList = temp;
    }
}
