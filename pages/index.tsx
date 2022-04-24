import React from 'react';
import styled from 'styled-components';
import type { NextPage } from 'next';
import { useState } from 'react';
import List from '../components/List';
import AddToList from '../components/AddToList';

export interface Istate {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const Home: NextPage = () => {
  const [people, setPeople] = useState<Istate['people']>([
    {
      name: 'Lebron',
      url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
      age: 35,
      note: 'Allergic in one team',
    },
  ]);

  return (
    <>
      <MinMaxWrapper>
        <Title>People Invited to my Party</Title>

        <List people={people} />

        <AddToList people={people} setPeople={setPeople} />
      </MinMaxWrapper>
    </>
  );
};

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin: 32px 0;
`;

const MinMaxWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  width: 90%;
`;

export default Home;
