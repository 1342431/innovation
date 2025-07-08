import { useState } from "react";

const Sector3App2 = () => {
    const [selectedCircles1, setSelectedCircles1] = useState(['c13']);
    const [selectedCircles2, setSelectedCircles2] = useState(['c14']);

    const handleCircleClick = (clickedCircle) => {
        const circleNum = parseInt(clickedCircle.replace('c', ''));
        if (clickedCircle === 'c13') {
            setSelectedCircles1(['c13'])
        } else if (clickedCircle === 'c14') {
            setSelectedCircles2(['c14'])
        } else if (circleNum > 0 && circleNum <=6) {
            setSelectedCircles1(`c${circleNum}`)
        } else if (circleNum > 6 && circleNum <= 12 ) {
            setSelectedCircles2(`c${circleNum}`)
        } else {
            selectedCircles1([]);
            selectedCircles2([]);
        }
    }

    return (
        <div id='sector3'>
            <div id='column1' className="sector3Columns">
                <div className='circle' id="c1" style={{ backgroundColor: selectedCircles1.includes('c1') ? 'red' : '' }} onClick={() => handleCircleClick('c1')}></div>
            </div>
            <div id='column2' className="sector3Columns">
                <div className='circle' id="c2" style={{ backgroundColor: selectedCircles1.includes('c2') ? 'red' : '' }} onClick={() => handleCircleClick('c2')}></div>
            </div>
            <div id='column3' className="sector3Columns">
                <div className='circle' id="c3" style={{ backgroundColor: selectedCircles1.includes('c3') ? 'red' : '' }} onClick={() => handleCircleClick('c3')}></div>
            </div>
            <div id='column4' className="sector3Columns">
                <div className='circle' id="c4" style={{ backgroundColor: selectedCircles1.includes('c4') ? 'red' : '' }} onClick={() => handleCircleClick('c4')}></div>
            </div>
            <div id='column5' className="sector3Columns">
                <div className='circle' id="c5" style={{ backgroundColor: selectedCircles1.includes('c5') ? 'red' : '' }} onClick={() => handleCircleClick('c5')}></div>
            </div>
            <div id='column6' className="sector3Columns">
                <div className='circle' id="c6" style={{ backgroundColor: selectedCircles1.includes('c6') ? 'red' : '' }} onClick={() => handleCircleClick('c6')}></div>
            </div>
            <div id='column7' className="sector3Columns">
                <div className='circle' id="c13" style={{ backgroundColor: selectedCircles1.includes('c13') ? 'red' : '' }} onClick={() => handleCircleClick('c13')}></div>
                <div className='circle' id="c14" style={{ backgroundColor: selectedCircles2.includes('c14') ? 'yellow' : '' }} onClick={() => handleCircleClick('c14')}></div>
            </div>
            <div id='column8' className="sector3Columns">
                <div className='circle' id="c7" style={{ backgroundColor: selectedCircles2.includes('c7') ? 'yellow' : '' }} onClick={() => handleCircleClick('c7')}></div>
            </div>
            <div id='column9' className="sector3Columns">
                <div className='circle' id="c8" style={{ backgroundColor: selectedCircles2.includes('c8') ? 'yellow' : '' }} onClick={() => handleCircleClick('c8')}></div>
            </div>
            <div id='column10' className="sector3Columns">
                <div className='circle' id="c9" style={{ backgroundColor: selectedCircles2.includes('c9') ? 'yellow' : '' }} onClick={() => handleCircleClick('c9')}></div>
            </div>
            <div id='column11' className="sector3Columns">
                <div className='circle' id="c10" style={{ backgroundColor: selectedCircles2.includes('c10') ? 'yellow' : '' }} onClick={() => handleCircleClick('c10')}></div>
            </div>
            <div id='column12' className="sector3Columns">
                <div className='circle' id="c11" style={{ backgroundColor: selectedCircles2.includes('c11') ? 'yellow' : '' }} onClick={() => handleCircleClick('c11')}></div>
            </div>
            <div id='column13' className="sector3Columns">
                <div className='circle' id="c12" style={{ backgroundColor: selectedCircles2.includes('c12') ? 'yellow' : '' }} onClick={() => handleCircleClick('c12')}></div>
            </div>
        </div>
    )
}

export default Sector3App2;