import { App } from './app';

const appInstance = new App();

appInstance.app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
