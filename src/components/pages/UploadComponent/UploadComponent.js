import React, { useCallback, useEffect, useState } from 'react';
import Papa from 'papaparse';
import { useDispatch } from 'react-redux';
import { setHeatmapData } from '../../../redux/actions/heatmapActions';
import { useNavigate } from 'react-router-dom';
import { toastifyMessage } from '../../../utils/helper';
import { auth } from "../Login/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";

const UploadComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
 

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvData = e.target.result;
        const parsedData = Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
        });
        
        
        
        const requiredData = parsedData.data.map((row) => [
          parseInt(row.amount, 10)  
        ]).filter(amount => !isNaN(amount[0])); 
        
        const groupedData = [];
        for (let i = 0; i < requiredData.length; i += 5) {
          groupedData.push(requiredData.slice(i, i + 5));
        }

        
        dispatch(setHeatmapData(groupedData));
        // toastifyMessage("File Uploaded Successfully", "success")
        setTimeout(() => {
          navigate('/heatmaps');
        }, 2000);
      };

      reader.readAsText(file);
    } else {
      console.error('No file selected');
    }
  }, [dispatch, navigate]);

  return (
    <div>
     
      <div className="upload-box">
        <div className="modal-header">
          
        </div>
        <div className="modal-body">
          <h2 className="modal-title">Upload a file</h2>
          <p className="modal-description">Attach the file below</p>
          <button className="upload-area">
            <span className="upload-area-icon">
            
              <g id="files-new" clip-path="url(#clip-files-new)">
                
              </g>
            
            </span>
            <input type="file" onChange={handleFileUpload} accept=".csv" className="filepond" />
            <span className="upload-area-title">Drag file(s) here to upload.</span>
            <span className="upload-area-description">
              Alternatively, you can select a file by <br/><strong>clicking here</strong>
            </span>
          </button>
        </div>
      <div className="modal-footer">
     
       
      </div>
      </div>
    </div>
  );
};

export default UploadComponent;
