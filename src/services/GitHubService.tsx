import axios from 'axios';

function GetRepositories() {
    return axios.get('https://api.github.com/users/juliocnp/repos');
}

export default GetRepositories;