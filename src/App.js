import './App.scss';
import MainContent from './MainContent';
import Header from './Header';
import {useEffect, useState} from 'react';

function App() {
  const [stories, setStories] = useState([]);

  const titles = ["Popular", "Recent", "Upvoted", "Discussed"];

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(response => response.json()) 
    .then(ids => {
      ids.slice(0,50).map(id => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(response => response.json())
        .then(data => {
          let keyword = longestWord(data.title);
          data.link = `https://loremflickr.com/234/150/${keyword}`;
          // let random = Math.floor(Math.random()*(999-100+1)+100);
          // data.link = `https://picsum.photos/id/${random}/250/150`;
          setStories(prevState => [...prevState, data]);
        })
      });
    });
  }, []);

  const longestWord = (str) => {
      var words = str.split(' ');
      return words.reduce((longest, currVal) => (currVal.length > longest.length) ? currVal : longest)   
  }

  const sortByKids = (data) => {
    data.sort((a, b) => {
      const aHas = typeof a.kids !== 'undefined';
      const bHas = typeof b.kids !== 'undefined';
      return (bHas - aHas) || (aHas === true && a.kids.length - b.kids.length) || 0;
    });
    return data;
  }

  return (
    <div className="app">
      <Header/>
      <div className="app__container">
        <div className="app__content">
        <MainContent title="Popular" stories={stories}/>
        <MainContent title="Upvoted" stories={stories.slice().sort((a, b) => (a.score > b.score) ? -1 : 1)}/>
        <MainContent title="Recent" stories={stories.slice().sort((a, b) => (a.time > b.time) ? -1 : 1)}/>
        <MainContent title="Discussed" stories={sortByKids(stories.slice())}/>
        </div>
      </div>
    </div>
  );
}

export default App;