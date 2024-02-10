import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { StructuredText } from 'react-datocms';
import { htmlToStructuredText } from 'datocms-html-to-structured-text';
import editorStyles from '~/styles/editorStyles.css';
import styles from './Article.css';

export type ArticleProps = {
    id: string;
    content: any;
    _firstPublishedAt: string;
    _status?: string;
};

const Article: React.FC<ArticleProps> = ({ content, _firstPublishedAt }) => {
    const [data, setData] = React.useState<any>();

    useEffect(() => {
        htmlToStructuredText(content).then((structuredText) => setData(structuredText));
    }, []);

    return (
        <Card className="w-full p-4">
            <CardHeader className="flex justify-between">
                <p>{format(new Date(_firstPublishedAt), 'dd/MM/yyyy')}</p>
            </CardHeader>
            <Divider />
            <CardBody className="editorStyles">
                <StructuredText data={data} />
            </CardBody>
        </Card>
    );
};

export const links = () => [
    {
        rel: 'stylesheet',
        href: styles,
    },
    {
        rel: 'stylesheet',
        href: editorStyles,
    },
];

export default Article;
