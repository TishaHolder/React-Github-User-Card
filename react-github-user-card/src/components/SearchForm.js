import React from "react";

class SearchForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: ""
            
        };
    }

    handleChange = (event) => {
        this.setState ( { [event.target.name]: event.target.value } );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchedUserName (this.state.search);
        this.setState( {search: "" } );//resets form after submit
    }

    render() {
        return (
            <div>
                {/*putting the handle submit on the form instead of the button means when you hit enter it will also 
                   submit the form */}
                <form onSubmit = {this.handleSubmit}>

                    <input type = "text" 
                           name = "search" 
                           placeholder = "search" 
                           value = {this.state.search}
                           onChange = {this.handleChange} 
                    />

                    <button type = "submit"> Search </button>

                </form>

            </div>

        );
    }


}

export default SearchForm;