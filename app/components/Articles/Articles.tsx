import React from 'react'
import styles from './Articles.css'
import Article, {ArticleProps, links as articleLinks } from '../Article/Article'


const Articles: React.FC<{data: Array<ArticleProps>}> = ({data}) => {
  return (
    <div className='articles'>
        {data.map(({title, id, content, _firstPublishedAt}) => (
            <Article title={title} content={content} _firstPublishedAt={_firstPublishedAt} id={id} key={id} />
        ))}
    </div>
  )
}

export const links = () => [{
    rel: 'stylesheet',
    href: styles
}, ...articleLinks()]

export default Articles