import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleAddLike() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/kantocanto.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>UserName</strong>
              <time title="4th November 09:15h" dateTime="2023-11-4 09:15:12">
                About 1h ago
              </time>
            </div>

            <button onClick={handleDeleteComment} title="delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleAddLike} title="like comment">
            <ThumbsUp size={24} />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
