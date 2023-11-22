import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="http://github.com/kantocanto.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>UserName</strong>
              <time title="4th November 09:15h" dateTime="2023-11-4 09:15:12">
                About 1h ago
              </time>
            </div>

            <button title="delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>LINK?? Link...? link????</p>
        </div>
        <footer>
          <button title="applaud comment">
            <ThumbsUp size={24} />
            Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
