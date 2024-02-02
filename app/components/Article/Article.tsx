import React from 'react'
import { format } from 'date-fns';
import styles from './Article.css'

export type ArticleProps = {
    id: string;
    title: string;
    content: string;
    _firstPublishedAt: string;
    _status?: string;
}

const Article: React.FC<ArticleProps> = ({title, content, _firstPublishedAt}) => {
  return (
    <div className='article-wrapper'>
      <div className='header'>
      <h1>{title}</h1>
      <p>{format(new Date(_firstPublishedAt), 'dd/MM/yyyy')}</p>
      </div>
        <p>{content}</p>
    </div>
  )
}

export const links = () => [{
  rel: 'stylesheet', 
  href: styles
}]

export default Article