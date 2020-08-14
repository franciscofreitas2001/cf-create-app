const prompts = require('prompts');

const selectFrontend = async () => {
  console.log('\n');
  try {
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Select a front-end framework for your project',
      choices: [
        {
          title: 'React',
          description: 'Default create-react-app app',
          value: 'react',
        },
        {
          title: 'Vue',
          description: 'Default @vue/cli create app',
          value: 'vue',
        },
        {
          title: 'Angular',
          description: 'Default @angular/cli new app',
          value: 'angular',
        },
        {
          title: "I don't want to include any frontend app in this project",
          decription:
            'No React/Vue/Angular nor HTML5 Deployer will be installed',
          value: false,
        },
      ],
      initial: 0,
    });

    return response.value;
  } catch (e) {
    console.log(e);
    return await selectFrontend();
  }
};

module.exports = selectFrontend;