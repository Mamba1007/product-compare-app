# Product Compare App

## Features
- React + Webpack + Tailwind
- Product grid with search filter
- Compare up to 3 products side by side
- Highlight differences
- Dark/Light mode toggle
- Responsive design - Can test on any view ( mobile, dekstop, laptop, super computer, etc)
- Hanlded all edge cases like - 
    1. User can't remove product when the selected count is === 2
    2. Clicking on clear all will take user back to the main grid screen.
    3. Sticky navbar.
    4. Sticky footer on selection.
    5. Colors has been handled for dark and light modes separetely. 
    6. Handled empty state on search. ( could have been move into separate util to resuse, due to time limit and since the block is not much reusable here I have put it within the same file )

## Scripts
```bash
npm install
npm start   # dev server at http://localhost:3000
npm run build # production build in /dist
```
