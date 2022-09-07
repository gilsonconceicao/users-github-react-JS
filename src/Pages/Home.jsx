import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; 

const Home = () => {
  return (
    <div className={styles['container_main']}>
      <article>
          <h2>Project GitHub</h2>  
          <p>GitHub is a source code and file hosting platform with version control using Git.</p>
          <Link to='/request'>Conhecer a aplicação</Link>
      </article>
    </div>
  )
}
/*GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. */
export default Home