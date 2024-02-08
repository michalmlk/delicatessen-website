import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    ModalProps,
    Image,
} from '@nextui-org/react';

import { MenuItemProps } from '~/common/model';

type ItemDetailsModalProps = MenuItemProps & Omit<ModalProps, 'children'>;

export const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({
    isOpen,
    onOpenChange,
    title,
    description,
    price,
    image,
    currency,
}) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                        <ModalBody>
                            <Image
                                removeWrapper
                                alt={image.alt}
                                className="z-0 w-full h-full object-cover"
                                src={image.url}
                            />
                            <p>{description}</p>
                            <p>
                                {price} {currency}
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ItemDetailsModal;
