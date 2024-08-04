import { useState } from 'react';
import './App.css';
import './css/index.css';

function App() {
  const [list] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      title: '',
      views: 50,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      title: '',
      views: 12,
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      url: '',
      views: 175,
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      url: '',
      views: 1532,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      title: '',
      views: 4253,
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      url: '',
      views: 12,
    },
  ]);

  return (
    <>
      <List list={list} />
    </>
  );
}

interface IArticleProps {
  title: string;
  views: number;
}

const Article: React.FC<IArticleProps> = ({ title, views }) => {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
};

interface IVideoProps {
  url: string;
  views: number;
}

const Video: React.FC<IVideoProps> = ({ url, views }) => {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};

function New<P extends object>(Component: React.ComponentType<P>) {
  return (props: P) => {
    return (
      <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
        <Component {...props} />
      </div>
    );
  };
}

const NewArticle = New(Article);

const NewVideo = New(Video);

function Popular<P extends object>(Component: React.ComponentType<P>) {
  return (props: P) => {
    return (
      <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        <Component {...props} />
      </div>
    );
  };
}

const PopularArticle = Popular(Article);

const PopularVideo = Popular(Video);

function List(props: {
  list: { type: string; views: number; title: string; url: string }[];
}) {
  return props.list.map((item) => {
    if (item.type === 'video') {
      if (item.views > 1000) {
        return <PopularVideo {...item} />;
      }
      if (item.views < 100) {
        return <NewVideo {...item} />;
      }
      return <Video {...item} />;
    }
    if (item.type === 'article') {
      if (item.views > 1000) {
        return <PopularArticle {...item} />;
      }
      if (item.views < 100) {
        return <NewArticle {...item} />;
      }
      return <Article {...item} />;
    }
    return <div>UNRECOGNIZED TYPE</div>;
  });
}

export default App;
