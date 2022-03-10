import React, {useState, useEffect} from 'react';

//let copyIndex= 0;
function Slides({slides}) {
    const [currentSlide, setCurrentSlide]= useState(slides[0])
    const [index, setIndex]= useState(0)
    const [isClicked, setIsClicked]= useState(false);

    const handleClick= (e)=>{
        //index++
        if(e.target.data-testid.includes('next')){
            let copyIndex= index;
            if(index === slides.length - 1){
                copyIndex = 0;
            }
            copyIndex += 1;
            setIndex(copyIndex);
            setIsClicked(true);
        }
        if(e.target.data-testid.includes('prev')){
            let copyIndex= index;
            if(index === 0){
                copyIndex = slides.length - 1
            }
            copyIndex -= 1;
            setIndex(copyIndex);
            setIsClicked(true)
        }
        if(e.target.data-testid.includes('restart')){
            setIndex(0);
            setIsClicked(true)
        }
        
    }

    useEffect(()=>{
        setCurrentSlide(slides[index])
    }, [index])


    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick= {handleClick} disabled= {isClicked && index === 0} >Restart</button>
                <button data-testid="button-prev" className="small" onClick= {handleClick} disabled= {index === 0}>Prev</button>
                <button data-testid="button-next" className="small" onClick= {handleClick} disabled= {index === slides.length - 1}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
