import React from 'react';
import Header from './Header';
import Todolist from './Todo';
import Footer from './Footer'
import { useState } from 'react'
import Task from './Task';

function App() {

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {

    }

    return (
        <div>
            <Header></Header>
            <Todolist></Todolist>
            <Footer></Footer>
        </div>
    );
}

export default App;
