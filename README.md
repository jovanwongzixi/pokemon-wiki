# pokemon-wiki

## Description

pokemon-wiki is a mini wiki that allows users to search for concise data about the pokemon they want. Design is heavily inspired by Bulbapedia XD.

## Tech Used

- VueJS
- Vitest
- Axios

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).


## Download project

```sh
git clone https://github.com/jovanwongzixi/pokemon-wiki.git
cd pokemon-wiki
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run Test Coverage
```sh
npm run coverage
```

## Design Considerations

### Interface Design

#### Concise and clear
Being a small scale wiki, the goal should be to provide concise information in a simple aesthetic for user to process easily and quickly. Hence, I only chose to display information that are more important.

Different colour background used in PokemonCard for easy recognition of Pokemon primary type

### Code Design

#### Utilising Components

Application was designed to be based on components, with PokemonCard being the 'parent' component that contain multiple 'child' components(Pokemon attributes). I attempted to follow the Open-Closed Principle used in Object Oriented Programming, where PokemonCard component should be open for extension(integrating more sub-components easily) but closed for modification(logic for existing sub-components can remain the same).

Initially, I used a BasicComponent for all sub-components that did not require special design and similar rendering format so future components can be added without having to code a new component from scratch. However, that meant that more preprocessing of information retrieved from API has to be done in PokemonCard, which made the code look even more cluttered. Changes to information in existing sub-components will have to be made in PokemonCard which seemed unintuitive to me.