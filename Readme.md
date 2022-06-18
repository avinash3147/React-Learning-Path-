## React Learning Path From zero to Expert Level
### 15th June 2022

React Uses Declarative Approach
    Define desired target states and let react figure out actutal javascript DOM instructions
    ```Q: What is declarative approach?```

Imperative Approcah - Javascript:
    step by step instructions
    ```
    const para = document.createElement('p')
    para.textContent = 'This is a paragraph'
    document.getElementById('root').append(para)
    ```

### Wrap children in another custom component using props.children
### styles can be applied using by appening existing classnames to parent classnames
    const classes = 'card ' + props.className
    <div className={classes}>{props.children}</div>

Composition - combining small components 

if we directly call a function onclick and set state inside that function then it will go into infinite loop
    onClick={clickHandler()} -> wrong - Executed on page load
    onClick={clickHandler} -> Exceuted only on clicking


### Approach for updating based on previous state
```
whenever we are updating previous state don't do this way
    setUserInput({
            ...userInput,
            date: event.target.value
        })
instead do this
    setUserInput((prevState) => {
        return {...prevState, title:event.target.value}
    })
This will ensure that update will happen correctly. In previous approach if react is doing multiple updates then we get outdated updates
```

### Styling Components and Dynamic props
    Use Styled Compononent Package
    ```
        className={isValid && 'invalid'}

                or
        
        using props -> invalid={!isValid}
        in css ->border: 1px solid ${props => (props.invalid ? 'red' : 'black' )};
    ```