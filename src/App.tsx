import { useState } from 'react'
import './App.css'

function App() {
  const [list] = useState([
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        title: '',
        views: 50
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        title: '',
        views: 12
    },
    {
        type: 'article',
        title: 'Невероятные события в неизвестном поселке...',
        url: '',
        views: 175
    },
    {
        type: 'article',
        title: 'Секретные данные были раскрыты!',
        url: '',
        views: 1532
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        title: '',
        views: 4253
    },
    {
        type: 'article',
        title: 'Кот Бегемот обладает невероятной...',
        url: '',
        views: 12,
    },
]);

return (
    <List list={list} />
);
}

// function New(props: {children: string}) {
//     return (
//         <div className="wrap-item wrap-item-new">
//             <span className="label">New!</span>
//             {props.children}
//         </div>
//     )
// }

// function Popular(props: {children: string}) {
//     return (
//         <div className="wrap-item wrap-item-popular">
//             <span className="label">Popular!</span>
//             {props.children}
//         </div>
//     )
// }

function Article(props: {title: string, views: number}) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
}

function Video(props: {url: string, views: number}) {
  return (
      <div className="video">
          <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p className="views">Просмотров: {props.views}</p>
      </div>
  )
}

function List(props : {list: {type: string, views: number, title: string, url: string}[]}) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <Video {...item} />
                );

            case 'article':
                return (
                    <Article {...item} />
                );
        }
    });
}

export default App