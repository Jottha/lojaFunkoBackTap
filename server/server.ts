import { Config } from './environments/environments';
import { App } from './app';

let port = process.env.PORT || Config.PORT;

const app = new App();

app.server.listen(port, function() {
    console.log(`server running in + ${port}`);
});

process.once('SIGUSR2', () => this.app.closeDataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => this.app.closeDataBaseConnection('execução interrompida', () => process.exit(0)));