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
    mapping(address => Doctor) doctorMap;
    mapping(address => Patient) patientMap;
    mapping(address => MedicalRecords) recordMap;

    address[] allDoctorList;
    address[] allPatientList;

    // whoever deploys the contracts is the admin
    constructor() {
        admin.add(msg.sender); //added admin
    }

    function checkAdmin() public view returns (bool) {
        return admin.has(msg.sender); // this checks whether the given account has admin role or not
    }

    // for adding doctor we need id and ipfs hash
    function addDoctor(address docId, string memory docHash) public {
        Doctor storage doc = doctorMap[docId]; // creating a map for structure doctor
        // this will add doctor details for the structure Doctor
        doc.doctor_id = docId;
        doc.doctor_ipfs_hash = docHash;
        doctor_role.add(docId); // this will add doctor role
        allDoctorList.push(docId); // push doc id to array all doc list
    }

    function addPatient(address patientId, string memory patientHash) public {
        Patient storage pat = patientMap[patientId]; // creating a map for structure patient
        // this will add patient details for the structure Patient
        pat.patient_id = patientId;
        pat.patient_ipfs_hash = patientHash;
        patient_role.add(patientId); // this will add patient role
        allPatientList.push(patientId); // push pat id to array all pat list
    }

    function checkDoctor(address d_id) public view returns (bool) {
        return doctor_role.has(d_id);
    }

    function checkPatient(address p_id) public view returns (bool) {
        return patient_role.has(p_id);
    }

    // retrive the doctor ipfs hash for that given doctor id
    function doctorInformation(address id) public view returns (string memory) {
        return doctorMap[id].doctor_ipfs_hash;
    }

    // retrive the patient ipfs hash for the given patient id
    function patientInformation(address id) public view returns (string memory) {
        return patientMap[id].patient_ipfs_hash;
    }

    // retriving an array of doctor struct, meaning retriveing the doctor id and ipfs hash (the struct contains the id and hash)
    function allDoctorsList() public view returns (Doctor[] memory) {
        Doctor[] memory allDoctors = new Doctor[](allDoctorList.length); //creating temporary array

        uint256 i = 0;

        for (i = 0; i < allDoctorList.length; i++) {
            if (doctor_role.has(allDoctorList[i])) {
                allDoctors[i] = doctorMap[allDoctorList[i]]; //filling alldocs with the addresses in alldocslist
            }
        }

        return allDoctors;
    }

    // retriving an array of patient struct, meaning retriveing the patient id and ipfs hash
    function allPatientsList() public view returns (Patient[] memory) {
        Patient[] memory allPatients = new Patient[](allPatientList.length); //creating temporary array

        uint256 i = 0;

        for (i = 0; i < allPatientList.length; i++) {
            if (patient_role.has(allPatientList[i])) {
                allPatients[i] = patientMap[allPatientList[i]]; //filling allpat with the addresses in allpatlist
            }
        }

        return allPatients;
    }

    // adding in the medical record struct which is mapped with patient id
    function addMedicalRecord(address patid, string memory pathash) public {
        require(doctor_role.has(msg.sender), "Only doctors can add records");

        MedicalRecords storage medrecord = recordMap[patid];
        medrecord.medical_ipfs_hash = pathash;
    }

    // viewing the medical record which is mapped with patient id, returns the medical record ipfs hash
    function viewMedicalRecord(address patid) public view returns (string memory)
    {
        return recordMap[patid].medical_ipfs_hash;
    }


    //removing the doctor role 
    function deleteDoctor(address docid) public {
        
            require(checkDoctor(docid), "Invalid doctor address");
            uint256 j = 0;
            address[] memory temp = new address[](allDoctorList.length - 1);
            for (uint256 i = 0; i < allDoctorList.length; i++) {
                if (allDoctorList[i] != docid) {
                    temp[j++] = allDoctorList[i];
                }
            }
            doctor_role.remove(docid);
            allDoctorList = temp;
        }


    //removing the patient role 
    function deletePatient(address patid) public {  

        require(checkPatient(patid), "Invalid patient address");
        uint256 j = 0;
        address[] memory temp = new address[](allPatientList.length - 1);
        for (uint256 i = 0; i < allPatientList.length; i++) {
            if (allPatientList[i] != patid) {
                temp[j++] = allPatientList[i];
            }
        }
        patient_role.remove(patid);
        allPatientList = temp;

}
}
