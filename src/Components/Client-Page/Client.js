import React, {useState, useEffect} from "react";
import axios from "axios";
import styles from "../../main.scss"
import {Link} from 'react-router-dom'

    function ClientPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getData();
    
        // we will use async/await to fetch this data
        async function getData() {
          const response = await axios.get('http://localhost:3000/users');
          const data = await response.data;
    
          // store the data into our books variable
          setPosts(data) ;
        }
      }, [posts]);

        return (
                <>
                <section id="entry-page">   
                
                <Link to="/" className="link">Retornar</Link>
                {posts && (
                    <>
                        {posts.map((post, index) => (
                            <div key={index}>
                                <p>{post.email}</p>
                                <p>{post.firstName}</p>
                                <p>{post.lastName}</p>
                            </div>
                        ))}
                    </>
                )}

                </section>
            </>
        )
    }

export default ClientPage