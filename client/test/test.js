const EHR = artifacts.require("EHR")

contract("EHR", (accounts) => {

// assigning Ethereum accounts from available 
const admin = accounts[0];
const doctor = accounts[1];
const patient = accounts[2];

it("Test 1: Add a Doctor", async () => {
    
    //creating a new instance everytime
    const ehr = await EHR.new({ from: admin }); //deploy everytime, should be done by admin
    const doctor_ipfs_hash = "doctor_ipfs_hash";
    await ehr.addDoctor(doctor, doctor_ipfs_hash, { from: admin }); //only admin can add a doctor which is specified by "from"
    assert(await ehr.isDoctor(doctor), "Doctor");
});

it("Test 2: Add a Patient", async () => {

    //creating a new instance everytime
    const ehr = await EHR.new({ from: admin }); //deploy everytime, should be done by admin
    const patient_ipfs_hash = "patient_ipfs_hash";
    await ehr.addPatient(patient, patient_ipfs_hash, { from: admin }); //only admin can add a patient which is specified by "from"
    assert(await ehr.isPatient(patient), "Patient");
});

it("Test 3: Add a Medical Record", async () => {

    //creating a new instance everytime
    const ehr = await EHR.new({ from: admin }); //deploy everytime, should be done by admin

    const doctor_ipfs_hash = "doctor_ipfs_hash";
    await ehr.addDoctor(doctor, doctor_ipfs_hash, { from: admin }); //adding a test doctor

    const patient_ipfs_hash = "patient_ipfs_hash";
    await ehr.addPatient(patient, patient_ipfs_hash, { from: admin }); // adding a test patient

    const medical_ipfs_hash = "medical_ipfs_hash"
    await ehr.addMedicalRecord(patient, medical_ipfs_hash, { from: doctor }); //only doctor can add medical record for patient
    assert(await ehr.viewMedicalRecord(patient), "Medical record");


});

it("Test 4: Delete a Doctor", async () => {

    //creating a new instance everytime
    const ehr = await EHR.new({ from: admin }); //deploy everytime, should be done by admin
    const doctor_ipfs_hash = "doctor_ipfs_hash";
    await ehr.addDoctor(doctor, doctor_ipfs_hash, { from: admin }); //adding a test doctor

    await ehr.deleteDoc(doctor, { from: admin });
    assert(!(await ehr.isDoctor(doctor), false));

});

it("Test 5: Delete a Patient", async () => {

    //creating a new instance everytime
    const ehr = await EHR.new({ from: admin }); //deploy everytime, should be done by admin
    const patient_ipfs_hash = "patient_ipfs_hash";
    await ehr.addPatient(patient, patient_ipfs_hash, { from: admin }); // adding a test patient

    await ehr.deletePat(patient, { from: admin });
    assert(!(await ehr.isPatient(patient), false));
});

})