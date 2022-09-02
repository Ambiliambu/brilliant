import React from 'react'
import Header from '../components/Header'

export default function Payment() {
    return (
        <div>
            <Header/>
        <div className='container '>
            <div>
                <h2 style={{ color: "darkcyan" }} className="text-center mt-2">Payment</h2>
            </div>
            
            <div className="col-md-12 ">
                <div className=" border p-3">
                    <div className="header h4">Course You Choose : </div>
                    {/* <div className="row item ml-3">
                        <div className="col-4 align-self-center">
                            <div className="row text-muted">◉ Plus Two</div>
                            <div className="row text-muted">Physics</div>

                        </div>
                        <div className="col-8">
                            <div className="row"><b>₹ 2500</b></div>
                            <div className="row"></div>
                        </div>
                    </div>
                    <div className="row item ml-3 mt-2">
                        <div className="col-4 align-self-center">

                                <div className="row text-muted">◉ Plus Two</div>
                                <div className="row text-muted">chemistry</div>
                        </div>
                        <div className="col-8">
                            <div className="row"><b>₹ 2500</b></div>
                            <div className="row"></div>
                        </div>
                    </div> */}
                    <hr />
                   
                    <div className="row lower">
                        <div className="col text-left"><b>Total to pay</b></div>
                        <div className="col text-right"><b> ₹ 5000</b></div>
                    </div>
                    <div className="row lower">
                        {/* <div className="col text-left"><a href="#"><u>Add promo code</u></a></div> */}
                    </div>
                    <button type='submit' className="btn btn-primary mt-3">Place order</button>
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}

            <div>
            </div>
            {/* </div> */}
        </div>
        </div>
    )
}
