
import React, { Component } from 'react'

export class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            title: '',
        }
    }
    render() {
        const plus = () => {
            if (this.state.count < 10)
                this.setState({ count: this.state.count + 1 })
        }
        const minus = () => {
            if (this.state.count > 0)
                this.setState({ count: this.state.count - 1 })
        }

        const onChange = (e) => {
            console.log(e.target.value)
            this.setState({ title: e.target.value })
        }
        const onSelect = (e) => {
            console.log(e.target.value)
        }
        const onCheck = (e) => {
            console.log(e.target.value)
        }

        return (
            <div>
                <h1>Name: {this.state.title}</h1>
                <h1>Family name: {this.state.title}</h1>
                <h1>Counting: {this.state.count}</h1>
                <input type="text" placeholder='Name' onChange={onChange} />
                <input type="text" placeholder='Family name' onChange={onChange} />
                <select onChange={onSelect} name="" id="">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="checkbox" onChange={onCheck} value="tekshirildi" />
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
            </div>
        )
    }
}

export default State