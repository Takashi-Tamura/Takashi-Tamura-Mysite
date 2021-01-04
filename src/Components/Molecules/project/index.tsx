import React from "react";
import styled from "styled-components";
import LiquidImg from "../../Atoms/LiquidImg";

type Props = {
  title: string;
  description: string;
  thumb: string;
  url: string;
};

const Project: React.FC<Props> = ({ title, description, thumb, url }) => {
  return (
    <Layout href={url} target="_blank" style={{ color: "black" }}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <LiquidImg src={thumb} />
    </Layout>
  );
};

const Layout = styled.a`
  text-decolation: none;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h3`
  color: #262525;
  font-weight: normal;
`;

const Description = styled.p`
  color: #262525;
`;

export default Project;
