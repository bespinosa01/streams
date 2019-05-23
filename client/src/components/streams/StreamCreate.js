import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

renderError({error, touched}){
	if(touched && error){
		return(
			<div className="ui error message">
				<div className="header">{error}</div>
			</div>
			);
	}

}

renderInput= ({input, label, meta})=>{
			console.log(meta.error);

	return (
	<div className="field ">
		<label>{label}</label>
		<input {...input} />	
		{this.renderError(meta)}
	</div>
		);

	

}
onSubmit(formValues){
console.log(formValues);
}
render(){
	return (
		<form 
		onSubmit={this.props.handleSubmit(this.onSubmit)}
		className="ui form error"
		>
		<Field name="title" component={this.renderInput} label="Enter Title"/>
		<Field name="description" component={this.renderInput} label="Enter Description"/>
		<button className="ui button primary">Submit</button>
		</form>
		);
	}


}

const validate =(formValues)=>{
	const errors={};

	console.log(errors);

	if(!formValues.title){
		errors.title="You must enter a Title";
	}
	if(!formValues.description){
		errors.description="Please enter a description";

	}

	return errors;

};
export default reduxForm({
	form: 'streamCreate',
	validate
	})(StreamCreate);