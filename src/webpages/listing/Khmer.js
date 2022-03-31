import React from 'react';
import book01 from '../../assests/01.jpg';
import book02 from '../../assests/02.jpg';
import book03 from '../../assests/03.jpg';
import book04 from '../../assests/07.jpg';
import book05 from '../../assests/05.jpg';
import book06 from '../../assests/06.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
const KhmerBook = () => {
    return (
        <container>
            <div className="row">
                <div className="col-4">
                    <Link to={'/book01'}>
                        <div className="card">
                            <div className="title"><h3 className="text-center">សុិទ្ធ កុមារភាពដែលត្រូវគេដកហូត</h3></div>
                                <div className="card-body">
                                    <img src={book01} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                                </div>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to={'/book02'}>
                        <div className="card">
                            <div className="title"><h3 className="text-center">មឃ មាណព</h3></div>
                            <a href=''>
                                <div className="card-body">
                                    <img src={book02} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                                </div>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to={'/book03'}>
                        <div className="card">
                            <div className="title"><h3 className="text-center">ព្រះវេសន្តរ</h3></div>
                            <a href=''>
                                <div className="card-body">
                                    <img src={book03} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                                </div>
                            </a>
                        </div>
                    </Link>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-4">
                    <Link to={'/book04'}>
                        <div className="card">
                            <div className="title"><h3 className="text-center">អាគ្រក់ ឬ ក្រមិល</h3></div>
                            <a href=''>
                                <div className="card-body">
                                    <img src={book04} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                                </div>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to={'/book05'}>
                        <div className="card">
                            <div className="title"><h3 className="text-center">ត្រពាំងបិសាច</h3></div>
                            <a href=''>
                                <div className="card-body">
                                    <img src={book05} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                                </div>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to={'/book06'}>
                        <div className="card">
                            <div className="title"><h3 className="text-center">ស្បៃអតីតកាល</h3></div>
                            <a href=''>
                                <div className="card-body">
                                    <img src={book06} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                                </div>
                            </a>
                    </div>
                    </Link>
                </div>
            </div>
        </container>
    );
};
export default KhmerBook;