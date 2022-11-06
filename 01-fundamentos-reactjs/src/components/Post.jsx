import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Foda! Esse cara é FODA!']);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    `d 'de' LLLL 'às' HH:mm'h'`,
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCommentSubmmit(e) {
    e.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((ctt) =>
          ctt.type === 'paragraph' ? (
            <p>{ctt.content}</p>
          ) : (
            <p>
              <a href="">{ctt.content}</a>
            </p>
          )
        )}
      </div>

      <form onSubmit={handleCommentSubmmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          name="comment"
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((cmt) => (
          <Comment content={cmt} />
        ))}
      </div>
    </article>
  );
}
