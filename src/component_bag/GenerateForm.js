import React, { Component } from 'react';

class GenerateForm extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    spitFormFields=(fields)=>{
        for(let i=0;i<=fields.length; i++){
            fields.map((field, index)=>{
               console.log(field)
               
            })
        }
        return 0
    }
    render() {
        const {fields} = this.props
        return (
            <form>
                {this.spitFormFields(fields)}
            </form>
        );
    }
}

export default GenerateForm;