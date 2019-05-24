import React, {Component} from 'react';
import db from './db/posts';
import './Article.css'
class Article extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:db
        }
    this.onDelete = this.onDelete.bind(this);
    }
   onDelete = (e) =>{
       const {data} = this.state;
       const obj = data.filter(x => x.id === e)[0];
       const index = data.indexOf(obj)
       data.splice(index, 1);
       this.setState({data})
       console.log(obj.id, index);
       };
   
    drawArticle = (arr) => {                 
        const article = arr.map(element => {  
                      
            return (
            <div id="posts" className="well" key = {arr.id}>  
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
                    <button className="btn btn-danger btn-mini" onClick = {()=>this.onDelete(element.id)} >удалить</button>
                </div>
            </article>  
        </div> );
        });
        this.componentDidUpdate =()=> {
            this.drawArticle(this.state.data);
        }

        return article;

       };

    render(){           
        const {data} = this.state;
        console.log(data)
        return(
            <section>
            {this.drawArticle(data)}
            
            <form id="post-add" className="col-lg-4">
                <div className="form-group">
                    <input type="text" className="form-control" name="title" placeholder="заголовок"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="body" placeholder="запись"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="tags" placeholder="тег, еще тег"/>
                </div>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form> 
  
        </section>
        )
    }
}

export default Article;