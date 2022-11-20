import styles from './buttons.module.scss'
let result = ''
let number = ''
let symbol = ''
let isPercent = false
let isSymbol = true
let isEquals = true

function Buttons(props) {

    function handleClick(event) {
        console.log('handleClick');

        const textContent = event.target.textContent

        if (textContent === '×' ||
            textContent === '+' ||
            textContent === '−' ||
            textContent === '÷') {
            setSymbol(textContent)
        }
        else if (textContent === '=') {
            equals()
        }
        else if (textContent === 'AC') {
            reset()
        }
        else if (textContent === '.') {
            setDot(textContent)
        }
        else if (textContent === '%') {
            setPercent(textContent)
        }
        else {
            setDisplay(textContent)
        }
    }

    function setDisplay(event) {
        console.log('setDisplay');
        if (result.toString().length < 9) {
            props.display(result += event)
        } else {
            console.log('result is 9 symbols ' + result);
        }
    }

    function setPercent(eventPercent) {
        console.log('setPercent');
        isPercent = true
        props.display('%')
    }

    function setDot(eventDot) {
        console.log('setDot');
        if (result.includes('.')) {
            console.log('dot already exists')
        } else {
            setDisplay(eventDot)
        }
    }

    function setSymbol(event) {
        console.log('setSymbol');
        if (isSymbol) {
            number = result
            result = ''
            symbol += event
            props.display(symbol)
            isSymbol = false
            isEquals = true
        }
    }

    const check = () => {
        console.log('result : ' + result)
        console.log('number : ' + number)
        console.log('symbol : ' + symbol)
        console.log('isSymbol : ' + isSymbol)
    }

    function reset() {
        console.log('reset');
        props.display('0')
        result = ''
        number = ''
        symbol = ''
        isSymbol = true
        isEquals = true
        isPercent = false
        check()
    }

    function getResult() {
        console.log('getResult')
        if (isPercent) {
            result = eval(number + symbol + ((number * result) / 100))
            isPercent = false
        }
        else {
            check()
            result = eval(number + symbol + result)
            if ((result).toString().length > 10) {
                result = result.toPrecision(6)
            }
        }
    }

    function equals() {
        console.log('equals');
        if (isEquals) {
            convertSymbol()
            getResult()
            props.display(result)
            number = result
            symbol = ''
            isSymbol = true
            isEquals = false
        }
        else {
            console.log('isEquals : false');
        }
        check()
    }
    // because of html design I need to use special characters,
    // which is not useful in JavaScript 
    function convertSymbol() {
        console.log('convertSymbol');

        switch (symbol) {
            case '×':
                symbol = '*'
                break
            case '−':
                symbol = '-'
                break
            case '÷':
                symbol = '/'
                break
            case '%':
                symbol = '%'
                break
            case '+':
                symbol = '+'
                break
            default:
            // code block
        }
    }

    return (
        <div className={styles.container}>
            <button
                className={styles.zero}
                type='button'
                onClick={event => handleClick(event)}
            >0</button>
            <button
                className={styles.one}
                type='button'
                onClick={event => handleClick(event)}
            >1</button>
            <button
                className={styles.two}
                type='button'
                onClick={event => handleClick(event)}
            >2</button>
            <button
                className={styles.three}
                type='button'
                onClick={event => handleClick(event)}
            >3</button>
            <button
                className={styles.four}
                type='button'
                onClick={event => handleClick(event)}
            >4</button>
            <button
                className={styles.five}
                type='button'
                onClick={event => handleClick(event)}
            >5</button>
            <button
                className={styles.six}
                type='button'
                onClick={event => handleClick(event)}
            >6</button>
            <button
                className={styles.seven}
                type='button'
                onClick={event => handleClick(event)}
            >7</button>
            <button
                className={styles.eight}
                type='button'
                onClick={event => handleClick(event)}
            >8</button>
            <button
                className={styles.nine}
                type='button'
                onClick={event => handleClick(event)}
            >9</button>
            <button
                className={styles.dot}
                type='button'
                onClick={event => handleClick(event)}
            >.</button>
            <button
                className={styles.equals}
                type='button'
                onClick={event => handleClick(event)}
            >&#61;</button>
            <button
                className={styles.plus}
                type='button'
                onClick={event => handleClick(event)}
            >&#43;</button>
            <button
                className={styles.minus}
                type='button'
                onClick={event => handleClick(event)}
            >&#8722;</button>
            <button
                className={styles.multiply}
                type='button'
                onClick={event => handleClick(event)
                }
            >&#215;</button>
            <button
                className={styles.device}
                type='button'
                onClick={event => handleClick(event)}
            >&#247;</button>
            <button
                className={styles.present}
                type='button'
                onClick={event => handleClick(event)}
            // onClick={(e) => console.log(e)}
            >&#37;</button>
            <button
                className={styles.plusMinus}
                type='button'
                onClick={event => handleClick(event)}
            >&#177;</button>
            <button
                className={styles.AC}
                type='button'
                onClick={event => handleClick(event)}
            >AC</button>
        </div >

    )
}







export { Buttons }