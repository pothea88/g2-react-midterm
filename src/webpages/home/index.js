import React, {useEffect, useState} from 'react';
import { getBooks } from '../../webservice';
const Home = () => {
    const[books,setBooks] =  useState([]); 

    useEffect(() => {
        let api = '/KH';
        getBooks(api) 
        .then(res => {
            if(res.status === 200) {
                setBooks(res.data.data);    
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    },[]);
    return (
        <div>
            <div className="jumbotron" style={{height: '300px'}}>
                <div className="row">
                    <div className="col-6">
                        <img src='https://www.teacherready.org/wp-content/uploads/2017/03/books-and-books.jpg' style={{width: '300px', left: '50px'}}></img>
                    </div>
                    <div className="col-6">
                        <h4>Welcome To Books Store</h4>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>
            </div>

            {/* <div className="container"> */}
                <h3 className="text-center">Books</h3><br/>
                <div className='row'>
                    {books.map((item) => (
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='card m-4' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', border:'none'}}>
                                <div className='card-body' key={item.id}>
                                    <h2 className='text-center'>{item.title}</h2>
                                    <hr></hr>
                                    <img src={item.image} alt="book" style={{display:'block', marginLeft:'auto', marginRight:'auto',width:'100%'}} />
                                    <div className='mt-5'>
                                        <strong>Description: </strong> {item.description}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            {/* </div> */}
         
    </div>
    );
};
export default Home;