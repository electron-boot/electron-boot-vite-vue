import { app } from 'electron';
app.on('ready', async () => {
  const { Bootstrap } = require('@electron-boot/framework');
  const { AppModule } = require('./main/app');
  await Bootstrap.configure({
    imports: [AppModule],
  }).run();
});
