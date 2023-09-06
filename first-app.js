
console.log('hello');


// 파일 관련한 기본 모듈임 
const  fs = require('fs');
// 파일 이름(+경로), 내용 인자로 받아서 새로 파일을 생성함
fs.writeFileSync('hello.txt', 'this is new file');

