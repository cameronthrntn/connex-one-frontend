<p align="center">

  <h1 align="center" style="color: #fff; font-weight: 600;">
    Connex One Frontend
  </h1>

  <p align="center" style="font-size: 1.2rem;">
 This is Cameron Thornton's submission for the Frontend portion of the Connex One technical assessment, taken 03/08/2023.

  </p>

  <hr />

[zst]: https://zustand.surge.sh/
[sty]: https://styled-components.com/
[njs]: https://nextjs.org/
[cyp]: https://www.cypress.io/
[frm]: https://www.framer.com/motion/
[atm]: https://atomicdesign.bradfrost.com/chapter-2/
[cyp]: https://www.cypress.io/
[rqu]: https://react-query-v3.tanstack.com/
[d3]: https://d3js.org/
[cjs]: https://www.chartjs.org/

This project is being developed in [**NextJS**][njs], with [**styled-components**][sty] for styling, [**zustand**][zst] for state management, [**framer-motion**][frm] for animations, and [**cypress**][cyp] for end-to-end testing.

- ## 🎉 Installation and setup

  The general setup for this project is the same as any NextJS project, ensure you are using at least `Node 16.x` with `npm` installed, then install dependencies through

  ```bash
    yarn
  ```

  one can then spin up the dev server through

  ```bash
    yarn run dev
  ```

- ## 📖 Documentation

  - ### 🚧 Structure

    This project uses React hooks for state management such as **useState** and **useEffect**. Functional components should be used where possible due to their reduced compile size and the phasing out of class-components by the react development team.

    The project also tries to follow an [**atomic**][atm] component structure. The basic idea being to split components into organisms, molecules and atoms. organisms being made of many molecules, and molecules being made of many atoms. This is a personal preference of mine and should ideally be adhered to where possible.

  - ### ⚙️ State Management

    State management is done through [**Zustand**][zst]. The store for zustand is currently located in the `services` directory.

  - ### 🧪 Testing

    This project uses [**Cypress**][cyp] for it's end-to-end testing. In order to run the tests locally you will ned to change the `NEXT_PUBLIC_NODE_ENV` value to `test` in order to get tests to run (unauthenticated).

    To open the cypress console and run individual spex files run

    ```bash
    npx cypress open
    ```

    and to run the entire test suite in-terminal use

    ```bash
    npx cypress run
    ```

</p>
