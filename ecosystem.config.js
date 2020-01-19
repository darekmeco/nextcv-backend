module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: './',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: 'localhost', // database endpoint
        DATABASE_PORT: '3306',
        DATABASE_NAME: 'nextcv-strapi', // DB name
        DATABASE_USERNAME: 'root', // your username for psql
        DATABASE_PASSWORD: 'antek', // your password for psql
      },
    },
  ],
};
