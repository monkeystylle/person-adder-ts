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

  return <CardWrapper>{RenderList()}</CardWrapper>;
};

const CardList = styled.li`
  border: 1px solid silver;
  padding: 8px;
  border-radius: 8px;
  background-color: gainsboro;
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

const CardWrapper = styled.ul`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

export default List;
