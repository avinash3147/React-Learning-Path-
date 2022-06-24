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

### Limitations of JSX
    - can't return more that one root JSX Element
    - we can wrap content inside ```<div>``` but it will add unnecesary div's into dom
  
### Create Wrapper
    ```
        const Wrapper = props => {
            return props.children;
        }

        export default Wrapper;

        <Wrapper>...content</Wrapper>
    ```
    * We can use ```<React.Fragment></React.Fragment>``` or simply ```<></>```

### React Portals


### Refs
    - gives access to other dom elements
    - useRef
    ```
        const nameInputRef = useRef()
        const ageInputRef = useRef()

        submitHandler = (event) => {
            name = nameInputRef.current.value

            // add logic

            nameInputRef.current.value = '' // Not Recomended instead Use useState 
        }

        <form>
            <input  type='text' ref={nameInputRef} />
        </form>
    ```
    - ```no need to use state and onChange function```
    - If we use ``refs`` in components we call them uncontrolled components beacuse react is not managing the state

### useEffect
    - ```useEffect(() => { ... }, [dependencies])```
    - 1. Func that should be executed after every component evaluation if specified dependecies changed
    - 2. functiion only runs if dependencies change
    - ```If no dependencies it will runs only once on first reload
    - ```
    - 
    - // useEffect(() => {
        //   const identifier = setTimeout(() => {
        //     console.log('Checking form validity!');
        //     setFormIsValid(
        //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
        //     );
        //   }, 500);

        //   return () => {
        //     console.log('CLEANUP');
        //     clearTimeout(identifier);
        //   };
        // }, [enteredEmail, enteredPassword]);
  ```

### what is debouncing

### useReducer
 - ``` const [state, dispathFun] = useReducer(reducerFun, initialState, initFun)```

### Rules of Hooka:
    - only call react hooks in react component function or custom hook
    - should be called on top. don't call inside nested functions or block statements

# Read More about Refs