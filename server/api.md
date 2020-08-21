url: http://localhost:5000

### .get `/todos`

-returns an array of all todo objects

### .post `/todos/`

- Creates a new todo object with the body
- returns the created todo
- body example

```
{
  "description": "a description"
}
```

### .put `/todos/:id`

- modifies the todo with the body
- returns the modified todo

### .delete `/todos:id`

- deletes the todo with the given id
- returns a 404 error if id does not exist
- returns the array after deleting
