import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/natansouzaa.png',
      name: 'Natan Souza',
      role: 'Desenvolvedor Full Stack'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Olá, meu nome é Natan. Sou estudante do curso de Ciência da Computação na Universidade Federal de Campina Grande e Desenvolvedor Backend. Até o momento atuei em projetos dentro da Universidade utilizando tecnologias voltadas à resolução de problemas educacionais. Já tive contato com diversas tecnologias e frameworks, especialmente relacionadas a Java. 🚀' },
      { type: 'link', content: 'https://www.linkedin.com/in/natansouzaa/' }
    ],
    publishedAt: new Date('2022-09-28 14:32:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/josephdsbr.png',
      name: 'José Vinicius',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Hello Guys 👋' },
      { type: 'paragraph', content: 'I just added another project to my portfolio. It is a project I did at NLW Return, Rocketseat event. The project name is DoctorCare 🚀' },
      { type: 'link', content: 'https://www.linkedin.com/in/josephdsbr/' }
    ],
    publishedAt: new Date('2022-09-10 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  )
}


