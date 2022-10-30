import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './ui/Layout'
import { publicRoutes, studentRoutes } from './router/routes';
import { AuthContext } from './context/context';
import Loader from './ui/Loader/Loader';

import Main from './components/public/Main/Main';
import News from './components/public/News/News';
import Events from './components/public/Events/Events';
import Schools from './components/public/Schools/Schools';
import Login from './components/public/Login/Login';

import StudentStudio from './components/student/StudioPage/StudentStudio';
import StudentProfile from './components/student/ProfilePage/StudentProfile';
import StudentRating from './components/student/RatingPage/StudentRating';
import StudentSchedule from './components/student/SchedulePage/StudentSchedule';
import StudentShop from './components/student/ShopPage/StudentShop';
import StudentContacts from './components/student/ContactsPage/StudentContacts';

function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth)

  if (isLoading) {
      return <Loader/>
      console.log(isAuth)
  }

  return (
    isAuth 
    ? <Routes>
        <Route path="/" element={<Layout data={studentRoutes} logo="Pulse"/>}>
          <Route index element={<Main />} />
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route path="schools" element={<Schools />} />
          <Route path="student/studio" element={<StudentStudio />} />
          <Route path="student/profile" element={<StudentProfile />} />
          <Route path="student/rating" element={<StudentRating />} />
          <Route path="student/schedule" element={<StudentSchedule />} />
          <Route path="student/shop" element={<StudentShop />} />
          <Route path="student/contacts" element={<StudentContacts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    : <Routes> 
        <Route path="/" element={<Layout data={publicRoutes} logo="Hip-Hop Russia"/>}>
          <Route index element={<Main />} />
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route path="schools" element={<Schools />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
  );
}

export default AppRouter;
