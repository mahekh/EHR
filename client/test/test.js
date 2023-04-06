const EHR = artifacts.require("EHR")

contract("EHR", (accounts) => {

// The contract function provides accounts which is an array that provides accounts to write tests
// assigning Ethereum accounts from available accounts, basically assigning id
const admin_id = accounts[0];
const doctor_id = accounts[1];
const patient_id = accounts[2];

it("Test 1: Add a Doctor", async () => {
    
    //creating a new instance everytime
    const ehr = await EHR.new({ from: admin_id }); //deploy everytime, should be done by admin
    const doctor_ipfs_hash = "127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935";
    await ehr.addDoctor(doctor_id, doctor_ipfs_hash, { from: admin_id }); //only admin can add a doctor which is specified by "from"
    assert(await ehr.isDoctor(doctor_id), true, "Doctor not added");
});

it("Test 2: Add a Patient", async () => {

    //creating a new instance everytime
    const ehr = await EHR.new({ from: admin_id }); //deploy everytime, should be done by admin
    const patient_ipfs_hash = "146a7fbda51a450e92935c290a8e136275256b8e3d8f58a68b3c22df2cada695";
    await ehr.addPatient(patient_id, patient_ipfs_hash, { from: admin_id }); //only admin can add a patient which is specified by "from"
    assert(await ehr.isPatient(patient_id), true, "Patient not added");
});

it("Test 3: Add a Medical Record", async () => {

    //creating a new instance everytime
    const ehr = await EHR.new({ from: admin_id }); //deploy everytime, should be done by admin

    const doctor_ipfs_hash = "127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935";
    await ehr.addDoctor(doctor_id, doctor_ipfs_hash, { from: admin_id }); //adding a test doctor

    const patient_ipfs_hash = "146a7fbda51a450e92935c290a8e136275256b8e3d8f58a68b3c22df2cada695";
    await ehr.addPatient(patient_id, patient_ipfs_hash, { from: admin_id }); // adding a test patient

    const medical_ipfs_hash = "124d5fdae54a180e27495a29a6e136275156a8e3e8f59a62b3c28df2fada92a5"
    await ehr.addMedicalRecord(patient_id, medical_ipfs_hash, { from: doctor_id }); //only doctor can add medical record for patient
    assert(await ehr.viewMedicalRecord(patient_id), medical_ipfs_hash, "Medical record not added");


});

it("Test 4: Delete a Doctor", async () => {

    //creating a new instance everytime
    const ehr = await EHR.new({ from: admin_id }); //deploy everytime, should be done by admin
    const doctor_ipfs_hash = "127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935";
    await ehr.addDoctor(doctor_id, doctor_ipfs_hash, { from: admin_id }); //adding a test doctor

    await ehr.deleteDoc(doctor_id, { from: admin_id });
    assert(!(await ehr.isDoctor(doctor_id)), true, "Doctor not deleted");

});

it("Test 5: Delete a Patient", async () => {

    //creating a new instance everytime
    const ehr = await EHR.new({ from: admin_id }); //deploy everytime, should be done by admin
    const patient_ipfs_hash = "146a7fbda51a450e92935c290a8e136275256b8e3d8f58a68b3c22df2cada695";
    await ehr.addPatient(patient_id, patient_ipfs_hash, { from: admin_id }); // adding a test patient

    await ehr.deletePat(patient_id, { from: admin_id });
    assert(!(await ehr.isPatient(patient_id)), true, "Patient not deleted");
});
})