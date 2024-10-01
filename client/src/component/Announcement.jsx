import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const announcements = [
    "Super Deal! Free Shipping on Orders Over $50",
    "Livraison standard offerte à partir de 34,00 € et retours gratuits*",
    "Essayez d’abord, payez après"

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncementIndex(prevIndex => (prevIndex + 1) % announcements.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <>
      <Container style={{ position: "sticky", top: 0,zIndex: 999  }}>{announcements[currentAnnouncementIndex]}</Container>
    </>
  );
};

export default Announcement;
