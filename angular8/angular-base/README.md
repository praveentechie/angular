# Angular
*use node >=12.14.1*

### TsConfig
* Reduce import path by declaring `paths` in `tsconfig.json`. Look for the example `@apcore` in `tsconfig.json`

### Components
* Angular cannot predict whether the return value of function() in template has changed, it needs to execute the function every time change detection runs.

### Pipe
* Passing multiple agruments to a pipe
  ```
  {{stringValue | toUpperCase : stringHelper.toUpperCase}}
  ```
* Pipes can also be chained
  ```
  {{stringValue | toUpperCase : stringHelper.toUpperCase | trimSpace}}
  ```