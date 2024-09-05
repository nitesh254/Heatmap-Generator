import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { HeatMapComponent } from '@syncfusion/ej2-react-heatmap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const HeatmapComponent = () => {
  const heatmapData = useSelector((state) => state?.heatmapReducer?.heatmapData);
  const heatmapRef = useRef(null);

  const getColorForValue = (value) => {
    if (value >= 0 && value <= 1000) {
      return '#00FF00'; // Green for values between 0-1000
    } else if (value > 1000 && value <= 5000) {
      return '#FFFF00'; // Yellow for values between 1000-5000
    } else if (value > 5000 && value <= 10000) {
      return '#FF0000'; // Orange for values between 5000-10000
    } else {
      return '#FF0000'; // Red for values above 10000
    }
  };
  const downloadPdf = () => {
    const heatmapContainer = heatmapRef.current;

   
    html2canvas(heatmapContainer).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;  
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

     
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
       
      pdf.save('heatmap.pdf');
    });
  };

  return (
    <div className='container-heatmap'>
      
      <div className='heatmap-container' ref={heatmapRef}>
        <HeatMapComponent
          id='heatmap-container'
          dataSource={heatmapData}
          xLabelMapping='x'
          yLabelMapping='y'
          paletteSettings={{
            palette: [
              { color: getColorForValue(0) },
              { color: getColorForValue(1000) },
              { color: getColorForValue(5000) },
              { color: getColorForValue(10000) },
            ],
          }}
          width='500px'
          height='500px'
          cellSettings={{
            border: {
              width: 1,
              color: '#ffffff',
            },
          }}
          style={{
            background: 'linear-gradient(#141e30, #243b55)',
            fontFamily: 'sans-serif',
            color: 'white',
          }}
          tooltipRender={(args) => {
            return {
              content: 'Amount: ' + args.yLabel + ', ' + args.xLabel + ' : ' + args.value,
            };
          }}
        />
      </div>
      <div className='info'>
      <div>  
          <button onClick={downloadPdf} className="login-button">Download as PDF</button>
      </div>
      <div>
        <div className='color-info'>Values between 0-1000 are represenred by color Green</div>
        <div className='color-info'>Values between 1000-5000 are represenred by color Yellow</div>
        <div className='color-info'>Values between 5000-10000 are represenred by color Red</div>
      </div>
      </div>
    </div>
  );
};

export default HeatmapComponent;
