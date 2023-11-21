import {Header} from "./components/Header"
import { Post } from "./components/Post"
import {Sidebar} from "./components/Sidebar"

import "./globalStyles.css"
import styles from "./App.module.css"

export function App() {

  return(
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <div>
          <Post 
            author="random" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat laudantium vero tempora eum impedit, obcaecati voluptas odit magni dolorem quos voluptatum enim molestiae facere, rerum at, ratione ipsam! Officia." 
          />
          <Post 
            author="different author" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat laudantium vero tempora eum impedit, obcaecati voluptas odit magni dolorem quos voluptatum enim molestiae facere, rerum at, ratione ipsam! Officia." 
          />
          <Post 
            author="third author" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat laudantium vero tempora eum impedit, obcaecati voluptas odit magni dolorem quos voluptatum enim molestiae facere, rerum at, ratione ipsam! Officia." 
          />
        </div>
        </main>
        
      </div>
     
    </div>
)
}

