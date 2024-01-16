import React from 'react'
import styles from './Articles.css'
import Article, {ArticleProps, links as articleLinks } from '../Article/Article'

const articles: ArticleProps[] = [
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, fugiat alias a, saepe neque voluptatibus architecto numquam unde nulla, harum quidem eligendi aperiam quam ullam inventore quasi doloremque possimus totam! Quia quae in nostrum, dolore consequatur quos non, laborum ducimus magnam quibusdam id rerum neque provident beatae illum harum sapiente.'
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, fugiat alias a, saepe neque voluptatibus architecto numquam unde nulla, harum quidem eligendi aperiam quam ullam inventore quasi doloremque possimus totam! Quia quae in nostrum, dolore consequatur quos non, laborum ducimus magnam quibusdam id rerum neque provident beatae illum harum sapiente.'
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, fugiat alias a, saepe neque voluptatibus architecto numquam unde nulla, harum quidem eligendi aperiam quam ullam inventore quasi doloremque possimus totam! Quia quae in nostrum, dolore consequatur quos non, laborum ducimus magnam quibusdam id rerum neque provident beatae illum harum sapiente.'
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, fugiat alias a, saepe neque voluptatibus architecto numquam unde nulla, harum quidem eligendi aperiam quam ullam inventore quasi doloremque possimus totam! Quia quae in nostrum, dolore consequatur quos non, laborum ducimus magnam quibusdam id rerum neque provident beatae illum harum sapiente.'
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, fugiat alias a, saepe neque voluptatibus architecto numquam unde nulla, harum quidem eligendi aperiam quam ullam inventore quasi doloremque possimus totam! Quia quae in nostrum, dolore consequatur quos non, laborum ducimus magnam quibusdam id rerum neque provident beatae illum harum sapiente.'
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, fugiat alias a, saepe neque voluptatibus architecto numquam unde nulla, harum quidem eligendi aperiam quam ullam inventore quasi doloremque possimus totam! Quia quae in nostrum, dolore consequatur quos non, laborum ducimus magnam quibusdam id rerum neque provident beatae illum harum sapiente.'
    }
]

const Articles: React.FC = () => {
  return (
    <div className='articles'>
        {articles.map((article, idx) => (
            <Article title={article.title} content={article.content} key={idx} />
        ))}
    </div>
  )
}

export const links = () => [{
    rel: 'stylesheet',
    href: styles
}, ...articleLinks()]

export default Articles