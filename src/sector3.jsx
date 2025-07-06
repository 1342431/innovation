import { useState } from "react";

const Sector3 = () => {
    const [selectedCircles, setSelectedCircles] = useState(['c13', 'c14']);

    const handleCircleClick = (clickedCircle) => {
        if (clickedCircle === 'c13' || clickedCircle === 'c14') {
            setSelectedCircles(['c13', 'c14'])
        } else {
            const circleNum = parseInt(clickedCircle.replace('c', ''));
            setSelectedCircles([clickedCircle, `c${13-circleNum}`])
        }
    }

    return (
        <div id='sector3'>
            <div id='column1' className="sector3Columns">
                <div className='circle' id="c1" style={{ backgroundColor: selectedCircles.includes('c1') ? 'purple' : '' }} onClick={() => handleCircleClick('c1')}></div>
            </div>
            <div id='column2' className="sector3Columns">
                <div className='circle' id="c2" style={{ backgroundColor: selectedCircles.includes('c2') ? 'purple' : '' }} onClick={() => handleCircleClick('c2')}></div>
            </div>
            <div id='column3' className="sector3Columns">
                <div className='circle' id="c3" style={{ backgroundColor: selectedCircles.includes('c3') ? 'purple' : '' }} onClick={() => handleCircleClick('c3')}></div>
            </div>
            <div id='column4' className="sector3Columns">
                <div className='circle' id="c4" style={{ backgroundColor: selectedCircles.includes('c4') ? 'purple' : '' }} onClick={() => handleCircleClick('c4')}></div>
            </div>
            <div id='column5' className="sector3Columns">
                <div className='circle' id="c5" style={{ backgroundColor: selectedCircles.includes('c5') ? 'purple' : '' }} onClick={() => handleCircleClick('c5')}></div>
            </div>
            <div id='column6' className="sector3Columns">
                <div className='circle' id="c6" style={{ backgroundColor: selectedCircles.includes('c6') ? 'purple' : '' }} onClick={() => handleCircleClick('c6')}></div>
            </div>
            <div id='column7' className="sector3Columns">
                <div className='circle' id="c13" style={{ backgroundColor: selectedCircles.includes('c13') ? 'purple' : '' }} onClick={() => handleCircleClick('c13')}></div>
                <div className='circle' id="c14" style={{ backgroundColor: selectedCircles.includes('c14') ? 'yellow' : '' }} onClick={() => handleCircleClick('c14')}></div>
            </div>
            <div id='column8' className="sector3Columns">
                <div className='circle' id="c7" style={{ backgroundColor: selectedCircles.includes('c7') ? 'yellow' : '' }} onClick={() => handleCircleClick('c7')}></div>
            </div>
            <div id='column9' className="sector3Columns">
                <div className='circle' id="c8" style={{ backgroundColor: selectedCircles.includes('c8') ? 'yellow' : '' }} onClick={() => handleCircleClick('c8')}></div>
            </div>
            <div id='column10' className="sector3Columns">
                <div className='circle' id="c9" style={{ backgroundColor: selectedCircles.includes('c9') ? 'yellow' : '' }} onClick={() => handleCircleClick('c9')}></div>
            </div>
            <div id='column11' className="sector3Columns">
                <div className='circle' id="c10" style={{ backgroundColor: selectedCircles.includes('c10') ? 'yellow' : '' }} onClick={() => handleCircleClick('c10')}></div>
            </div>
            <div id='column12' className="sector3Columns">
                <div className='circle' id="c11" style={{ backgroundColor: selectedCircles.includes('c11') ? 'yellow' : '' }} onClick={() => handleCircleClick('c11')}></div>
            </div>
            <div id='column13' className="sector3Columns">
                <div className='circle' id="c12" style={{ backgroundColor: selectedCircles.includes('c12') ? 'yellow' : '' }} onClick={() => handleCircleClick('c12')}></div>
            </div>
        </div>
    )
}

export default Sector3;