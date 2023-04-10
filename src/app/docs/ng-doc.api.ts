import {NgDocApi} from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API',
	scopes: [{
    name: 'my-lib',
    route: 'my-lib',
    include: 'src/app/code/**/*.ts',
    exclude: 'src/app/code/**/*.spec.ts'
  }],
};

export default Api;
