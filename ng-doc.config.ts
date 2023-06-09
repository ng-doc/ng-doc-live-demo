import {NgDocConfiguration} from "@ng-doc/builder";
import {ngKeywordsLoader} from "@ng-doc/keywords-loaders";

const config: NgDocConfiguration = {
  cache: true,
  keywords: {
    loaders: [ngKeywordsLoader()]
  }
}

export default config;
