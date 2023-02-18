import React from 'react'
import "../styles/ViewReport.css";

function ViewReport() {
  return (
    <>
        <div className='display-medical'>
            <div className='med-title'>
                <h2>Patient Medical Record</h2>
            </div>

            <div className='diagnosis'>
                <h3># Vitals</h3>
            </div>

            <div style={{display: 'flex'}}>
                <div className='display-weight'>
                    <p>Weight: 80 Kgs</p>
                </div>

                <div className='display-height'>
                    <p>Height: 180 cm</p>
                </div>

                <div className='display-bp'>
                    <p>Blood Pressure: 80/110</p>
                </div>
            </div>


           

            <div className='diagnosis' style={{display: 'grid'}}>
                <h3># Diagnosis</h3>
            </div>

            <div className='display-diagnosis'>
                <p>fever, cold</p>
            </div>

            

            <div className='medications'>
                <h3># Medications</h3>
            </div>

            <div className='medication-1' style={{display: 'flex'}}>

                <div className='display-med1'>
                    <p>Medicine 1</p>
                </div>

                <div className='display-freq1'>
                    <p>Frequency: 1-1-1</p>
                </div>

                <div className='display-days1'>
                    <p>Days: 2</p>
                </div>

            </div>

            <div className='medication-2' style={{display:'flex'}}>
                    <div className='display-med2'>
                        <p>Medicine 1</p>
                    </div>

                    <div className='display-freq2'>
                        <p>Frequency: 1-1-1</p>
                    </div>

                    <div className='display-days2'>
                        <p>Days: 2</p>
                    </div>
            
            </div>

            <div className='medications'>
                <h3># Recommended Clinical Test</h3>
            </div>

            <div className='display-test'>
                <p>Blood Test</p>
            </div>

            <div className='medications'>
                <h3># Follow Up</h3>
            </div>

            <div className='display-test'>
                <p>After 1 week</p>
            </div>

        </div>
    
    </>
  )
}

export default ViewReport