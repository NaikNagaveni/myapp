import logo from './logo.svg';
import './App.css';
import img from "./img/nagaveni.jpeg"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Form from './Component/Form';
import ToDoList from './ToDoList';


function Profile() {
  return (
    <div>
      <nav>
        <img src={img} class="logo" width="300px" height="350px" align="left"></img>
      </nav>
    </div>
  )
}

function Skills() {
  return (
    <div>
      <ol>Java</ol>
      <ol>SQL operations</ol>
      <ol>Web Application development</ol>
      <ol>Microsoft Office Tools access</ol>
      <ol>Office automation</ol>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p><i>I Nagaveni Naik from <b>Moodlakatte Institute of Technology</b>currently in 7th semester with cgpa<b>6.8</b><br />in Computer Science Engineering also completed my <b>Diploma in Computer Science Engineering</b>with<b>79</b>percentage at <b>R.N.Shetty Rural Polytechnic Murdeshwar.</b></i></p>
    </div>
  )

}

function Contact() {
  return (
    <h1>this is contact information</h1>
  )
}

function Team() {
  return (
    <div>
      <table>
        <thead>

          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>USN</th>
            <th>Branch</th>
            <th>Phone Number</th>
            <th>Semister</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Nagaveni</td>
            <td>naiknagaveni2000@gmail.com</td>
            <td>4MK20CS404</td>
            <td>Computer Science</td>
            <td>6362227294</td>
            <td>7</td>

          </tr>

          <tr>
            <td>Prajwal</td>
            <td>prajwal@gmail.com</td>
            <td></td>
            <td>Electronics and communuication</td>
            <td>6363642438</td>
            <td>7</td>

          </tr>
          <tr>
            <td>Kavya</td>
            <td>kavya@gmail.com</td>
            <td>4MK19EC008</td>
            <td>Electronics and communuication</td>
            <td>9108487617</td>
            <td>7</td>

          </tr>
          <tr>
            <td>GM</td>
            <td>gm@gmail.com</td>
            <td>4MK19EC001</td>
            <td>Electronics and communuication</td>
            <td>7338507260</td>
            <td>7</td>

          </tr>
          <tr>
            <td>Vishwas</td>
            <td>vishwas@gmail.com</td>
            <td></td>
            <td>Electronics and communuication</td>
            <td>9380938627</td>
            <td>7</td>

          </tr>

          <tr>
            <td>Anusha</td>
            <td>anusha@gmail.com</td>
            <td>4MK19EC003</td>
            <td>Electronics and communuication</td>
            <td>9632518894</td>
            <td>7</td>

          </tr>

          <tr>
            <td>Goutami</td>
            <td>goutami@gmail.com</td>
            <td>4MK20EC403</td>
            <td>Electronics and communuication</td>
            <td>9008518463</td>
            <td>7</td>
          </tr>

          <tr>
            <td>Maneesh</td>
            <td>maneesh@gmail.com</td>
            <td>4MK20EC404</td>
            <td>Electronics and communuication</td>
            <td>8277408817</td>
            <td>7</td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}

function NavBar() {
  return (
    <div align="left">
      <Link to="/about">About</Link><br />
      <Link to="/contact">Contact</Link><br />
      <Link to="/team">Team</Link><br />
      <Link to="/add-student">Add Student</Link><br/>
      <Link to="todo-list">ToDoList</Link>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      {/* <Profile />
      <Skills />
      <About />
      <Contact/> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path="/add-student" element={<Form />}></Route>
          <Route path="/todo-list" element={<ToDoList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
