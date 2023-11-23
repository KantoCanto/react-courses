import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post({ author, publishedAt }) {
  const publishedDateFormated = new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "long",
    time,
  });

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

        <time title="20th november @ 12:12h" dateTime="2023-11-20">
          {publishedAt.toString()}
        </time>
      </header>

      <div className={styles.content}>
        <p>This is a sentence.</p>
        <p>Yet another sentence.</p>
        <p>Last sentence?</p>
        <p>
          <a href="">LINK???</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your Feedback:</strong>
        <textarea placeholder="Comment..." />
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
