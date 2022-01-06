import React from "react";
import {SRLWrapper} from "simple-react-lightbox";
import './page.scss';
// import Pic1 from '../img/_DSC0083.JPG'
// import Pic2 from '../img/_DSC0008.JPG'
// import Pic3 from '../img/_DSC0011.JPG'
// import Pic4 from '../img/_DSC0143.JPG'
// import Pic5 from '../img/_DSC0245.JPG'
// import Pic6 from '../img/_DSC0091.JPG'
// import {Redirect} from 'react-router-dom';

const Page1 =(props)=>{
    console.log(`Данные ${props.location.pagesContent}`); // Наши переданные данные
// console.log('бла бла')
    //Но учтите, что они будут доступны только, при переходе по этой ссылке.
    //Если страницу перезагрузить, то получим - undefined.
    //Это решается редиректом обратно, если нет пропса:
    // if (!props.location.pagesContent) return <Redirect to="/firstpage" />;

    return <div className="page">
        <SRLWrapper>
                {props.location.pagesContent}
        </SRLWrapper>
    </div>

}
export default Page1;
