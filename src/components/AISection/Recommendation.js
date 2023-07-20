import React, { useState } from 'react';
import ResultModal from './ResultModal';


const recommendations = (props) => {
    const [showResultModal, setShowResultModal] = useState(false);
    const handleResultClick = () => {
        setShowResultModal(true);
      };
    
      const handleCloseResultModal = () => {
        setShowResultModal(false);
      };
    

    return(
        <>
      <button onClick={handleResultClick}>View Result</button>
      {showResultModal && (
        <ResultModal result={result} onClose={handleCloseResultModal} />
      )}
    </>
          
    )
}