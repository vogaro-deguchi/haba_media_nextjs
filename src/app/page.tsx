import { log } from 'console';
import styles from './style.module.scss'

import Article from '@/components/Article/article'

type TodoItem = {
  userId: number;
  id: number;
  category: string;
  title: string;
  text: string;
  tags: string[];
}

export default function Home() {
  const todos: TodoItem[] = [
    {
      "userId": 1,
      "id": 1,
      "category": "商品コラム",
      "title": "この文章はダミーです。文字の大きさ、量、時間、行間を確認するために入れています。",
      "text": "この文章はダミーです文字の大きさ、量、時間、行間を確認するために入れています。この文章はダミーです文字の大きさ、量、時間、行間を確認するために入れています。",
      "tags": ["スキンケア", "しわ", "くすみ"]
    },
    {
      "userId": 2,
      "id": 2,
      "category": "ニュース",
      "title": "この文章はダミーです。文字の大きさ、量、時間、行間を確認するために入れています。",
      "text": "この文章はダミーです文字の大きさ、量、時間、行間を確認するために入れています。この文章はダミーです文字の大きさ、量、時間、行間を確認するために入れています。",
      "tags": ["スキンケア", "しわ"]
    }
  ];
  return (
    <section className={styles.secArticle}>
      {todos.map((todo: TodoItem) => {
        console.log(todo);
        return (
          <Article 
            key = {todo.id}
            {...todo}
          />
        )
      })}
    </section>
  )
}
