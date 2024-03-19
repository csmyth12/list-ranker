import { RankerOption } from '@/types/RankerOption'

const PhantomMenace = {
    id: 1,
    name: 'The Phantom Menace',
    image: 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
}

const AttackOfClones = {
    id: 2,
    name: 'Attack of the Clones',
    image: 'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg'
}

const Revenge = {
    id: 3,
    name: 'Revenge of the Sith',
    image: 'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg'
}

const NewHope: RankerOption = {
    id: 4,
    name: 'A New Hope',
    image: 'https://m.media-amazon.com/images/M/MV5BZWZmZWU2NjktYWQ5OS00ZWRmLWIzMmItMmNiOGUxM2Q4NzI2XkEyXkFqcGdeQXVyNjE1MDg3Mzk@._V1_.jpg'
}

const Empire: RankerOption = {
    id: 5,
    name: 'Empire Strikes Back',
    image: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
}

const Jedi: RankerOption = {
    id: 6,
    name: 'Return of the Jedi',
    image: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
}

export const StarWarsFilms = [
    PhantomMenace,
    AttackOfClones,
    Revenge,
    NewHope, 
    Empire,
    Jedi
]
