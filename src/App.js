import { useState, useEffect } from "react";
import VideoGameList from './components/VideoGameList';
import CategoriesMenu from "./components/CategoriesMenu";
import Header from "./components/Header";
import PlatformsMenu from "./components/PlatformsMenu";
import SearchBar from "./components/SearchBar";
import Modal from "./components/Modal";
import NewGameForm from "./components/NewGameForm";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import { useAuth } from './components/context/AuthProvider';
import NavigationMenu from "./components/NavigationMenu";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import GameDetails from "./components/GameDetails";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <Loading/>;
  }


  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/registro" element={<RegisterForm/>}/>
        <Route path="" exact element={<PrivateRoute>
          <NavigationMenu/>
          <Header title="Videogame List"/>
          <CategoriesMenu/>
          <PlatformsMenu/>
          <SearchBar/>
          <VideoGameList/>
          <Modal/>
          </PrivateRoute>}>
      </Route>
      <Route path="/nuevo" element={<PrivateRoute>
        <NavigationMenu/>
        <NewGameForm/>
      </PrivateRoute>}/>
      <Route path="/about" element={<PrivateRoute>
        <NavigationMenu/>
        <AboutUs/>
      </PrivateRoute>}/>

      <Route path="/game/:id" element={<PrivateRoute>
        <NavigationMenu/>
        <GameDetails/>
      </PrivateRoute>}/>

      <Route path="*" element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
