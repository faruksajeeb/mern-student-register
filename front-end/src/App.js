import React, {Component, Fragment} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import StudentListPage from './pages/student/ListPage'
import StudentCreatePage from './pages/student/CreatePage'
const App = () => {
  return (
    <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<StudentListPage/>} />
                    <Route path="/save" element={<StudentCreatePage/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
  );
};

export default App;