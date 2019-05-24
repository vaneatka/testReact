/* eslint-disable no-unused-expressions */
import React from 'react';


        
        function DrawArticle(props){

            console.log(props.data);

            const article = props.data.map(element => {
                console.log(element);
                
                return(
                <div id="posts" className="well">  
                <article>
                    <header>
                        <h3> {element.title} </h3>
                    </header>
                    <section>
                        <p>{element.body}</p>
                    </section>
                    <footer>
                        <div className="tags" >
                            {
                                element.tags.map(tag => <button className="btn btn-xs btn-default">{tag}</button> )
                            }                            
                        </div>
                    </footer>
                    <div className="controls">
                        <button className="btn btn-danger btn-mini" onClick = "tratata" >удалить</button>
                    </div>
                </article>  
            </div> 
                )
            });       



            
        return (      
            <>      
                {article}           
            </> 
        )
    }



export default DrawArticle;