import { useState } from "react";

const Sector2 = () => {
    const [selectedCircles, setSelectedCircles] = useState(['c2', 'c4', 'c6', 'c8', 'c10', 'c12', 'c14', 'c16', 'c18', 'c20', 'c22', 'c24', 'c26']);

    const handleCircleClick = (removeCircle, addCircle) => {
        const temp = selectedCircles.filter(f => f !== removeCircle);
        const newSelectedCircles = temp.concat(addCircle);
        setSelectedCircles(newSelectedCircles);
    }

    return (
        <div id='sector2'>
            <div id='column1' className="sectorColumns">
                <div className='circle' id="c1" style={{ backgroundColor: selectedCircles.includes('c1') ? '#81c784' : '' }} onClick={() => handleCircleClick('c2', 'c1')}></div>
                <div className='circle' id="c2" style={{ backgroundColor: selectedCircles.includes('c2') ? '#81c784' : '' }} onClick={() => handleCircleClick('c1', 'c2')}></div>
            </div>
            <div id='column2' className="sectorColumns">
                <div className='circle' id="c3" style={{ backgroundColor: selectedCircles.includes('c3') ? 'pink' : '' }} onClick={() => handleCircleClick('c4', 'c3')}></div>
                <div className='circle' id="c4" style={{ backgroundColor: selectedCircles.includes('c4') ? 'pink' : '' }} onClick={() => handleCircleClick('c3', 'c4')}></div>
            </div>
            <div id='column3' className="sectorColumns">
                <div className='circle' id="c5" style={{ backgroundColor: selectedCircles.includes('c5') ? '#64b5f6' : '' }} onClick={() => handleCircleClick('c6', 'c5')}></div>
                <div className='circle' id="c6" style={{ backgroundColor: selectedCircles.includes('c6') ? '#64b5f6' : '' }} onClick={() => handleCircleClick('c5', 'c6')}></div>
            </div>
            <div id='column4' className="sectorColumns">
                <div className='circle' id="c7" style={{ backgroundColor: selectedCircles.includes('c7') ? '#64b5f6' : '' }} onClick={() => handleCircleClick('c8', 'c7')}></div>
                <div className='circle' id="c8" style={{ backgroundColor: selectedCircles.includes('c8') ? '#64b5f6' : '' }} onClick={() => handleCircleClick('c7', 'c8')}></div>
            </div>
            <div id='column5' className="sectorColumns">
                <div className='circle' id="c9" style={{ backgroundColor: selectedCircles.includes('c9') ? '#ff8a65' : '' }} onClick={() => handleCircleClick('c10', 'c9')}></div>
                <div className='circle' id="c10" style={{ backgroundColor: selectedCircles.includes('c10') ? '#ff8a65' : '' }} onClick={() => handleCircleClick('c9', 'c10')}></div>
            </div>
            <div id='column6' className="sectorColumns">
                <div className='circle' id="c11" style={{ backgroundColor: selectedCircles.includes('c11') ? '#ff8a65' : '' }} onClick={() => handleCircleClick('c12', 'c11')}></div>
                <div className='circle' id="c12" style={{ backgroundColor: selectedCircles.includes('c12') ? '#ff8a65' : '' }} onClick={() => handleCircleClick('c11', 'c12')}></div>
            </div>
            <div id='column7' className="sectorColumns">
                <select id="operatorDropdown">
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
            </div>
            <div id='column8' className="sectorColumns">
                <div className='circle' id="c15" style={{ backgroundColor: selectedCircles.includes('c15') ? '#81c784' : '' }} onClick={() => handleCircleClick('c16', 'c15')}></div>
                <div className='circle' id="c16" style={{ backgroundColor: selectedCircles.includes('c16') ? '#81c784' : '' }} onClick={() => handleCircleClick('c15', 'c16')}></div>
            </div>
            <div id='column9' className="sectorColumns">
                <div className='circle' id="c17" style={{ backgroundColor: selectedCircles.includes('c17') ? 'pink' : '' }} onClick={() => handleCircleClick('c18', 'c17')}></div>
                <div className='circle' id="c18" style={{ backgroundColor: selectedCircles.includes('c18') ? 'pink' : '' }} onClick={() => handleCircleClick('c17', 'c18')}></div>
            </div>
            <div id='column10' className="sectorColumns">
                <div className='circle' id="c19" style={{ backgroundColor: selectedCircles.includes('c19') ? '#64b5f6' : '' }} onClick={() => handleCircleClick('c20', 'c19')}></div>
                <div className='circle' id="c20" style={{ backgroundColor: selectedCircles.includes('c20') ? '#64b5f6' : '' }} onClick={() => handleCircleClick('c19', 'c20')}></div>
            </div>
            <div id='column11' className="sectorColumns">
                <div className='circle' id="c21" style={{ backgroundColor: selectedCircles.includes('c21') ? '#64b5f6' : '' }} onClick={() => handleCircleClick('c22', 'c21')}></div>
                <div className='circle' id="c22" style={{ backgroundColor: selectedCircles.includes('c22') ? '#64b5f6' : '' }} onClick={() => handleCircleClick('c21', 'c22')}></div>
            </div>
            <div id='column12' className="sectorColumns">
                <div className='circle' id="c23" style={{ backgroundColor: selectedCircles.includes('c23') ? '#ff8a65' : '' }} onClick={() => handleCircleClick('c24', 'c23')}></div>
                <div className='circle' id="c24" style={{ backgroundColor: selectedCircles.includes('c24') ? '#ff8a65' : '' }} onClick={() => handleCircleClick('c23', 'c24')}></div>
            </div>
            <div id='column13' className="sectorColumns">
                <div className='circle' id="c25" style={{ backgroundColor: selectedCircles.includes('c25') ? '#ff8a65' : '' }} onClick={() => handleCircleClick('c26', 'c25')}></div>
                <div className='circle' id="c26" style={{ backgroundColor: selectedCircles.includes('c26') ? '#ff8a65' : '' }} onClick={() => handleCircleClick('c25', 'c26')}></div>
            </div>
        </div>
    )
}

export default Sector2;