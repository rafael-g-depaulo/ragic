import { styled } from "styled-components"
import { Type } from "../logic/pokemonType"

const typeColors: { [k in Type["name"]]: { bg: string; outline: string } } = {
  normal: { bg: "#A8A878", outline: "#6D6D4E" },
  fire: { bg: "#F08030", outline: "#9C531F" },
  fighting: { bg: "#C03028", outline: "#7D1F1A" },
  water: { bg: "#6890F0", outline: "#445E9C" },
  flying: { bg: "#A890F0", outline: "#6D5E9C" },
  grass: { bg: "#78C850", outline: "#4E8234" },
  poison: { bg: "#A040A0", outline: "#682A68" },
  electric: { bg: "#F8D030", outline: "#A1871F" },
  ground: { bg: "#E0C068", outline: "#927D44" },
  psychic: { bg: "#F85888", outline: "#A13959" },
  rock: { bg: "#B8A038", outline: "#786824" },
  ice: { bg: "#98D8D8", outline: "#638D8D" },
  bug: { bg: "#A8B820", outline: "#6D7815" },
  dragon: { bg: "#7038F8", outline: "#4924A1" },
  ghost: { bg: "#705898", outline: "#493963" },
  dark: { bg: "#705848", outline: "#49392F" },
  steel: { bg: "#B8B8D0", outline: "#787887" },
  fairy: { bg: "#EE99AC", outline: "#9B6470" },
  "???": { bg: "#68A090", outline: "#44685E" },
}

export const TypeBadge = styled.span<{ name: Type["name"] }>`
  background: ${({ name }) => typeColors[name].bg};

  text-transform: capitalize;
  padding: 0.1rem 0.3rem;
  border: 0.1rem solid ${({ name }) => typeColors[name].outline};
  border-radius: 0.4rem;

  color: white;
  font-weight: bold;
  font-size: 0.8rem;
`
