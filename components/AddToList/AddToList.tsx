import React, { useState } from 'react';
import styled from 'styled-components';
import { Istate as Props } from '../../pages/index';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        age: number;
        url: string;
        note?: string;
      }[]
    >
  >;
}

const AddToList = ({ people, setPeople }: IProps) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const HandleClick = (): void => {
    /*   if (!input.name || !input.age || input.img) {
      return;
    }
 */
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        note: input.note,
        url: input.img,
      },
    ]);

    console.log('hey');

    setInput({
      name: '',
      age: '',
      note: '',
      img: '',
    });
  };

  return (
    <AddToListWrapper>
      <Input
        type="text"
        placeholder="name"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Age"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Image URL"
        value={input.img}
        name="img"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="notes"
        value={input.note}
        name="note"
        onChange={handleChange}
      />
      <Button onClick={HandleClick}>Add People</Button>
    </AddToListWrapper>
  );
};

export default AddToList;

const Input = styled.input`
  display: block;
  margin: 4px;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
`;

const AddToListWrapper = styled.div`
  width: 400px;
  background: silver;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px auto;
`;
