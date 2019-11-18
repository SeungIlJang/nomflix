import React from "react";
import DetailPresenter from "./DetailPresenter";
//Container = data
//presenter = view
export default class extends React.Component{

    state = {
       result: null,
        loading: false,
        error: null
    };

    render() {
        const {result,  loading, error} = this.state;
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        );
    }


}
