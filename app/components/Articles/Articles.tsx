import React from 'react';
import styles from './Articles.css';
import Article, { ArticleProps, links as articleLinks } from '../Article/Article';

const Articles: React.FC<{ data: Array<ArticleProps> }> = ({ data }) => {
    return (
        <div className="articles">
            {data
                .sort((d1, d2) =>
                    new Date(d1._firstPublishedAt) > new Date(d2._firstPublishedAt) ? 1 : -1,
                )
                .map(({ id, content, _firstPublishedAt }) => (
                    <Article
                        content={content}
                        _firstPublishedAt={_firstPublishedAt}
                        id={id}
                        key={id}
                    />
                ))}
        </div>
    );
};

export const links = () => [
    {
        rel: 'stylesheet',
        href: styles,
    },
    ...articleLinks(),
];

export default Articles;
