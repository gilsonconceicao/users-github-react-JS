import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//styles
import {AiOutlineSearch} from 'react-icons/ai'; 

import styles from './RequestGit.module.css';
//icons 

const RequestGit = () => {
    //state
    const [user, setUser] = useState({});
    const [search, setSearch] = useState('');
    //loading and valid
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 
    const [message, setMessage] = useState(''); 

    const url = 'https://api.github.com/users/' + search;

    const hancleGetDataUser = () => {
        if (search == 0) {
            alert('Erro')
            return
        }
        
        //valid
        try {
            setLoading(true);

            const response = fetch(url)
            .then(response => response.json())
            .then(data => {
                setUser(data)
                setLoading(false)
                setSearch('')
            }); 

        } catch (error) {
            console.log(error)
        }
    }

    console.log(user);

    return (
        <div className={styles['container_api']}>
            <header className={styles['header_about']}>
                <h2>Search Github Users</h2>

                <div className={styles['form_application']}>
                    <input 
                        type="text" 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                        placeholder='Enter your profile' 
                    />

                    <button onClick={hancleGetDataUser}>
                        <AiOutlineSearch/>
                    </button>
                </div>
            </header>
            <section className={styles['container_user']}>
                <div>
                   {loading && (<p>Carregando...</p>)}

                   {!loading && <Link to={`/perfil/${user.login}`}>
                        <div className={styles['box_user_get']} key={user.id} >
                            <img src={user.avatar_url} alt={user.name} />
                            <h3>{user.name}</h3>
                        </div>
                    </Link>}
                    
                </div>
            </section>
        </div>
    )
}

export default RequestGit;


/*
    - Estilizar a parte que recebe o usuário
    - Válidar formulário

    - Fazer um fetch para repositṕrios na outra página

    - Mudar o guia de home. (feito)
*/