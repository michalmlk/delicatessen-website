export type MenuItemProps = {
    id: string,
    title: string,
    image: {
      url: string;
      alt: string;
    },
    description: string,
    price: number;
    currency: 'zł' | '$' | 'EUR',
}