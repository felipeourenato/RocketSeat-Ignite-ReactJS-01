import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/felipeourenato.png',
      name: 'Felipe Renato',
      role: 'Web Developer',
    },
    publishedAt: new Date('2022-11-06 15:00:00'),
    content: [
      { type: 'paragraph', content: 'Lorem Ipsum' },
      { type: 'paragraph', content: 'Dolor sit amet.' },
      { type: 'link', content: 'google.com' },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pinheirolucas.png',
      name: 'Lucas Pinheiro',
      role: 'Web Developer',
    },
    publishedAt: new Date('2022-11-05 15:00:00'),
    content: [
      { type: 'paragraph', content: 'Lorem Ipsum' },
      { type: 'paragraph', content: 'Dolor sit amet.' },
      { type: 'link', content: 'google.com' },
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((p) => (
            <Post
              key={p.id}
              author={p.author}
              content={p.content}
              publishedAt={p.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
