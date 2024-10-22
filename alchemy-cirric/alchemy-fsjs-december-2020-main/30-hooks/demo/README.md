# React Hooks

## Focus

- react router
- `waitFor` / testing
- `useState`
- `useEffect`

## Agenda

- react router
  - create routes
    - `Home` page
    - `About` page
    - `Contact` page
  - browser router vs hash router
  - routes with params
    - `Color` page `/color/:color`
  - `useParams`
  - `useHistory`
  - `useLocation`
  - link to pages
- presentation/container
  - `ColorPicker`, `ColorControls`, `ColorDisplay`
  - `AllQuotes`, `ByCharacterQuotes`, `RandomQuote`
- useState
  - refactor `ColorPicker` to use `useState`
    - pass initialColor into `ColorPicker`
    - put `useState` into if block
- useEffect
  - refactor `AllQuotes`, `ByCharacterQuotes`, `RandomQuote`
    - `useEffect` without second param
    - `useEffect` with empty array
    - `useEffect` with date in array
