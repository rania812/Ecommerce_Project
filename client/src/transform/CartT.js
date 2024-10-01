/*import React from "react";
import "./CartT.css";
//import ReactDOM from 'react-dom';


const CartT = ({ props }) => {
    const img1 = "https://img.freepik.com/free-photo/fashion-models-paper-cut-out-style_23-2149374793.jpg?size=626&ext=jpg";
    const img2 = "https://t3.ftcdn.net/jpg/04/90/47/04/360_F_490470420_5CldUGjUELNHOJ2bkVOsskTiAYZmEV0q.jpg";
    const price = 20;
    return (
        <div className="card">
            <div className="image">
                <span>New Season</span>
                <img
                    src={img1}
                    alt=""
                    className="mainImg"
                />
                <img
                    src={img2}
                    alt=""
                    className="secondImg"
                />
            </div>
            <div className="prices">
                <h3>${price + 20}</h3>
                <h3>${price}</h3>
            </div>
        </div>
    );
};

export default CartT;

 */

import React from "react";
import "./CartT.css";

const data = [
    {
        id: 1,
        img1: "https://img.freepik.com/free-photo/fashion-models-paper-cut-out-style_23-2149374793.jpg?size=626&ext=jpg",
        img2: "https://t3.ftcdn.net/jpg/04/90/47/04/360_F_490470420_5CldUGjUELNHOJ2bkVOsskTiAYZmEV0q.jpg",
        price: 20
    },
    {
        id: 2,
        img1: "https://imgs.search.brave.com/-vErZE3Ut5FGoD4Xwm29JP2qswrEtKBFTjlzhVoNbOs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/OTA3MjExMi9waG90/by9zdHlsaXNoLXdv/bWFuLWluLWZyb250/LW9mLXBsYWluLWJh/Y2tncm91bmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWZp/SzY1MmEzc2V4TVpW/QmU0VVZjcTNJRi1R/aWRRb0dKNmlvblNs/ejFJMm89",
        img2: "https://imgs.search.brave.com/ShoIoAFmS82F6HeTq2zoATKjKgIvtSWu_vP-A7K3b6o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/MjAxNjYzOS9waG90/by9mYXNoaW9uYWJs/ZS15b3VuZy13b21h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NzFXY3FFbVBK/SW9rLXNtdjQ1NDl5/ZTBWdV9NbDR3MzlE/RXNxa0U4VDBFdz0",
        price: 30
    },
    {
        id: 3,
        img1: "https://imgs.search.brave.com/qlv_BDQf0BQAV0poXoBmzynseGcJo8NxCSSS-l7KJnw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/MzA5MDg1OC9waG90/by9zbWlsaW5nLWdp/cmwtaW4tdHJlbmR5/LWNsb3RoZXMtcG9z/aW5nLWF0LXN0dWRp/by5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SGc5aHZLcWtp/di1XaTAzcndsTzVS/VnMtM3dTU3d2MXJr/SHh6a1lxVEVaRT0",
        img2: "https://imgs.search.brave.com/H2KekXNC9j6Wnlky1n-JSRI6RyMHo5xSBOIoV6Y0ib4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/NzYxNTk4Ny9waG90/by9oYXBweS1mYXNo/aW9uYWJsZS1tb2Rl/bC1vbi13aGl0ZS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1V/R3huUmMxZW5FV1hp/R09neThPZjRmbFp6/TU9PbzBEcE9pM3lm/bWdfYWxjPQ",
        price: 25
    },
    {
        id: 4,
        img1: "https://imgs.search.brave.com/in20TZz7BoYCdQoGoO0CkusdMXE9RcyUDc3exuPde0E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NDI3Mjk1OC9waG90/by9iZWF1dGlmdWwt/c21pbGluZy1naXJs/LXdpdGgtY3VybHkt/aGFpcnN0eWxlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1W/OGhxTjh4X3RyWnVi/OC0xZXAxRjNYQml4/QzREblJlWFlmc3Fx/dzc2Q3g4PQ",
        img2: "https://media.istockphoto.com/id/1273828752/photo/young-woman-wearing-raincoat.jpg?s=612x612&w=0&k=20&c=EJ4i1Uk5yPVEX4A8-UkP3eRX352cdgllSL3yBRMXmh4=",
        price: 35
    }
];

const CartT = () => {
    return (
        <div className="row">
            {data.map((item) => (
                <div key={item.id} className="card">
                    <div className="image">
                        <span>New Season</span>
                        <img
                            src={item.img1}
                            alt=""
                            className="mainImg"
                        />
                        <img
                            src={item.img2}
                            alt=""
                            className="secondImg"
                        />
                    </div>
                    <div className="prices">
                        <h3>${item.price + 20}</h3>
                        <h3>${item.price}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartT;

 