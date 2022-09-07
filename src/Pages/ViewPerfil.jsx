import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
//icons
import { RiGitRepositoryCommitsFill, RiUserLocationLine } from 'react-icons/ri';
import { FiGithub, FiUsers } from 'react-icons/fi';
import { MdOutlineNavigateBefore } from 'react-icons/md';
//styles
import styles from './ViewPerfil.module.css';

const ViewPerfil = () => {
    //parans 
    const { login } = useParams();
    //state user
    const [user, setUser] = useState({});
    const [repositories, setRepositories] = useState([]);
    //get repo search 
    const [search, setSearchRepo] = useState('');

    const url = 'https://api.github.com/users/' + login;
    const urlForRepos = `https://api.github.com/users/${login}/repos`;

    useEffect(() => {
        const response = fetch(url)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])

    useEffect(() => {
        const GetDataRepos = async () => {
            const response = await fetch(urlForRepos)
            const dataRepos = await response.json();
            setRepositories(dataRepos);
        }
        GetDataRepos()
    }, [])

    console.log(user)

    const getSearchTheLanguage = search.length > 0 ?
        repositories.filter(repo => repo.name.includes(search)) : [];


    return (
        <section className={styles['container_about']}>
            <article className={styles['container_image_about']}>
                <Link to='/request' className={styles['before_page']}>
                    <MdOutlineNavigateBefore />
                </Link>
                <img src={user.avatar_url} alt={user.name} />

                <div className={styles['info_flex']}>
                    <span>
                        <h2>{user.name}</h2>
                        <p><RiUserLocationLine /> {user.location}</p>
                    </span>
                    <span>
                        <p title='repositories' className={styles['repositories']}> {user.public_repos} <RiGitRepositoryCommitsFill /></p>
                    </span>
                </div>
                <p className={styles['bio']}>{user.bio}</p>

            </article>
            {/*<p>Repositórios: </p>*/}
            <div className={styles['followers']}>
                <p><FiUsers /> {user.followers} Seguidores</p>
                <p className='numberFollowers'>{user.following} Seguindo</p>
            </div>

            <div className={styles["repositories"]}>
                <div className={styles["title_and_input"]}>
                    <h3>Repositories</h3>
                    <label>
                        <p>Repository search</p>
                        <input type="text" placeholder='Search for repositories' value={search} onChange={(e) => setSearchRepo(e.target.value)} />
                    </label>
                </div>
                <article className={styles["about_info_repositories"]}>
                    {search.length > 0 ? (
                        <div>
                            {
                                getSearchTheLanguage.map(repo => (
                                    <div key={repo.id} className={styles['info_repositories']}>
                                        <span>
                                            <h4>{repo.name}</h4>
                                            <span>
                                                <a href={repo.url}>{<FiGithub />}</a>
                                            </span>
                                        </span>
                                        <p className={styles['update']}>Update {new Date(repo.updated_at).toLocaleDateString('en-GB')}</p>
                                        <p className={styles['update']}>Linguagem: {repo.language}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div>
                            {
                                repositories.map(repo => (
                                    <div key={repo.id} className={styles['info_repositories']}>
                                        <span>
                                            <h4>{repo.name}</h4>
                                            <span>
                                                <a href={repo.url}>{<FiGithub />}</a>
                                            </span>
                                        </span>
                                        <p className={styles['update']}>Update {new Date(repo.updated_at).toLocaleDateString('en-GB')}</p>
                                        <p className={styles['update']}>Linguagem: {repo.language}</p>
                                    </div>
                                ))
                            }

                        </div>
                    )}
                </article>
            </div>

        </section>
    )
}

export default ViewPerfil