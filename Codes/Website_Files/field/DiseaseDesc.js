import React, { useState, useEffect } from 'react';
import { FaVolumeUp } from 'react-icons/fa';

function DiseaseDescription({ status, setStatus, diseaseType, setDiseaseType }) {
  
  const diseases = ['APHIDS', 'BACTERIAL BLIGHT',  'TARGET SPOT', 'ARMY WORM', 'POWDERY MILDEW'];
  const healthy = ['HEALTHY'];
  const medicineInfo = {
    'APHIDS': 'Imidacloprid',
    'BACTERIAL BLIGHT': 'Propiconazole',
    'TARGET SPOT': 'Azoxystrobin',
    'ARMY WORM': 'Neonicotinoids',
    'POWDERY MILDEW': 'Tebuconazole'
  };

  const speak = (text) => {
    const textWithoutNumbers = text.replace(/\d/g, '');

    var msg = new SpeechSynthesisUtterance();
    msg.text = textWithoutNumbers;
    window.speechSynthesis.speak(msg);
  };

  useEffect(() => {
  
    let newStatus = 'Unknown'; // Default to 'Unknown'
    let newDiseaseType = diseaseType;

    if (healthy.includes(diseaseType)) {
      newStatus = 'Healthy';
      newDiseaseType = 'None';
    } else if (diseases.includes(diseaseType)) {
      newStatus = 'Diseased';
    }

    setStatus(newStatus);
    setDiseaseType(newDiseaseType); 
  }, [diseaseType, setStatus, setDiseaseType]); 
  
  return (
    <>
      <div className="diseaseDescriptionContainer" style={{ top: '20%', width: '32vw', borderRadius:"20px", height: '55%', background: 'White', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ display: 'flex', justifyContent: 'center', borderRadius:"20px", background: 'green', color: 'white' }}>Disease Detection</h1>
        <hr></hr>
        <div style={{ display: 'inline-block', alignItems: 'center' }}>
          <span style={{ display: 'inline-block', marginLeft: '1vw', marginTop: '25px' }}>
            <h2>Status:</h2>
          </span>
          <span style={{ display: 'inline-block' }}>
            <h3 style={{ color: status === 'Diseased' ? 'red' : 'green', marginLeft: '10px' }}>{status}</h3>
          </span>
          <br />
          <span style={{ display: 'flex', alignItems: 'center', marginLeft: '1vw' }}>
            <h2>Disease Type:</h2>
            <h3 style={{ color: 'red', margin: '5px' }}>
              {diseaseType === 'None' && status === 'Healthy' ? 'None' : diseaseType}
              <button
                style={{
                  color: 'orange',
                  marginLeft: '8px',
                  border: 'none',
                  outline: 'none',
                  padding: 0,
                  background: 'transparent',
                }}
                onClick={() => speak(diseaseType !== 'Unknown' ? diseaseType : "Unknown and no Image in database")}
              >
                <FaVolumeUp style={{ outline: 'none' }} />
              </button>
            </h3>
          </span>
          <br />
          <span style={{ display: 'inline-block', marginLeft: '1vw' }}>
            <h2>Medicine:</h2>
          </span>
          <br></br>
          <span style={{ display: 'inline-block' }}>
            <ul>
              <ol style={{ margin: '10px' }}>
                {diseases.map((disease, index) => (
                  <li key={index}>
                    {`For ${disease}: `}
                    <span style={{ color: 'blue' }}>
                      {medicineInfo[disease]}
                    </span>
                    <button
                      style={{
                        color: 'orange',
                        marginLeft: '8px',
                        border: 'none',
                        outline: 'none',
                        padding: 0,
                        background: 'transparent',
                      }}
                      onClick={() => speak(`medicine name of ${disease.toLowerCase()}: ${medicineInfo[disease]}`)}
                    >
                      <FaVolumeUp style={{ outline: 'none' }} />
                    </button>
                  </li>
                ))}
              </ol>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}

export default DiseaseDescription;

