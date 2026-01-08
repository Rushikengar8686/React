

const ChlidComp = (Props) => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h4> Wel-come to Reuseable Comp -{Props.fName}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <select name="" id="" className='form-select' onChange={Props.changeEvent}>
                            <option>Select option</option>
                            {
                                Props.city.map((item,index)=>{
                                    return(
                                        
                                        <option value={item} >{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChlidComp;