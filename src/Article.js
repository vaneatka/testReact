import React, {Component} from 'react';
import db from './db/posts';
import './Article.css'
import DrawArticle from './DrawArticle';
class Article extends Component{
   state = {
       data:db
   }
   
   onDelete = () =>{
       console.log();
       }
   
    render(){               
        


        return(
            <section>
            <DrawArticle data = {this.state.data}/>
            
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