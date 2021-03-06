import schema from './schema';

export default {
    handler: `${__dirname.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}/handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'signup',
                request: {
                    schema: {
                        'application/json': schema,
                    },
                },
                private: true,
            },
        }
    ],
    environment: {
        API_KEY: process.env.API_KEY,
        ENDPOINT_URL: process.env.ENDPOINT_URL,
    },
}
