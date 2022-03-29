import React from 'react';
import spring from '../../assests/spring.jpg';
import java from '../../assests/java.jpg';
import laravel from '../../assests/laravel.jpg';
import react from '../../assests/react.jpg';
import asp from '../../assests/asp.jpg';
import ang from '../../assests/ang.jpg';
const BookList = () => {
    return (
        <container>
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">Java Book</h3></div>
                            <div class="card-body">
                                <img src={java} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">Spring Boot Book</h3></div>
                        <a href=''>
                            <div class="card-body">
                                <img src={spring} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">Laravel Book</h3></div>
                        <a href=''>
                            <div class="card-body">
                                <img src={laravel} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">React Book</h3></div>
                        <a href=''>
                            <div class="card-body">
                                <img src={react} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">ASP.NET Book</h3></div>
                        <a href=''>
                            <div class="card-body">
                                <img src={asp} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">Angular Book</h3></div>
                        <a href=''>
                            <div class="card-body">
                                <img src={ang} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </container>
    );
};
export default BookList;