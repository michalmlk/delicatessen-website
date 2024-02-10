import React from 'react';
import { styled } from 'styled-components';

type BannerProps = {
    localImage: string;
    backgroundColor?: string;
    height?: number;
};

const StyledBanner = styled.div<BannerProps>`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.backgroundColor};
    overflow: hidden;

    img {
        width: 100%;
    }

    @media (max-width: 640px) {
        height: 150px;
    }
`;

const Banner: React.FC<BannerProps> = ({
    localImage,
    backgroundColor = 'transparent',
    height = 300,
}) => {
    return (
        <StyledBanner localImage={localImage} backgroundColor={backgroundColor} height={height}>
            <img src={localImage} alt="" />
        </StyledBanner>
    );
};

export default Banner;
