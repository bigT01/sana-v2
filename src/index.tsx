import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StyledEngineProvider} from "@mui/material/styles";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from './pages/login/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Courses from "./pages/courses/Courses";
import Home from "./pages/home/Home";
import Course from "./pages/courses/course/Course";
import Lessons from "./pages/courses/course/lessons/Lessons";
import Lesson from "./pages/courses/course/lessons/lesson/Lesson";
import OrganizationCourse from './pages/organizationCourse/OrganizationCourse';
import ViewCourseManager from './pages/organizationCourse/viewCourseManager /ViewCourseManager';
import TopicLessons from './pages/organizationCourse/viewCourseManager /topicLessons/TopicLessons';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute authenticationPath="/signin"/>
                        }
                    >
                        <Route path="/:organizationId" element={<App/>}>
                            <Route path="/:organizationId" element={<Home />}/>
                            <Route path="/:organizationId/courses" element={<Courses />}/>
                            <Route path="/:organizationId/courses/:courseId/:courseName" element={<Course />}/>
                            <Route path="/:organizationId/organization-courses" element={<OrganizationCourse />}/>
                            <Route path="/:organizationId/organization-courses/:courseId/:courseName" element={<ViewCourseManager />}/>
                            <Route path="/:organizationId/organization-courses/:courseId/:courseName/:topicId/:topicName" element={<TopicLessons />}/>
                            <Route path="/:organizationId/courses/:courseId/:courseName/lesson" element={<Lessons />}>
                                <Route path="/:organizationId/courses/:courseId/:courseName/lesson/:lessonId/:lessonName" element={<Lesson />}/>
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StyledEngineProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
