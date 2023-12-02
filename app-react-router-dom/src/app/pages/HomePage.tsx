import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { PageContent } from '../components/PageContent';
import { PageTitle } from '../components/PageTitle';
import { TypeBadge } from '../components/TypeBadge';
import { PokemonTypes } from '../logic/pokemonType';
import { Link } from 'react-router-dom';

const NavigationPannel = styled.main`
  display: flex;
  flex-direction: column;

  padding: 2.2rem;
  border-radius: 1rem;
  gap: 1.6rem;
  background: #2196f3;

  > :first-child {
    border-radius: 1.5rem;
    padding: 1.2rem 1.8rem;
    font-size: 2rem;

    cursor: pointer;

    font-weight: bold;

    color: #03303b;
    background: linear-gradient(90deg, #9edceb, #63dbf9);
    box-shadow: 0.1rem 0.1rem 0.3rem 0 #00000088;

    transition: 0.2s;
    transform: none;

    &:hover {
      transform: scale(1.02);
      background: linear-gradient(45deg, #9edceb, #63dbf9);
      box-shadow: 0.2rem 0.2rem 0.3rem 0.2rem #00000088;
    }
  }

  > :last-child {
    background: linear-gradient(45deg, #9edceb, #63dbf9);
    border-radius: 0.8rem;

    &:hover {
      background: linear-gradient(90deg, #9edceb, #63dbf9);
    }
  }

  ul {
    margin: 0;
    padding: 1.2rem 0.5rem;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-items: center;

    ${TypeBadge} {
      font-size: 1.2rem;
    }

    > li {
      cursor: pointer;

      transform: none;
      box-shadow: none;
      transition: 0.2s;

      &:hover {
        box-shadow: 0.1rem 0.1rem 1.25rem 0.125rem #00000066;
        transform: scale(1.2);
      }
    }
  }

  a {
    text-decoration: none;
  }
`;

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <PageContent>
        <PageTitle>🔷 Home Page 🔷</PageTitle>

        <NavigationPannel>
          <Link to="/pokemon/">All Pokemon</Link>
          <ul>
            {PokemonTypes.map(({ name, id }) => (
              <li>
                <Link key={name} to={`/type/${id}`}>
                  <TypeBadge name={name}>{name}</TypeBadge>
                </Link>
              </li>
            ))}
          </ul>
        </NavigationPannel>
      </PageContent>
    </>
  );
};
