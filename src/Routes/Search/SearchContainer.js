import React from "react";
import SearchPresenter from "./SearchPresenter";
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

    render() {
        const {movieResults, tvResults, searchTerm, loading, error} = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
            />
        );
    }


}
