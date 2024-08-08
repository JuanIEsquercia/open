
const Header = ({ props }) => {

    return (
        <div>
            <h1>{props.course}</h1>
            <p>
                {props.parts[0].name} {props.parts[0].exercises}
            </p>
        </div>
    )
}

const Content = ({ parts }) => {

    return (
        <div>
            <h1>{parts[1].name}</h1>
            <p>
                {parts[1].name} {parts[1].exercises}
            </p>
        </div>
    )
}
const Total = ({ parts }) => {
    const exercisesTotal = parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <>
            <p>
                {parts[2].name} {parts[2].exercises}
            </p>
            <p>Number of exercises{exercisesTotal}</p>
        </>
    )
}

const Display = (props) => {
    return (
        <div>{props.counter}</div>
    )
}
const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}


const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    const [counter, setCounter] = useState(0)
    console.log('rendering with counter value', counter)

    const increaseByOne = () => {
        console.log('increasing, value before', counter)
        setCounter(counter + 1)
    }

    const decreaseByOne = () => {
        console.log('decreasing, value before', counter)
        setCounter(counter - 1)
    }

    const setToZero = () => {
        console.log('resetting to zero, value before', counter)
        setCounter(0)
    }
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }
    const [value, setValue] = useState(10)

    const hello = (who) => {
        const handler = () => {
            console.log('hello', who)
        }
        return handler
    }

    return (
        <>
            <Header props={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
            <Display counter={counter} />
            <Button onClick={increaseByOne} text="plus" />
            <Button onClick={setToZero} text="zero" />
            <Button onClick={decreaseByOne} text="minus" />
            <div>
                {left}
                <button onClick={handleLeftClick}>left</button>
                <button onClick={handleRightClick}>right</button>
                {right}
                <p>{allClicks.join(' ')}</p>
            </div>
            <div>
                {left}
                <button onClick={handleLeftClick}>left</button>
                <button onClick={handleRightClick}>right</button>
                {right}
                <History allClicks={allClicks} />
            </div>
            <div>
                {value}
                <button onClick={hello('world')}>button</button>
                <button onClick={hello('react')}>button</button>
                <button onClick={hello('function')}>button</button>
            </div>
        </>
    )
}