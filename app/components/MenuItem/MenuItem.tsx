import React from 'react';
import { MenuItemProps } from '~/common/model';
import styles from './MenuItem.css';
import _ from 'lodash';
import { Button, Card, CardFooter, CardHeader, Image, useDisclosure } from '@nextui-org/react';
import ItemDetailsModal from '../ItemDetailsModal/ItemDetailsModal';

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price, image, currency }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            {
                <ItemDetailsModal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    title={title}
                    description={description}
                    price={price}
                    currency={currency}
                    image={image}
                    id={_.camelCase(title)}
                />
            }
            <Card isFooterBlurred fullWidth={false} className="w-full relative h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
                <Image
                    removeWrapper
                    alt={image.alt}
                    className="z-0 w-full h-full object-cover"
                    src={image.url}
                />
                <CardFooter className="absolute flex justify-between bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="">
                        <h4 className=" font-medium text-white text-l">{title}</h4>
                        <p className="text-white">
                            {price} {currency}
                        </p>
                    </div>
                    <Button radius="full" size="sm" onClick={onOpen}>
                        More
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};

export const links = () => [
    {
        rel: 'stylesheet',
        href: styles,
    },
];

export default MenuItem;
