import React from 'react'

import User from './User'
import PaperRefined from '../../components/PaperRefined'
import Search from './Search'

class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null,
        searchPrase: ''
    }

    componentDidMount() {
        fetch('https://randomuser.me/api?results=10')
            .then(response => response.json())
            .then(dataFromResponse => {
                this.setState({
                    randomUserData: dataFromResponse.results
                })
            })
    }

    searchPhraseChangeHandler = (even) => {
        this.setState({
            searchPrase: even.target.value
        })
    }

    render() {
        const userLists = (
            this.state.randomUserData
            &&
            this.state.randomUserData
                .map(user => (
                    <User
                        key={user.login.uuid}
                        user={user}
                    />
                ))
        )

        return (
            <div>
                <PaperRefined>
                    <Search
                        searchPhrase={this.state.searchPrase}
                        searchPhraseChangeHandler={this.searchPhraseChangeHandler}
                    />
                </PaperRefined>
                <PaperRefined>
                    {
                        userLists
                    }
                </PaperRefined>
            </div>
        )
    }
}

export default FetchingRandomUsers