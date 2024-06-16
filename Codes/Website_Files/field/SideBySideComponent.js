import React, { useState } from 'react';
import DiseaseDescription from './DiseaseDesc';
import ImageUploader from './ImageUploader';
import './styles.css';

function SideBySideComponents() {
  const [status, setStatus] = useState('Null'); // default status
  const [diseaseType, setDiseaseType] = useState('Null'); // default disease type
  const [imageName, setImageName] = useState('Unknown'); // default image name

  return (
    <div className="sideBySideContainer">
      <div style={{marginTop:"0vh"}}>
        <ImageUploader 
          className="imageUploader" 
          setImageName={setImageName} 
          setStatus={setStatus} 
          setDiseaseType={setDiseaseType} 
        />
      </div>
      <DiseaseDescription 
        className="diseaseDescription"
        status={status}
        setStatus={setStatus}
        diseaseType={imageName}
        setDiseaseType={setDiseaseType}
      />
    </div>
  );
}

export default SideBySideComponents;
