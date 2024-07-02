// src/components/AnimatedDate.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const DateContainer = styled.div`
  color: #f0ad4e;
  font-size: 1rem;
  margin-left: auto;
  display: flex;
  align-items: center;
  animation: ${float} 3s ease-in-out infinite;
`;

const AnimatedDate: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();

  return <DateContainer>{currentDate}</DateContainer>;
};

export default AnimatedDate;