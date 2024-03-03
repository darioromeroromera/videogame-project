import { useState, useEffect } from "react";
import VideoGameList from './components/VideoGameList';
import CategoriesMenu from "./components/CategoriesMenu";
import Header from "./components/Header";
import PlatformsMenu from "./components/PlatformsMenu";
import SearchBar from "./components/SearchBar";
import Modal from "./components/Modal";
import NewGameForm from "./components/NewGameForm";

function App() {
  return (
    <div>
      <Header title="Videogame List"/>
      <CategoriesMenu/>
      <PlatformsMenu/>
      <NewGameForm/>
      <SearchBar/>
      <VideoGameList/>
      <Modal/>
    </div>
  );
}

export default App;
