import React from 'react';
import Article from './Article';


const ArticleList = props => {

	const articlesArray = Object.values(props.articles);

	return (
		   <div>
            {articlesArray.map(article => 
                <Article
                  key={article.id}
                  article={article}
                  author={props.authors[article.authorId]}
                />
           	)}
           </div>
		);
}

export default ArticleList;