import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/74272648?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Author Name</strong>
            <span>Author Job</span>
          </div>
        </div>

        <time title="20th november @ 12:12h" dateTime="2023-11-20">
          Published 1h ago
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
