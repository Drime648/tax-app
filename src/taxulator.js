import React from 'react';


const taxulator = ({i, j, k}) => {
	
    const taxer = (i, j, k) => {
        var percent = 0.0;
		if (i >= 0 && i <= j) {
			percent = i - (i * 0.10);
			 

		} else if (i >= (j + 1) && i <= 40125) {
			percent = (i * 0.12);
			 

		} else if (i >= 40125 && i <= 85525) {
			percent = (i * 0.22);
			 

		} else if (i >= 85526 && i <= 163000) {
			percent =  (i * 0.24);
			 

		} else if (i >= 163001 && i <= 207350) {
			percent = (i * 0.32);
			 

		} else if (i >= 207351 && i <= 518400) {
			percent = (i * 0.35);
			 
		} else if (i >= 518401) {
			percent = (i * 0.37);
			 
		}
		return percent;
    }



	return(
		<div>
            <p className = "measure center">your taxes are... ${taxer(i, j, k)}</p>
			
		</div>
	);
}

export default taxulator;