import {NgDocApi} from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API',
	scopes: [{
    name: 'my-lib',
    route: 'my-lib',
    include: 'src/app/code/**/*.ts',
  }],
};

export default Api;
