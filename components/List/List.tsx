import React from 'react';
import styled from 'styled-components';

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({ people }) => {
  const RenderList = (): JSX.Element[] => {
    return people.map(person => {
      return (
        <CardList>
          <div>
            <AvatarWrapper>
              <AvatarImage src={person.url} />
            </AvatarWrapper>
          </div>
          <h2>Name: {person.name}</h2>
          <p>age: {person.age}</p>
          <p>note: {person.note}</p>
        </CardList>
      );
    });
  };

  return <ul>{RenderList()}</ul>;
};

const CardList = styled.li`
  border: 1px solid black;
  padding: 8px;
  width: fit-content;
  border-radius: 8px;
`;

const AvatarWrapper = styled.div`
  /* Rounded border */
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

const AvatarImage = styled.img`
  /* Rounded border */
  border-radius: 50%;

  /* Take full size */
  height: 100%;
  width: 100%;
`;

export default List;
