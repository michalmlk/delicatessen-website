import React from 'react'
import './Article.css'

export type ArticleProps = {
    title: string;
    content: string;
}

const Article: React.FC<ArticleProps> = ({title, content}) => {
  return (
    <div className='article-wrapper'>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
  )
}

export default Article