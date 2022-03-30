import React from 'react';
const Home = () => {
    return (
        <div>
            <div class="jumbotron" style={{height: '300px'}}>
                <div class="row">
                    <div class="col-6">
                        <img src='https://www.teacherready.org/wp-content/uploads/2017/03/books-and-books.jpg' style={{width: '300px', left: '50px'}}></img>
                    </div>
                    <div class="col-6">
                        <h4>Welcome To Books Store</h4>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
                        <button class="btn-primary">Learn More</button>
                    </div>
                </div>
            </div>

            <div class="container">
                <h3 class="text-center">Books</h3><br/>
                <div class="row">
                <div class="col-3">
                    <div class="card" style={{width: '14rem'}}>
                        <div class="card-body">
                            <img src='https://m.media-amazon.com/images/I/51K9tMnVjaL.jpg' style={{width:'180px'}}></img>
                            <p class="card-text">Some quick example text to build on the card title.</p>
                        </div>    
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" style={{width: '14rem'}}>
                        <div class="card-body">
                            <img src='https://images-na.ssl-images-amazon.com/images/I/41AvS2UkOYL._SX342_SY445_QL70_ML2_.jpg' style={{width:'180px'}}></img>
                            <p class="card-text">Some quick example text to build on the card title.</p>
                        </div>    
                    </div>   
                </div>
                <div class="col-3">
                    <div class="card" style={{width: '14rem'}}>
                        <div class="card-body">
                            <img src='https://images-eu.ssl-images-amazon.com/images/I/51ulyeZcZwL._SX342_SY445_QL70_ML2_.jpg' style={{width:'180px'}}></img>
                            <p class="card-text">Some quick example text to build on the card title.</p>
                        </div>    
                    </div>
                </div>
                <div class="col-3">
                <div class="card" style={{width: '14rem'}}>
                        <div class="card-body">
                            <img src='https://media-exp1.licdn.com/dms/image/C4E22AQG4P6lZuGvJqQ/feedshare-shrink_2048_1536/0/1639604288268?e=1651104000&v=beta&t=5IjFRMH8iGMr7mkU7bltBINIzi01x4ZPzjVKCoWe6FU' style={{width:'180px'}}></img>
                            <p class="card-text">Some quick example text to build on the card title.</p>
                        </div>    
                    </div>    
                </div>
            </div>
        </div>
    </div>
    );
};
export default Home;