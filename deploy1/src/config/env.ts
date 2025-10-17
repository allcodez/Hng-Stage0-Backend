export const config = {
    port: process.env.PORT || 3000,
    catFactApiUrl: process.env.CAT_FACT_API_URL || 'https://catfact.ninja/fact',
    apiTimeout: parseInt(process.env.API_TIMEOUT || '5000'),
    user: {
        email: process.env.USER_EMAIL || 'your.email@example.com',
        name: process.env.USER_NAME || 'Your Full Name',
        stack: process.env.USER_STACK || 'Node.js/Express/TypeScript'
    }
};