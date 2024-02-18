# useEffect Timer

## Description
Create a functional component `EffectTimer` that uses the `useEffect` hook to implement a timer that counts up every second.

## Setup
1. Fork the repository containing this exercise.
2. Clone your forked repository to your local machine:
   ```
   git clone <your-forked-repo-url>
   ```
3. Navigate to the project directory:
   ```
   cd path/to/repo
   ```
4. Create a new React application:
   ```
   npx create-react-app .
   ```

## Tasks
1. In the `src` folder, create a file `EffectTimer.js`.
2. Define `EffectTimer` as a functional component.
3. Use the `useState` hook to create a `seconds` state variable initialized to 0.
4. Use the `useEffect` hook to set up an interval that increments the `seconds` state every 1000 milliseconds.
5. Ensure the interval is cleared when the component unmounts.
6. Display the number of seconds in the component.
7. Render `EffectTimer` in `App.js`.

## Submission
1. Commit your changes:
   ```
   git add .
   git commit -m "Add EffectTimer component"
   ```
2. Push to your fork:
   ```
   git push
   ```
3. Create a pull request from your fork to the original repository.
