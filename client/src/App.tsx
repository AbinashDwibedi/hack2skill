
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StudentLogin from './pages/StudentLogin'
import TeacherLogin from './pages/TeacherLogin'
import TeacherPanel from './pages/TeacherPanel'
import StudentPanel from './pages/StudentPanel'
import ClassDetails from './pages/ClassDetails'


function App() {
  // useEffect(()=>{
  //   try {
  //     //to handle wheather its teacher or student

  //   } catch (error) {
  //     console.log(error)
  //   }
  // },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/teacher-login' element={<TeacherLogin/>}/>
            <Route path='/student-login' element={<StudentLogin/>}/>
            <Route path='/teacher-panel' element={<TeacherPanel/>}/>
            <Route path='/student-panel' element={<StudentPanel/>}/>
            <Route path='/class/:path' element={<ClassDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App