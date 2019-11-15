import React from "react";
import search from '../search.svg';

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
            <div className = "navbar">
             {/*putting the handle submit on the form instead of the button means when you hit enter it will also 
                   submit the form */} 

                <section className = "search-form-section" >             

                    <form className = "search-form" onSubmit = {this.handleSubmit}>

                    <h2>GitHub</h2>

                    <div className='search-div' >

                        <input 
                            className='search'
                            type = "text" 
                            name = "search" 
                            //placeholder = "search" 
                            value = {this.state.search}
                            onChange = {this.handleChange} 
                        />

                        <img src={search} alt='' className='search-img' onClick = {this.handleSubmit} />
                        
                    </div>

                    </form>

                </section>

            </div>

        );
    }


}

export default SearchForm;