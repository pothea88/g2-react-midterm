import React from 'react';
import book01 from '../../assests/02.jpg';
import { Link } from 'react-router-dom';
export default function Book02() {
    return(
        <React.Fragment>
            
            <div className='container'>
                <Link to={'/khmerBook'}>
                    <button className='btn btn-outline btn-primary'>Back</button>
                </Link>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <div className='card mt-5' >
                            <div className='card-body'>
                                <img src={book01} alt="kh" style={{width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div className='container mt-5'>
                            <span><strong>Title:</strong> </span><span>មឃ មាណព</span><br></br>
                            <hr></hr>
                            <span><strong>Price: </strong></span><span>3$</span><br></br>
                            <hr></hr>
                            <span><strong>Author:</strong> </span><span>Tina</span><br></br>
                            <hr></hr>
                            <span><strong>Description:</strong> </span><span>ថ្ងៃទី៣០ ខែមីនា ឆ្នាំ២០២២ នេះ គឺ​ជា​ខួប​គម្រប់ ២៥ឆ្នាំ​នៃ​ហេតុការណ៍​គប់គ្រាប់បែក​ដៃ​លើ​ហ្វូង​បាតុករ​អហិង្សា នៅ​មុខ​អគារ​រដ្ឋសភា​ចាស់ ក្បែរ​ព្រះបរមរាជវាំង។ ក្រុម​គ្រួសារ​ជនរងគ្រោះ​នៅតែ​ទទូច​ដល់​រដ្ឋាភិបាល​ឱ្យ​នាំ​ខ្លួន​ជន​ប្រព្រឹត្ត និង​អ្នក​ពាក់ព័ន្ធ​យក​មក​ផ្ដន្ទា​ទោស​តាម​ផ្លូវ​ច្បាប់។
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}