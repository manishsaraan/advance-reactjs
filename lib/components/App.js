import React from 'react';
import DataApi from '../dataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);
class App extends React.Component {  
    constructor(){
    	super();
		this.state = {
         articles : api.getArticles(),
         authors : api.getAuthors()
		}
		console.log(this.state)
	}

    asyncFn = () => {
		return Promise.resolve(452);
	}
	async componentDidMount(){
        this.setState({
        	answer  : await this.asyncFn()
        })
	}
  articleActions = {
    lookupAuthor : authorId => this.state.authors[authorId]
  }
	render(){
		return (
              <div>
               <ArticleList
                 articles = {this.state.articles}
                 articleActions = {this.articleActions}
               />
              </div>
	 		);
	}
}

export default App;