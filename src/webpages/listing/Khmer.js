import React, {useEffect, useState} from 'react';
import { getBooks } from '../../webservice';

function KhmerBook() {

    const[books,setBooks] =  useState([]); 
    const[loading, setLoading] = useState(false);
    const[showModal, setShowModal] = useState({});

    useEffect(() => {
        setLoading(true);
        let api = '/KH';
        getBooks(api) 
        .then(res => {
            if(res.status === 200) {
                setBooks(res.data.data);    
            }
        })
        .catch(function(error) {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    },[]);

    const getModal = (value) => {
        const api = `/book/${value}`;
        getBooks(api)
        .then(res => {
            setShowModal(res.data.data);
        })
    }
    console.log(showModal);
    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    {books.map((item) => (
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='card m-4' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', border:'none'}}>
                                <div className='card-body' key={item.id}>
                                    <h2 className='text-center'>{item.title}</h2>
                                    <hr></hr>
                                    <img src={item.image} alt="book" style={{display:'block', marginLeft:'auto', marginRight:'auto',width:'100%'}} />
                                </div>
                                <div className='container m-2'>  
                                    <button className='btn btn-primary' data-toggle="modal" data-target="#exampleModal" onClick={() => getModal(item.id)}>Detail</button>
                                </div>
                            </div> 
                        </div> 
                    ))}
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className='container'>
                            <div>
                                <img src={showModal.image} style={{display:'block', marginLeft:'auto', marginRight:'auto',width:'100%'}} />
                            </div>
                            <hr></hr>
                            <strong>Title: </strong>{showModal.title}
                            <hr></hr>
                            <strong>Author: </strong> {showModal.author}
                            <hr></hr>
                            <strong>Price: </strong> {showModal.price} $
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>   
    );
};
export default KhmerBook;