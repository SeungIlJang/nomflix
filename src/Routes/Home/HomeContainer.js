import React from "react";
import HomePresenter from "./HomePresenter";
import {moviesApi} from "../../api";
//Container = data
//presenter = view
export default class extends React.Component{

    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        loading:true,
        error: null
    };

    async componentDidMount() {
        try {
           const {data:{results:nowPlaying}} =  await moviesApi.nowPlaying();
           const {data:{results:upcoming}} =  await moviesApi.upcoming();
           const {data:{results:popular}} =  await moviesApi.popular();


           this.setState({
               nowPlaying,
               upcoming,
               popular
           })
        }catch (e) {
            this.setState({
                error:"Can't find movies information."
            })
        }finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const {nowPlaying, upcoming, popular, loading, error} = this.state;
        // console.log(this.state);
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }


}
