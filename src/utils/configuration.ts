interface Configuration {
    serverUrl: string;
}

let config : Configuration
if (__DEV__) {
    let serverUrl;
    if (process.env.USE_LOCAL_SERVER == 'true') {
        serverUrl = 'http://localhost:8080/graphql'
        console.warn('Fetching graphql data from localhost')
    } else {
        serverUrl = 'https://vtex-app-poc.vtex.systems/graphql'
    }
    config = {
        serverUrl: serverUrl, 
    }
} else {
    config = {
        serverUrl: 'https://vtex-app-poc.vtex.systems/graphql'
    }
}

export const Configuration = config
