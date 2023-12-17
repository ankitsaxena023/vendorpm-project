## vendorPm Project

### App.tsx

1. Create peopleArray (Array of people objects)

```js
const peopleArray = [
  { name: "Apurav Chauhan", country: "India" },
  { name: "Brian M. Disca", country: "Canada" },
  { name: "James Chris Johnson", country: "Mexico" },
];
```

2. In the src folder Created a component People.tsx and passed imported it in App.tsx and provided peopleArray as a prop in it.

3. In the People.tsx get the peopleArray and using map function created a table and passed the name and country values.
