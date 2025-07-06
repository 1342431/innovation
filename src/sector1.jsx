import { useState } from "react";

const Sector1 = () => {
    const [selectedCircles, setSelectedCircles] = useState(['c2', 'c4', 'c6', 'c8', 'c10', 'c12', 'c16', 'c18', 'c20', 'c22', 'c24', 'c26']);

    const handleCircleClick = (removeCircle, addCircle) => {
        const temp = selectedCircles.filter(f => f !== removeCircle);
        const newSelectedCircles = temp.concat(addCircle);
        setSelectedCircles(newSelectedCircles);
    }

    return (
        <div id='sector1'>
            <div id='column1' className="sector1Columns">
                <div className='circle' id="c1" style={{ backgroundColor: selectedCircles.includes('c1') ? 'red' : '' }} onClick={() => handleCircleClick('c2', 'c1')}></div>
                <div className='circle' id="c2" style={{ backgroundColor: selectedCircles.includes('c2') ? 'red' : '' }} onClick={() => handleCircleClick('c1', 'c2')}></div>
            </div>
            <div id='column2' className="sector1Columns">
                <div className='circle' id="c3" style={{ backgroundColor: selectedCircles.includes('c3') ? 'red' : '' }} onClick={() => handleCircleClick('c4', 'c3')}></div>
                <div className='circle' id="c4" style={{ backgroundColor: selectedCircles.includes('c4') ? 'red' : '' }} onClick={() => handleCircleClick('c3', 'c4')}></div>
            </div>
            <div id='column3' className="sector1Columns">
                <div className='circle' id="c5" style={{ backgroundColor: selectedCircles.includes('c5') ? 'red' : '' }} onClick={() => handleCircleClick('c6', 'c5')}></div>
                <div className='circle' id="c6" style={{ backgroundColor: selectedCircles.includes('c6') ? 'red' : '' }} onClick={() => handleCircleClick('c5', 'c6')}></div>
            </div>
            <div id='column4' className="sector1Columns">
                <div className='circle' id="c7" style={{ backgroundColor: selectedCircles.includes('c7') ? 'red' : '' }} onClick={() => handleCircleClick('c8', 'c7')}></div>
                <div className='circle' id="c8" style={{ backgroundColor: selectedCircles.includes('c8') ? 'red' : '' }} onClick={() => handleCircleClick('c7', 'c8')}></div>
            </div>
            <div id='column5' className="sector1Columns">
                <div className='circle' id="c9" style={{ backgroundColor: selectedCircles.includes('c9') ? 'red' : '' }} onClick={() => handleCircleClick('c10', 'c9')}></div>
                <div className='circle' id="c10" style={{ backgroundColor: selectedCircles.includes('c10') ? 'red' : '' }} onClick={() => handleCircleClick('c9', 'c10')}></div>
            </div>
            <div id='column6' className="sector1Columns">
                <div className='circle' id="c11" style={{ backgroundColor: selectedCircles.includes('c11') ? 'red' : '' }} onClick={() => handleCircleClick('c12', 'c11')}></div>
                <div className='circle' id="c12" style={{ backgroundColor: selectedCircles.includes('c12') ? 'red' : '' }} onClick={() => handleCircleClick('c11', 'c12')}></div>
            </div>
            <div id='column7' className="sector1Columns">
                <div className='circle' id="c13" style={{marginTop: '15px'}}></div>
            </div>
            <div id='column8' className="sector1Columns">
                <div className='circle' id="c15" style={{ backgroundColor: selectedCircles.includes('c15') ? 'red' : '' }} onClick={() => handleCircleClick('c16', 'c15')}></div>
                <div className='circle' id="c16" style={{ backgroundColor: selectedCircles.includes('c16') ? 'red' : '' }} onClick={() => handleCircleClick('c15', 'c16')}></div>
            </div>
            <div id='column9' className="sector1Columns">
                <div className='circle' id="c17" style={{ backgroundColor: selectedCircles.includes('c17') ? 'red' : '' }} onClick={() => handleCircleClick('c18', 'c17')}></div>
                <div className='circle' id="c18" style={{ backgroundColor: selectedCircles.includes('c18') ? 'red' : '' }} onClick={() => handleCircleClick('c17', 'c18')}></div>
            </div>
            <div id='column10' className="sector1Columns">
                <div className='circle' id="c19" style={{ backgroundColor: selectedCircles.includes('c19') ? 'red' : '' }} onClick={() => handleCircleClick('c20', 'c19')}></div>
                <div className='circle' id="c20" style={{ backgroundColor: selectedCircles.includes('c20') ? 'red' : '' }} onClick={() => handleCircleClick('c19', 'c20')}></div>
            </div>
            <div id='column11' className="sector1Columns">
                <div className='circle' id="c21" style={{ backgroundColor: selectedCircles.includes('c21') ? 'red' : '' }} onClick={() => handleCircleClick('c22', 'c21')}></div>
                <div className='circle' id="c22" style={{ backgroundColor: selectedCircles.includes('c22') ? 'red' : '' }} onClick={() => handleCircleClick('c21', 'c22')}></div>
            </div>
            <div id='column12' className="sector1Columns">
                <div className='circle' id="c23" style={{ backgroundColor: selectedCircles.includes('c23') ? 'red' : '' }} onClick={() => handleCircleClick('c24', 'c23')}></div>
                <div className='circle' id="c24" style={{ backgroundColor: selectedCircles.includes('c24') ? 'red' : '' }} onClick={() => handleCircleClick('c23', 'c24')}></div>
            </div>
            <div id='column13' className="sector1Columns">
                <div className='circle' id="c25" style={{ backgroundColor: selectedCircles.includes('c25') ? 'red' : '' }} onClick={() => handleCircleClick('c26', 'c25')}></div>
                <div className='circle' id="c26" style={{ backgroundColor: selectedCircles.includes('c26') ? 'red' : '' }} onClick={() => handleCircleClick('c25', 'c26')}></div>
            </div>
        </div>
    )
}

export default Sector1;