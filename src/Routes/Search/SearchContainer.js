import React from "react";
import SearchPresenter from "./SearchPresenter";
import {moviesApi, tvApi} from "../../api";
//Container = data
//presenter = view
export default class extends React.Component{

    state = {
        movieResults: null,
        tvResults: null,
        searchTerm:"",
        loading:false,
        error: null
    };

    // componentDidMount() {
    //     this.handleSubmit();
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm!==""){
            this.searchByTerm();

        }
    };

    updateTerm = (event) => {
        const {target:{value}} = event;
        console.log(value);
        this.setState({
            searchTerm:value
        })
    };


    searchByTerm = async () =>{
        const {searchTerm} = this.state;
        this.setState({loading:true});
        try {
            const {data:{results:movieResults}} = await moviesApi.search(searchTerm);
            const {data:{results:tvResults}} = await tvApi.search(searchTerm);
            // console.log(movieResults,tvResults);
            this.setState({movieResults,tvResults});
        }catch (e) {
            this.setState({error:"Can't find results."});
        }finally {
            this.setState({loading:false});
        }

    };

    render() {
        const {movieResults, tvResults, searchTerm, loading, error} = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }


}
