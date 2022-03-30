import React from 'react';
import book01 from '../../assests/competition.jpg';
import book02 from '../../assests/conversation.jpg';
import book03 from '../../assests/english.jpg';
import book04 from '../../assests/grammar.jpg';
import book05 from '../../assests/hightSchool.jpg';
import book06 from '../../assests/talk.jpg';
const EngBook = () => {
    return (
        <container>
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">1. Competition</h3></div>
                            <div class="card-body">
                                <img src={book01} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">2. Conversation</h3></div>
                        <a href=''>
                            <div class="card-body">
                                <img src={book02} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">3. English References</h3></div>
                        <a href=''>
                            <div class="card-body">
                                <img src={book03} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">4. General English</h3></div>
                        <a href=''>
                            <div class="card-body">
                                <img src={book04} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">5. English for High School</h3></div>
                        <a href=''>
                            <div class="card-body">
                                <img src={book05} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="title"><h3 class="text-center">6. Talking</h3></div>
                        <a href=''>
                            <div class="card-body">
                                <img src={book06} style={{width:'280px',height:'300px', marginLeft:'0 auto'}}></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </container>
    );
};
export default EngBook;