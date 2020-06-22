import React, { Component } from 'react';
import CalcButton from './Button';
import Display from './Display';
import '../CSS/CalculatorHolder.css'
import { AiOutlinePercentage } from 'react-icons/ai'
import { FcEmptyTrash } from 'react-icons/fc'
import { BsBackspace } from 'react-icons/bs'
import { RiDivideLine } from 'react-icons/ri'

class calculatorHolder extends Component {


    state = {
        "display": "",
        "calc": []
    };

    allClearClickHandler = () => {
        console.log("Inside All Clear Click Handler")
        this.setState({
            "display": "",
            "calc": []
        })
    }

    backSpaceClickkHandler = () => {
        console.log("Inside Bsckspace Click Handler")
        let display = this.state.display;

        this.setState({
            "display": display.slice(0, -1)
        })
    }

    numberClickHandler = (event, num) => {
        console.log("Inside Number Click Handler");
        console.log(this.state);
        let display = this.state.display;

        this.setState({
            "display": display + num
        })
        console.log(this.state);
    }

    operatorClickHandler = (event, op) => {
        console.log("Inside Operator Click Handler");
        console.log(this.state);
        let calc = this.state.calc;
        const display = this.state.display;
        if (display === "")
            return;
        calc.push(display);
        calc.push(op);
        this.setState({
            "display": "",
            "calc": calc
        })
        console.log(this.state);
    }

    dotClickHandler = () => {
        console.log("Inside Dot Click Handler");
        console.log(this.state);
        let display = this.state.display;
        display = display === "" ? "0." : display.includes(".") ? display : display + ".";
        this.setState({
            "display": display
        })

        console.log(this.state);
    }

    negateClickHandler = () => {
        console.log("Inside Negate Click Handler");
        console.log(this.state);
        let display = this.state.display;
        if (display === "")
            return;
        display = display.includes("-") ? display.slice(1) : "-" + display;
        this.setState({
            "display": display
        })

        console.log(this.state);
    }

    equalClickHandler = () => {
        const calculate_operand = (calc, operand) => {
            if (calc.length === 0)
                return calc;
            while (true) {
                let ind = calc.indexOf(operand);
                if (ind === -1)
                    break;
                let a = 0
                switch (operand) {
                    case "/": a = parseFloat(calc[ind - 1]) / parseFloat(calc[ind + 1]);
                        break;
                    case "X": a = parseFloat(calc[ind - 1]) * parseFloat(calc[ind + 1]);
                        break;
                    case "+": a = parseFloat(calc[ind - 1]) + parseFloat(calc[ind + 1]);
                        break;
                    case "-": a = parseFloat(calc[ind - 1]) - parseFloat(calc[ind + 1]);
                        break;
                    default: break;

                }
                calc.splice(ind - 1, 3, a);

            }
            return calc
        }
        console.log("Inside Equal Click Handler")
        let calc = this.state.calc;
        let display = this.state.display;
        console.log(calc);
        if (calc.length === 0)
            return;
        if (calc.length === 2 & display === "")
            return;
        if (calc.length > 2 & display === "")
            calc.slice(0, -1);
        else
            calc.push(display);

        console.log(calc);
        calc = calculate_operand(calc, "/");
        calc = calculate_operand(calc, "X");
        calc = calculate_operand(calc, "+");
        calc = calculate_operand(calc, "-");
        this.setState({
            "display": String(calc[0]),
            "calc": []
        });

    }

    percentClickHandler = () => {
        console.log("Inside Percent Click Handler");
        console.log(this.state);
        let display = this.state.display;
        display = parseFloat(display) / 100;
        this.setState({
            "display": display,
            "calc": []
        })
        console.log(this.state);
    }

    render() {
        return (
            <div className="calc">
                <Display text={this.state.display}/>
                <div className="buttonHolder">
                    <CalcButton name="allClear" icon={<FcEmptyTrash size="29px" />} clickHandler={this.allClearClickHandler} />
                    <CalcButton name="backSpace" icon={<BsBackspace size="29px" />} clickHandler={this.backSpaceClickkHandler} />
                    <CalcButton name="percentage" icon={<AiOutlinePercentage size="29px" />} clickHandler={this.percentClickHandler} />
                    <CalcButton name="divide" icon={<RiDivideLine size="29px" />} clickHandler={(event) => { this.operatorClickHandler(event, "/") }} />
                    <br />
                    <CalcButton name="7" clickHandler={(event) => { this.numberClickHandler(event, '7') }} />
                    <CalcButton name="8" clickHandler={(event) => { this.numberClickHandler(event, '8') }} />
                    <CalcButton name="9" clickHandler={(event) => { this.numberClickHandler(event, '9') }} />
                    <CalcButton name="X" clickHandler={(event) => { this.operatorClickHandler(event, "X") }} />
                    <br />
                    <CalcButton name="4" clickHandler={(event) => { this.numberClickHandler(event, '4') }} />
                    <CalcButton name="5" clickHandler={(event) => { this.numberClickHandler(event, '5') }} />
                    <CalcButton name="6" clickHandler={(event) => { this.numberClickHandler(event, '6') }} />
                    <CalcButton name="-" clickHandler={(event) => { this.operatorClickHandler(event, "-") }} />
                    <br />
                    <CalcButton name="1" clickHandler={(event) => { this.numberClickHandler(event, '1') }} />
                    <CalcButton name="2" clickHandler={(event) => { this.numberClickHandler(event, '2') }} />
                    <CalcButton name="3" clickHandler={(event) => { this.numberClickHandler(event, '3') }} />
                    <CalcButton name="+" clickHandler={(event) => { this.operatorClickHandler(event, "+") }} />
                    <br />
                    <CalcButton name="." clickHandler={this.dotClickHandler} />
                    <CalcButton name="0" clickHandler={(event) => { this.numberClickHandler(event, '0') }} />
                    <CalcButton name="-/+" clickHandler={this.negateClickHandler} />
                    <CalcButton name="=" clickHandler={this.equalClickHandler} />
                </div>
            </div>
        );
    }

}

export default calculatorHolder;