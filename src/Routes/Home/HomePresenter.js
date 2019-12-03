import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding:0px 20px;
`;

const HomePresenter = ({nowPlaying,popular,upcoming,loading,error}) =>
    <>
        <Helmet>
            <title>Movies | Nomflix</title>
        </Helmet>
        {loading ? (<Loader />) :(
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (<Section title="Now playing">
                {nowPlaying.map(movie =>
                        <Poster key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date.substring(0,4)}
                                isMovie={true} />
                    // <span key={movie.id}>{movie.title}</span>
                )}
            </Section> )}
            {upcoming && upcoming.length > 0 && (<Section title="Upcoming playing">
                {upcoming.map(movie =>
                        <Poster key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date.substring(0,4)}
                                isMovie={true} />
                    // <span key={movie.id}>{movie.title}</span>
                )}

            </Section> )}
            {popular && popular.length > 0 && (<Section title="Popular playing">
                {popular.map(movie =>
                        <Poster key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date.substring(0,4)}
                                isMovie={true} />
                    // <span key={movie.id}>{movie.title}</span>
                )}
            </Section> )}
            {error && <Message color="#eb4d4b" text={error}/>}
        </Container>)}


    </>
    ;

HomePresenter.propTypes ={
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;
